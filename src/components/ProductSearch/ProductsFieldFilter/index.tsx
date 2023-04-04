import { TextField } from "@mui/material";
import { Product } from "../../../model/Product";
import { selectFiltredProducts } from "../../../store/selectors/selector";
import { useActions } from "../../../store/useActions";
import { useTypedSelector } from "../../../store/useTypedSelector";
import { StyledAutocomplete } from "./ProductFieldFilter.styled";

interface ProductsFieldFilterProps {
  field: keyof Product;
}

const ProductsFieldFilter: React.FC<ProductsFieldFilterProps> = ({ field }) => {
  const products = useTypedSelector(selectFiltredProducts);
  const { setFilter } = useActions();

  return (
    <StyledAutocomplete
      size="small"
      sx={{ minWidth: 400 }}
      options={Array.from(new Set(products.map((item) => item[field])))}
      renderInput={(params) => (
        <TextField {...params} label={`Search ${field}`} fullWidth />
      )}
      onInputChange={(event, value) => setFilter({ field: field, value })}
    />
  );
};

export default ProductsFieldFilter;
