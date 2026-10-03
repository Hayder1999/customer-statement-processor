"use client";
import {
  Alert,
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { useDropzone } from "react-dropzone";
import FileItem from "./components/FileItem";
import Info from "./components/Info";
import { useState } from "react";

const MAX_FILE_SIZE = 10 * 1000 * 1000; // 10 MB

const rejectionMessages: Record<string, string> = {
  "file-too-large": "File is larger than 10 MB.",
  "file-invalid-type": "Only CSV (.csv) or XML (.xml) files are supported.",
  "too-many-files": "Only 1 file can be uploaded at a time.",
};

interface UploadedFile {
  id: string;
  file: File;
}

export default function FileUpload() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    multiple: false,
    maxSize: MAX_FILE_SIZE,
    accept: {
      "text/csv": [".csv"],
      "application/xml": [".xml"],
      "text/xml": [".xml"],
    },
    // Check this with the Rabo devs
    onDrop: (acceptedFiles) =>
      setFiles(
        acceptedFiles.map((file) => ({ id: crypto.randomUUID(), file })),
      ),
  });

  const removeFile = (id: string) =>
    setFiles((prev) => prev.filter((f) => f.id !== id));

  const rejection = fileRejections[0]?.errors[0];

  return (
    <section>
      <Paper
        elevation={0}
        sx={{
          padding: 4,
          borderRadius: 2,
          border: "2px solid",
          borderColor: "divider",
        }}
      >
        <Box
          {...getRootProps()}
          sx={{ border: "3px dashed #E4BEB1", borderRadius: "5px" }}
        >
          <Stack
            direction="column"
            spacing={2}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              padding: 4,
              backgroundColor: "background.default",
            }}
          >
            <input {...getInputProps()} />
            <DescriptionOutlinedIcon
              sx={{
                color: "primary.dark",
                backgroundColor: "primary.light",
                padding: 2,
                borderRadius: 100,
                fontSize: 60,
              }}
            />
            <Typography
              variant="subtitle1"
              component="h4"
              sx={{ fontWeight: 700 }}
            >
              Select statement file to validate
            </Typography>
            <Typography variant="body1">
              Drag and drop your file here, or click to browse files from your
              computer.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              startIcon={<UploadFileIcon />}
            >
              Browse Files
            </Button>
          </Stack>
        </Box>
        {rejection && (
          <Alert severity="error" sx={{ marginTop: 2 }}>
            {rejectionMessages[rejection.code] ?? rejection.message}
          </Alert>
        )}
        {files.map(({ id, file }) => (
          <FileItem
            key={id}
            name={file.name}
            size={file.size}
            onRemove={() => removeFile(id)}
          />
        ))}
        <Divider sx={{ marginY: 2 }} />
        <Info />
      </Paper>
    </section>
  );
}
