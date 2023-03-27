import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import {
  Edit as EditIcon,
  DeleteForever as DeleteIcon,
} from "@mui/icons-material/";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

import { useGetProductsQuery } from "../api/products";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 180, editable: true },
  { field: "title", headerName: "title", type: "string", editable: true },
  { field: "description", headerName: "Description", width: 400 },
  { field: "price", headerName: "Price", width: 120 },
  { field: "discountPercentage", headerName: "Discount", width: 120 },
  { field: "rating", headerName: "Rating", width: 120 },
  { field: "stock", headerName: "Stock", width: 120 },
  { field: "brand", headerName: "Brand", width: 200 },
  { field: "category", headerName: "Category", width: 200 },
  { field: "thumbnail", headerName: "Thumbnail", width: 200 },
  { field: "images", headerName: "Images", type: "url", width: 400 },
];

const ProductsList = () => {
  const { data: products = [], isLoading, isFetching } = useGetProductsQuery();
  const productsRow: GridRowsProp = products;

  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
        "& .MuiDataGrid-cell--editable": {
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#376331" : "rgb(217 243 190)",
        },
      }}
    >
      <DataGrid
        rows={productsRow}
        columns={columns}
        isCellEditable={(params) => params.row.age % 2 === 0}
      />
    </Box>
  );
};
export default ProductsList;
