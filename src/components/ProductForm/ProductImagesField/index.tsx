import * as React from 'react';
import { Field, FieldArray } from 'formik';
import {
  TextField,
  Button,
  Grid,
  IconButton,
  Card,
  CardActions,
  CardMedia,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

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
  <FieldArray
    name="images"
    render={({ remove, push }) => (
      <>
        {images && images.length > 0
          ? images.map((image: string, index: number) => (
              <Grid item xs={6} key={`image-field-${index}`}>
                <Card>
                  <CardMedia component="img" sizes="100px" image={image} alt={`Image ${index}`} />
                  <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Tooltip title={'DELETE_IMAGE'}>
                      <IconButton aria-label="delete" color="error" onClick={() => remove(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                    <Field
                      as={TextField}
                      fullWidth
                      name={`images.${index}`}
                      label={`Image ${index + 1} URL`}
                      value={images[index]}
                      error={touched && erros && erros[index] && Boolean(erros && erros[index])}
                      helperText={touched && erros && erros[index]}
                      onChange={handleChange}
                    />
                  </CardActions>
                </Card>
              </Grid>
            ))
          : null}
        <Grid item xs={12}>
          <Button
            variant="outlined"
            startIcon={<AddPhotoAlternateIcon />}
            size="large"
            type="button"
            onClick={() => push('')}
          >
            ADD_AN_IMAGE
          </Button>
        </Grid>
      </>
    )}
  />
);

export default ProductImagesField;
