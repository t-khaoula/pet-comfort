import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { ColorModeContext } from "../../theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";

const options = ["EN", "FR"];

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "rgb(241, 243, 242)",
        py: "4px",
        borderBottomRightRadius: 4,
        borderBottomRightRadius: 4,
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "300",
              color: "rgb(122,128,128)",
            }}
            variant="body2"
          >
            Free Express Shipping from 100 USD
          </Typography>
          <Box flexGrow={1} />
          <div>
            <div>
              {theme.palette.mode === "light" ? (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <DarkModeOutlined sx={{ fontSize: "16px", color: "#000" }} />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <LightModeOutlined sx={{ fontSize: "16px", color: "#000" }} />
                </IconButton>
              )}
            </div>
          </div>

          <List
            component="nav"
            aria-label="Device settings"
            sx={{ color: "#000", m: "0", p: "0" }}
          >
            <ListItemButton
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" }, m: "0", px: "0" }}
            >
              <ListItemText
                primary={options[selectedIndex]}
                sx={{ ".MuiTypography-root": { fontSize: "10px" } }}
              />
              <ExpandMore sx={{ fontSize: "16px" }} />
            </ListItemButton>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
                sx={{ fontSize: "11px", p: "3px 10px", minheight: "10px" }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <FacebookIcon sx={{ fontSize: "16px", mx: 1, color: "#000" }} />
          <InstagramIcon sx={{ fontSize: "16px", mx: 1, color: "#000" }} />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
