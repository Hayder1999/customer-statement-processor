import { Container, Paper, Stack, Typography } from "@mui/material";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Paper>
        <Container maxWidth="md" sx={{ py: 4, color: "#515F7A" }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Typography variant="body2" component="p">
              &copy; {currentYear} Statement Validator. All rights reserved.
            </Typography>
            <Typography variant="body2" component="p">
              Internal Compliance & Audit
            </Typography>
          </Stack>
        </Container>
      </Paper>
    </footer>
  );
}
