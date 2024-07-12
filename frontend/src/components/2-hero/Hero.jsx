import { Box, Container, Typography, Stack, Link, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import { useTheme } from "@emotion/react";
import IconSection from "./IconSection";

const mySlider = [
  { text: "ACCESSORIES", link: "src/assets/Hero.jpg" },
  { text: "PET FOOD", link: "src/assets/Hero2.jpg" },
];

const Hero = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{
          pt: 2,
          mt: 2.5,
          mb: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} alt="Hero image" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography sx={{ color: "#222" }} variant="h5">
                    PET COLLECTION
                  </Typography>
                  <Typography
                    sx={{ color: "#222", fontWeight: 400, my: 1 }}
                    variant="h3"
                  >
                    {item.text}
                  </Typography>
                  <Stack
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography color={"#333"} mr={1} variant="h5">
                      SALE UP TO
                    </Typography>
                    <Typography color={"#D23F57"} variant="h5">
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: "#000", fontWeight: 300, my: 1 }}>
                    Get Free Shipping on Orders Over 100 USD
                  </Typography>
                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                      },
                    }}
                  >
                    SHOP NOW
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box sx={{ width: "100%", display: { xs: "none", md: "block" } }}>
          <Box sx={{ position: "relative", mb: "8px" }}>
            <img
              src="src\assets\img1.png"
              alt="banner"
              style={{ width: "100%" }}
            />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "18px" }}
              >
                New Arrivals
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#2B3445", mt: 1, lineHeight: "16px" }}
              >
                Summer Sale
              </Typography>
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",

                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                Shop now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img
              src="src\assets\img2.png"
              alt="banner"
              style={{ width: "100%" }}
            />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "18px" }}
              >
                Pet food
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#2B3445", mt: 1, lineHeight: "16px" }}
              >
                Best quality
              </Typography>
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",

                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                Shop now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      <IconSection />
    </Container>
  );
};

export default Hero;
