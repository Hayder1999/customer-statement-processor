import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 16 }}>
        <Typography variant="h4" component="h3">
          hello world
        </Typography>
      </Box>
    </Container>
  );
}
