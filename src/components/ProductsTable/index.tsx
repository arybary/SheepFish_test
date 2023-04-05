import { useEffect } from 'react';
import { selectProductsForTable } from '../../store/selectors/selector';
import { useActions } from '../../store/useActions';
import { useTypedSelector } from '../../store/useTypedSelector';
import ProductTableRow from './ProductsTableBodyRow';
import {
  StyledHeaderTitle,
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  TableWrapper,
} from './ProductTable.styled';
import { Product } from '../../model/Product';
import ProductsSortingBtn from './ProductsSortingBtn';

interface TableHeaderCell {
  name: string;
  sortBy: keyof Product | false;
}

const tableHeaderData: TableHeaderCell[] = [
  { name: '#', sortBy: 'id' },
  { name: 'TITLE', sortBy: 'title' },
  { name: 'DESCRIPTION', sortBy: 'description' },
  { name: 'PRICE $', sortBy: 'price' },
  { name: 'DISCOUNT %', sortBy: 'discountPercentage' },
  { name: 'Rating', sortBy: 'rating' },
  { name: 'STOCK', sortBy: 'stock' },
  { name: 'BRAND', sortBy: 'brand' },
  { name: 'CATEGORY', sortBy: 'category' },
  { name: 'ACTIONS', sortBy: false },
];

const ProductTable: React.FC = () => {
  const { fetchProducts } = useActions();
  useEffect(() => {
    fetchProducts();
  }, []);

  const products = useTypedSelector(selectProductsForTable);

  return (
    <TableWrapper>
      <StyledTable>
        <StyledTableHead>
          <tr>
            {tableHeaderData.map(({ name, sortBy }) => (
              <StyledTableCell key={name + sortBy}>
                <StyledHeaderTitle>
                  {name}
                  {sortBy && <ProductsSortingBtn nameCell={sortBy} />}
                </StyledHeaderTitle>
              </StyledTableCell>
            ))}
          </tr>
        </StyledTableHead>

        <StyledTableBody>
          {products.map(product => (
            <ProductTableRow key={product.id} {...product} product={product} {...product} />
          ))}
        </StyledTableBody>
      </StyledTable>
    </TableWrapper>
  );
};

export default ProductTable;
