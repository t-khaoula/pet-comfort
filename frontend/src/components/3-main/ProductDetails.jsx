import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Typography, Stack, Button } from "@mui/material";

const ProductDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
        my: 2,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img width={300} src="src\assets\Product1_1.avif" alt="" />
      </Box>
      <Box sx={{ textAlign: { sx: "center", sm: "left" } }}>
        <Typography variant="h5">Cat Food</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="">
          15.99 USD
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, qui
          modi repellat rerum suscipit tempora dolores recusandae fugit facere
          dicta fugiat aliquid dolorum eos, expedita enim adipisci quidem
          repellendus unde.
        </Typography>
        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {["src/assets/Product1_2_.avif", "src/assets/Product1_3_.avif"].map(
            (item) => {
              return (
                <img
                  style={{ borderRadius: 3 }}
                  width={90}
                  height={100}
                  key={item}
                  src={item}
                  alt=""
                />
              );
            }
          )}
        </Stack>
        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
