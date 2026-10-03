export function formatFileSize(bytes: Blob["size"]): string {
  if (bytes < 1_000) {
    return `${bytes} B`;
  }

  // Compare the rounded value so e.g. 999,999 bytes shows as 1.00 MB, not 1000.00 KB
  const kilobytes = (bytes / 1_000).toFixed(2);
  if (Number(kilobytes) < 1_000) {
    return `${kilobytes} KB`;
  }

  return `${(bytes / 1_000_000).toFixed(2)} MB`;
}
