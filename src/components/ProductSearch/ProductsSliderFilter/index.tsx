import React from "react";
import { Product } from "../../../model/Product";
import { FilterValue } from "../../../store/slice/filter.slice";
import { useActions } from "../../../store/useActions";
import {
  Wrapper,
  StyledSlider,
  TitleSlider,
  StyledTextField,
} from "./ProductSliderFilter.styled";

interface ProductSliderFilterProps {
  name: keyof Product;
  startValue: FilterValue;
}

const ProductSliderFilter: React.FC<ProductSliderFilterProps> = ({
  name,
  startValue,
}) => {
  const { setFilter } = useActions();
  const [value, setValue] = React.useState<number[]>(startValue);
  const nameForTitle = name.slice(0, 8);
  const handleChange = (newValue: number | number[]) => {
    setValue(newValue as number[]);
    setFilter({ field: name, value: newValue as FilterValue });
  };

  return (
    <Wrapper>
      <TitleSlider>{nameForTitle}:</TitleSlider>
      <StyledTextField
        size="small"
        value={value[0]}
        type="number"
        onChange={(event) =>
          handleChange([Number(event.target.value), value[1]])
        }
      />
      <StyledSlider
        step={0.1}
        value={value}
        size="small"
        valueLabelDisplay="auto"
        onChange={(e, newValue: number | number[]) => handleChange(newValue)}
        min={startValue[0]}
        max={startValue[1]}
      />
      <StyledTextField
        value={value[1]}
        type="number"
        size="small"
        onChange={(event) =>
          handleChange([value[0], Number(event.target.value)])
        }
      />
    </Wrapper>
  );
};

export default ProductSliderFilter;
