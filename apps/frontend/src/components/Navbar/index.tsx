import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { Container } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" elevation={2} sx={{ backgroundColor: "background.paper", }}>
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <ReceiptLongIcon color="primary" />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 2, color: "#515F7A" }}
          >
            Statement Processor
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
