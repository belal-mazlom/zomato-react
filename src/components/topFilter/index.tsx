import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@utils/defines';
import RangeFilter from '../rangeFilter';
import CheckBoxList from './checkBoxList';
import { Container, Content, LeftSide, ToggleBtn } from './style';
import { CATEGORIES, COST, CUISINES, RATING } from '@utils/redux/types';

interface Props {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TopFilter({ hidden, setHidden }: Props) {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.categories);
  const cuisines = useSelector((state: RootState) => state.cuisines);
  const maxCost = useSelector((state: RootState) => state.maxCost);
  const marks: any = { 0: '$'};
  marks[maxCost] = '$$$$$';

  return (
    <Container className={hidden ? 'hide' : ''}>
      <Content>
        <div>
          <CheckBoxList
            title={'category'}
            items={categories}
            onChange={item => dispatch({ type: CATEGORIES.toggle, payload: { item } })}
          />
          <CheckBoxList
            title={'cuisine'}
            items={cuisines}
            onChange={item => dispatch({ type: CUISINES.toggle, payload: { item } })}
            widthFactory={2}
          />

          <LeftSide>
            <RangeFilter
              title={'Rating'}
              min={0}
              max={5}
              step={1}
              defaultValue={[0, 5]}
              tipFormatter={(value: string) => value}
              marks={{ 0: 0, 5: 5 }}
              onChange={rating => dispatch({ type: RATING.set, payload: { rating } })}
            />
            {maxCost > 0 && <RangeFilter
              title={'Cost'}
              min={0}
              max={maxCost}
              step={1}
              defaultValue={[0, maxCost]}
              tipFormatter={(value: string) => `${value} $`}
              marks={marks}
              onChange={cost => dispatch({ type: COST.set, payload: { cost } })}
            />}
          </LeftSide>
        </div>
      </Content>
      <ToggleBtn onClick={() => setHidden(state => !state)} />
    </Container>
  );
}
