import {
  Container,
  Stack,
  Typography,
  Box,
  Button,
  IconButton,
  CircularProgress,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product.js";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setMyData(newValue);
    }
  };

  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allproductsAPI = "products?populate=*";
  const dogsCategoryAPI =
    "products?populate=*&filters[productCategory][$eq]=Dogs";
  const catsCategoryAPI =
    "products?populate=*&filters[productCategory][$eq]=Cats";

  const [myData, setMyData] = useState(allproductsAPI);

  const { data, error, isLoading } = useGetproductByNameQuery(myData);
  const [clickedProduct, setClickedProduct] = useState({});

  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 11, textAlign: "center" }}>
        <Typography variant="h6">{error.error}</Typography>;
        <Typography variant="h6">Please try again later</Typography>;
      </Container>
    );
  }

  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              Our new selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            color="error"
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solig rgba(233,69,96,0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary, mx: 1 }}
              className="myButton"
              value={allproductsAPI}
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary, mx: 1 }}
              className="myButton"
              value={catsCategoryAPI}
              aria-label="centered"
            >
              Cat Category
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary, mx: 1 }}
              className="myButton"
              value={dogsCategoryAPI}
              aria-label="right aligned"
            >
              Dog Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          sx={{
            gap: { xs: 2, md: 3 },
            justifyContent: { xs: "center", md: "start" },
          }}
        >
          <AnimatePresence>
            {data.data.map((item) => {
              return (
                <Card
                  component={motion.section}
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                  key={item.id}
                  sx={{
                    maxWidth: 333,
                    mt: 6,
                    ":hover .MuiCardMedia-root": {
                      scale: "1.1",
                      transition: "0.3s",
                    },
                  }}
                >
                  <CardMedia
                    sx={{ height: 277 }}
                    image={`${item.attributes.productImg.data[0].attributes.url}`}
                  />
                  <CardContent>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography gutterBottom variant="h6" component="div">
                        {item.attributes.productTitle}
                      </Typography>
                      <Typography variant="subtitle1" component="p">
                        ${item.attributes.productPrice}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {item.attributes.productDescription}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                      onClick={() => {
                        handleClickOpen();
                        setClickedProduct(item);
                      }}
                    >
                      <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="small" />
                      Add to Cart
                    </Button>
                    <Box sx={{ width: "auto" }} />
                  </CardActions>
                </Card>
              );
            })}
          </AnimatePresence>
        </Stack>
        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            onClick={handleClose}
            sx={{
              ":hover": { rotate: "180deg", transition: ".3s", color: "red" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
          >
            <CloseIcon />
          </IconButton>{" "}
          <ProductDetails clickedProduct={clickedProduct} />
        </Dialog>
      </Container>
    );
  }
};

export default Main;
