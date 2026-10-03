import {
  Button,
  Chip,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import VerifiedSharpIcon from "@mui/icons-material/VerifiedSharp";
import { formatFileSize } from "@/utils/formatFileSize";

interface FileProps {
  name: string;
  size: Blob["size"];
  onRemove: () => void;
}

export default function File({ name, size, onRemove }: FileProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        padding: 2,
        borderRadius: 2,
        backgroundColor: "background.default",
        border: "2px solid #E6E8EB",
        marginTop: 2,
      }}
    >
      <Stack direction="row" sx={{ alignItems: "center", gap: 2 }}>
        <DescriptionOutlinedIcon
          sx={{
            color: "primary.dark",
            backgroundColor: "primary.light",
            padding: 1,
            borderRadius: 2,
            fontSize: 40,
          }}
        />
        <div>
          <Typography variant="body2" component="p" sx={{ fontWeight: 500 }}>
            {name}{" "}
            <Chip
              label="Ready"
              icon={<VerifiedSharpIcon />}
              color="success"
              size="small"
              sx={{ marginLeft: 1 }}
            />
          </Typography>
          <Typography variant="body2" component="p">
            {formatFileSize(size)}
          </Typography>
        </div>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Tooltip title="Delete file">
            <IconButton aria-label="delete" onClick={onRemove}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            startIcon={<VerifiedSharpIcon />}
            sx={{ ml: 2 }}
          >
            Submit for Verification
          </Button>
        </div>
      </Stack>
    </Paper>
  );
}
