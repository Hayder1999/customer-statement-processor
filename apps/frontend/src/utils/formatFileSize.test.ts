import { describe, expect, it } from "vitest";
import { formatFileSize } from "./formatFileSize";

describe("formatFileSize", () => {
  it("formats sizes below 1 KB in bytes", () => {
    expect(formatFileSize(0)).toBe("0 B");
    expect(formatFileSize(1)).toBe("1 B");
    expect(formatFileSize(999)).toBe("999 B");
  });

  it("formats sizes from 1 KB up to 1 MB in kilobytes", () => {
    expect(formatFileSize(1_000)).toBe("1.00 KB");
    expect(formatFileSize(1_536)).toBe("1.54 KB");
    expect(formatFileSize(999_000)).toBe("999.00 KB");
  });

  it("formats sizes from 1 MB in megabytes", () => {
    expect(formatFileSize(1_000_000)).toBe("1.00 MB");
    expect(formatFileSize(2_500_000)).toBe("2.50 MB");
    expect(formatFileSize(1_000_000_000)).toBe("1000.00 MB");
  });

  it("switches to megabytes when kilobytes would round up to 1000", () => {
    expect(formatFileSize(999_994)).toBe("999.99 KB");
    expect(formatFileSize(999_995)).toBe("1.00 MB");
    expect(formatFileSize(999_999)).toBe("1.00 MB");
  });
});
