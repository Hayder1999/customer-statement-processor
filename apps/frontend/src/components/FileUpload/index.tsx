"use client";
import { Button, Divider, Paper, Stack } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { useDropzone } from "react-dropzone";
import FileItem from "./components/File";
import Info from "./components/Info";
import { useState } from "react";

interface UploadedFile {
  id: string;
  file: File;
}

export default function FileUpload() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxSize: 1000000, // 10 MB
    // Check this with the Rabo devs
    onDrop: (acceptedFiles) =>
      setFiles(
        acceptedFiles.map((file) => ({ id: crypto.randomUUID(), file })),
      ),
  });

  const removeFile = (id: string) =>
    setFiles((prev) => prev.filter((f) => f.id !== id));

  return (
    <section className="container">
      <Paper
        elevation={0}
        sx={{ padding: 4, borderRadius: 2, border: "2px solid #E6E8EB" }}
      >
        <div
          {...getRootProps({ className: "dropzone" })}
          style={{
            border: "3px solid #E4BEB1",
            borderStyle: "dashed",
            borderRadius: 5,
          }}
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
            <h4>Select statement file to validate</h4>
            <p>
              Drag and drop your file here, or click to browse files from your
              computer.
            </p>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              startIcon={<UploadFileIcon />}
            >
              Browse Files
            </Button>
          </Stack>
        </div>
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
