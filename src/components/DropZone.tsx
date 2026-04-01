"use client";

import { useDropzone, type FileRejection } from "react-dropzone";
import { useCallback } from "react";

const MAX_SIZE = 20 * 1024 * 1024; // 20MB

interface DropZoneProps {
  onFiles: (files: File[]) => void;
  hasFiles: boolean;
}

export default function DropZone({ onFiles, hasFiles }: DropZoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: readonly FileRejection[]) => {
      if (rejectedFiles.length > 0) {
        const messages = rejectedFiles
          .map((r) => `${r.file.name}: ${r.errors.map((e) => e.message).join(", ")}`)
          .join("\n");
        alert(`Some files were rejected:\n${messages}`);
      }
      if (acceptedFiles.length > 0) {
        onFiles(acceptedFiles);
      }
    },
    [onFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxSize: MAX_SIZE,
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className={`
        relative cursor-pointer select-none
        border-2 border-dashed rounded-2xl
        transition-all duration-200 ease-out
        ${isDragActive
          ? "border-coral bg-coral/5 scale-[1.01]"
          : "border-ink-200 hover:border-ink-400 bg-white hover:bg-ink-50/50"
        }
        ${hasFiles ? "py-8 px-10" : "py-16 px-10"}
      `}
    >
      <input {...getInputProps()} />

      <div className="flex flex-col items-center gap-4 text-center">
        {/* Icon */}
        <div
          className={`
            w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-200
            ${isDragActive ? "bg-coral text-white rotate-3" : "bg-ink-100 text-ink-400"}
          `}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M18 4H8C6.9 4 6 4.9 6 6V26C6 27.1 6.9 28 8 28H24C25.1 28 26 27.1 26 26V12L18 4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 4V12H26"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 19V24M13.5 21.5L16 19L18.5 21.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div>
          <p className="font-display font-semibold text-lg text-ink-800">
            {isDragActive ? "Drop your PDFs here" : hasFiles ? "Add more PDFs" : "Drop PDFs here"}
          </p>
          <p className="text-sm text-ink-400 mt-1">
            {isDragActive ? "Release to add files" : "or click to browse — up to 20 MB per file"}
          </p>
        </div>

        {!hasFiles && (
          <button
            type="button"
            className="mt-1 px-6 py-2.5 bg-ink-900 text-white text-sm font-medium rounded-lg
                       hover:bg-ink-700 transition-colors duration-150 pointer-events-none"
          >
            Choose Files
          </button>
        )}
      </div>
    </div>
  );
}
