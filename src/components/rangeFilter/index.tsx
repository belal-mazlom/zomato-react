import React, { useContext } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Container, RangContainer, Title } from './style';
import { ThemeContext } from 'styled-components';

interface Props {
  title: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number[];
  marks: Record<
    number,
    | React.ReactNode
    | {
        style?: React.CSSProperties;
        label?: string;
      }
  >;
  tipFormatter: any;
  onChange: (value: number[]) => void;
}

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export default function ({
  title,
  min,
  max,
  defaultValue,
  marks,
  tipFormatter,
  step,
  onChange,
}: Props) {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <Title>{title}</Title>
      <RangContainer>
        <Range
          min={min}
          max={max}
          step={step}
          defaultValue={defaultValue}
          marks={marks}
          tipFormatter={tipFormatter}
          trackStyle={[{ backgroundColor: theme.primaryColor, height: 10 }]}
          railStyle={{ height: 10 }}
          dotStyle={{ display: 'none'}}
          handleStyle={[{ width: 20, height: 20, borderColor: theme.primaryColor }]}
          onChange={onChange}
        />
      </RangContainer>
    </Container>
  );
}
