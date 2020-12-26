import React, { useContext, useState } from 'react';
import RangeFilter from '../rangeFilter';
import CheckBoxList, { CheckboxItemProps } from './CheckBoxList';
import { Container, LeftSide, ToggleBtn } from './style';

interface Props {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

function toggleSelect(
  setState: React.Dispatch<React.SetStateAction<CheckboxItemProps[]>>,
  item: CheckboxItemProps
) {
  setState((items: CheckboxItemProps[]) => {
    const itemIndex = items.findIndex(
      (_item: CheckboxItemProps) => _item.id === item.id
    );
    item.checked = !item.checked;
    items[itemIndex] = item;
    return [...items];
  });
}

export default function TopFilter({ hidden, setHidden }: Props) {
  const [categories, setCategories] = useState<CheckboxItemProps[]>([
    { id: 1, label: 'Food 1', checked: false },
    { id: 2, label: 'Food 2', checked: false },
    { id: 3, label: 'Food 3', checked: false },
    { id: 4, label: 'Food 4', checked: false },
  ]);

  const [cuisines, setCuisines] = useState<CheckboxItemProps[]>([
    { id: 1, label: 'cuisine 1', checked: false },
    { id: 2, label: 'cuisine 2', checked: false },
    { id: 3, label: 'cuisine 3', checked: false },
    { id: 4, label: 'cuisine 4', checked: false },
  ]);

  return (
    <Container className={hidden ? 'hide' : ''}>
      <CheckBoxList
        title={'category'}
        items={categories}
        onChange={item => toggleSelect(setCategories, item)}
      />
      <CheckBoxList
        title={'cuisine'}
        items={cuisines}
        onChange={item => toggleSelect(setCuisines, item)}
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
          onChange={() => {}}
        />
        <RangeFilter
          title={'Cost'}
          min={0}
          max={80}
          step={10}
          defaultValue={[0, 80]}
          tipFormatter={(value: string) => `${value} $`}
          marks={{ 0: '$', 80: '$$$$' }}
          onChange={() => {}}
        />
      </LeftSide>
      <ToggleBtn onClick={() => setHidden(state => !state)}/>
    </Container>
  );
}
