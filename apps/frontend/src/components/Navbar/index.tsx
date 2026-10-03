import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{ backgroundColor: "background.paper" }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <ReceiptLongIcon color="primary" />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 2, color: "text.secondary" }}
          >
            Statement Validator
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
