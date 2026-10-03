import {
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import VerifiedSharpIcon from "@mui/icons-material/VerifiedSharp";
import Panel from "@/components/Panel";
import { formatFileSize } from "@/utils/formatFileSize";

interface FileItemProps {
  name: string;
  size: Blob["size"];
  onRemove: () => void;
}

export default function FileItem({ name, size, onRemove }: FileItemProps) {
  return (
    <Panel>
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
        <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
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
        </Box>
      </Stack>
    </Panel>
  );
}
