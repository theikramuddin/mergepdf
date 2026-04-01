"use client";

import { useState, useCallback } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import DropZone from "./DropZone";
import FileList, { FileEntry } from "./FileList";
import MergeButton from "./MergeButton";
import { mergePDFs, downloadBlob } from "@/lib/pdf";

let idCounter = 0;
const nextId = () => `file-${++idCounter}`;

export default function MergeTool() {
  const [files, setFiles] = useState<FileEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleFiles = useCallback((newFiles: File[]) => {
    setError(null);
    setSuccess(false);
    setFiles((prev) => [
      ...prev,
      ...newFiles.map((file) => ({ id: nextId(), file })),
    ]);
  }, []);

  const handleReorder = useCallback((activeId: string, overId: string) => {
    setFiles((prev) => {
      const oldIndex = prev.findIndex((f) => f.id === activeId);
      const newIndex = prev.findIndex((f) => f.id === overId);
      return arrayMove(prev, oldIndex, newIndex);
    });
  }, []);

  const handleRemove = useCallback((id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
    setSuccess(false);
    setError(null);
  }, []);

  const handleClearAll = () => {
    setFiles([]);
    setError(null);
    setSuccess(false);
  };

  const handleMerge = async () => {
    if (files.length < 2) return;
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const merged = await mergePDFs(files.map((f) => f.file));
      downloadBlob(merged, "merged.pdf");
      setSuccess(true);
    } catch (e) {
      setError(
        e instanceof Error
          ? `Failed to merge: ${e.message}`
          : "An unexpected error occurred. Please check your files and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const totalSize = files.reduce((sum, f) => sum + f.file.size, 0);
  const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(1);

  return (
    <div className="bg-ink-50/60 rounded-3xl border border-ink-100 p-6 md:p-8 shadow-sm">
      {/* Drop zone */}
      <DropZone onFiles={handleFiles} hasFiles={files.length > 0} />

      {/* File list */}
      {files.length > 0 && (
        <div className="mt-6">
          {/* List header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-display font-semibold text-ink-700">
                {files.length} {files.length === 1 ? "file" : "files"}
              </span>
              <span className="text-xs font-mono text-ink-300">·</span>
              <span className="text-xs font-mono text-ink-400">{totalSizeMB} MB total</span>
            </div>
            <button
              onClick={handleClearAll}
              className="text-xs text-ink-400 hover:text-red-500 transition-colors font-medium"
            >
              Clear all
            </button>
          </div>

          {/* Hint */}
          {files.length > 1 && (
            <p className="text-xs text-ink-400 mb-3 flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 1V11M1 6H11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
              Drag files to reorder · hover to reveal remove button
            </p>
          )}

          <FileList
            files={files}
            onReorder={handleReorder}
            onRemove={handleRemove}
          />
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-100 flex gap-3 items-start animate-fade-in">
          <span className="text-red-400 flex-shrink-0 mt-0.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 5V8.5M8 11H8.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* Success */}
      {success && (
        <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex gap-3 items-center animate-fade-in">
          <span className="text-emerald-500 flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <p className="text-sm text-emerald-700 font-medium">
            Merged successfully! Your download should have started.
          </p>
        </div>
      )}

      {/* Merge button */}
      <div className="mt-5">
        <MergeButton
          onClick={handleMerge}
          isLoading={isLoading}
          disabled={files.length < 2}
          fileCount={files.length}
        />
        {files.length < 2 && files.length > 0 && (
          <p className="text-center text-xs text-ink-400 mt-2">
            Add at least one more PDF to merge
          </p>
        )}
        {files.length === 0 && (
          <p className="text-center text-xs text-ink-400 mt-2">
            Upload 2 or more PDF files to get started
          </p>
        )}
      </div>

      {/* Privacy note */}
      <p className="mt-4 text-center text-xs text-ink-300 flex items-center justify-center gap-1.5">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path
            d="M5.5 1L1.5 2.5V5.5C1.5 7.7 3.3 9.7 5.5 10C7.7 9.7 9.5 7.7 9.5 5.5V2.5L5.5 1Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
        Files never leave your browser - 100% private
      </p>
    </div>
  );
}
