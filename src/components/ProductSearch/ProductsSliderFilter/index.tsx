import { Box, Grid, Slider, Typography } from "@mui/material";
import React from "react";
import { Product } from "../../../model/Product";
import { FilterValue } from "../../../store/slice/filter.slice";
import { useActions } from "../../../store/useActions";

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
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    setFilter({ field: name, value: newValue as FilterValue });
  };

  return (
    <Box sx={{ width: "50%" }}>
      <Typography gutterBottom>{name}</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>{value[0]}</Grid>
        <Grid item xs>
          <Slider
            step={0.1}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={startValue[0]}
            max={startValue[1]}
          />
        </Grid>
        <Grid item>{value[1]}</Grid>
      </Grid>
    </Box>
  );
};

export default ProductSliderFilter;
