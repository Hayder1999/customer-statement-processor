import FileUpload from "@/components/FileUpload";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <div>
      <Typography variant="h3" component="h1">
        Customer Statement Validation
      </Typography>
      <Typography variant="body1" component="p" sx={{ marginTop: 2 }}>
        Upload your monthly customer statement file to verify transaction
        references, balance reconciliations, and format integrity.
      </Typography>
      <Box sx={{ marginTop: 4 }} />
      <FileUpload />
    </div>
  );
}
