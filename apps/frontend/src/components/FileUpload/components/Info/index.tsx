import { Chip, Stack } from "@mui/material";
import Filter1SharpIcon from "@mui/icons-material/Filter1Sharp";
import VerifiedSharpIcon from "@mui/icons-material/VerifiedSharp";
import FolderZipSharpIcon from "@mui/icons-material/FolderZipSharp";

const infoItems = [
  {
    icon: <Filter1SharpIcon />,
    label: "Only 1 file at a time",
  },
  {
    icon: <VerifiedSharpIcon />,
    label: "Supported: CSV (.csv) or XML (.xml)",
  },
  {
    icon: <FolderZipSharpIcon />,
    label: "Maximum file size: 10 MB",
  },
];

export default function Info() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={4}
      sx={{ alignItems: "center", justifyContent: "center" }}
    >
      {infoItems.map((item) => (
        <Chip
          key={item.label}
          icon={item.icon}
          label={item.label}
          sx={{
            backgroundColor: "background.default",
            border: "1px solid",
            borderColor: "divider",
            paddingX: 2,
            paddingY: 1,
          }}
        />
      ))}
    </Stack>
  );
}
