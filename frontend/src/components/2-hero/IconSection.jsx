import {
  Container,
  Stack,
  Typography,
  Box,
  Divider,
  useMediaQuery,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import { ThemeContext, useTheme } from "@emotion/react";

const IconSection = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{ mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}
    >
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}
      >
        <MyBox
          icon={<ElectricBoltIcon fontSize="large" />}
          title={"Fast Delivery"}
          subTitle={"Start from 10 USD"}
        />
        <MyBox
          icon={<WorkspacePremiumIcon fontSize="large" />}
          title={"Money Back Guarantee"}
          subTitle={"7 Days Money Back"}
        />
        <MyBox
          icon={<AccessAlarmsIcon fontSize="large" />}
          title={"365 Days"}
          subTitle={"For Free Return"}
        />
        <MyBox
          icon={<CreditScoreIcon fontSize="large" />}
          title={"Payment"}
          subTitle={"Secure System"}
        />
      </Stack>
    </Container>
  );
};

export default IconSection;

const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        py: 1.6,
        justifyContent: useMediaQuery("(min-width: 600px)") ? "center" : "left",
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
