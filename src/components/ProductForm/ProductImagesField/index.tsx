import * as React from "react";
import { Field, FieldArray } from "formik";
import {
  TextField,
  Button,
  Typography,
  Grid,
  IconButton,
  Card,
  CardActions,
  CardMedia,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

interface ProductImagesProps {
  touched: boolean | undefined;
  erros: string | string[] | undefined;
  images: string[];
  handleChange: (e: any) => void;
}

const ProductImagesField: React.FC<ProductImagesProps> = ({
  touched,
  erros,
  images,
  handleChange,
}) => (
  <>
    <Typography variant="h6" component="h2">
      Product images
    </Typography>

    <FieldArray
      name="images"
      render={({ remove, push }) => (
        <Grid container spacing={2}>
          {images && images.length > 0
            ? images.map((image: string, index: number) => (
                <Grid item xs={6} key={`image-field-${index}`}>
                  <Card>
                    <CardMedia
                      component="img"
                      image={image}
                      alt={`Image ${index}`}
                    />
                    <CardActions sx={{ justifyContent: "flex-end" }}>
                      <IconButton
                        aria-label="delete"
                        onClick={() => remove(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </CardActions>

                    <Field
                      as={TextField}
                      fullWidth
                      name={`images.${index}`}
                      label={`Image ${index + 1} URL`}
                      value={images[index]}
                      error={
                        touched &&
                        erros &&
                        erros[index] &&
                        Boolean(erros && erros[index])
                      }
                      helperText={touched && erros && erros[index]}
                      onChange={handleChange}
                    />
                  </Card>
                </Grid>
              ))
            : null}
          <Button size="large" type="button" onClick={() => push("")}>
            Add an Image <AddPhotoAlternateIcon />
          </Button>
        </Grid>
      )}
    />
  </>
);

export default ProductImagesField;
