import { Paper } from "@mui/material";
import { ReactNode } from "react";

export default function Panel({ children }: { children: ReactNode }) {
  return (
    <Paper
      elevation={0}
      sx={[
        {
          padding: 2,
          borderRadius: 2,
          backgroundColor: "background.default",
          border: "2px solid",
          borderColor: "divider",
          marginTop: 2,
        },
      ]}
    >
      {children}
    </Paper>
  );
}
