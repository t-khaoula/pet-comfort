import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightOutlined from "@mui/icons-material/KeyboardArrowRightOutlined";

const Links = ({ title }) => {
  return (
    <Box
      sx={{
        ":hover .show-when-hover": { display: "block" },
        ":hover": { cursor: "pointer" },
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography>{title}</Typography>
      <ExpandMoreIcon sx={{ fontSize: "16px", ml: 1 }} />
      <Box
        className="show-when-hover"
        sx={{
          display: "none",
          position: "absolute",
          minWidth: "170px",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                  }}
                >
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Food"
                  />
                  <Box flexGrow={1} />
                </ListItemButton>
              </ListItem>

              <ListItem
                sx={{
                  ":hover .sub-link": { display: "block" },
                  position: "relative",
                }}
                disablePadding
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                  }}
                >
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Treats"
                  />
                  <Box flexGrow={1} />

                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>

                <Box
                  className="sub-link"
                  sx={{
                    display: "none",

                    position: "absolute",
                    top: 0,
                    left: "100%",
                  }}
                >
                  <Paper sx={{ ml: 1, minWidth: 150 }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{
                              display: "flex",
                              p: 0,
                              px: 1.5,
                            }}
                          >
                            <ListItemText
                              sx={{
                                "& .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 300,
                                },
                              }}
                              primary="Crunchy Treats"
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{
                              display: "flex",
                              p: 0,
                              px: 1.5,
                            }}
                          >
                            <ListItemText
                              sx={{
                                "& .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 300,
                                },
                              }}
                              primary="Training Treats"
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                  }}
                >
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Accessories"
                  />
                  <Box flexGrow={1} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                  }}
                >
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Toys"
                  />
                  <Box flexGrow={1} />
                </ListItemButton>
              </ListItem>
            </List>

            {/* <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText sx={{".MuiTypography-root": {fontSize:15px }}} primary="Trash" />
                </ListItemButton>
              </ListItem>
            </List> */}
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;
