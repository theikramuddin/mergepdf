"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { formatFileSize } from "@/lib/pdf";

interface SortableFileItemProps {
  id: string;
  file: File;
  index: number;
  onRemove: (id: string) => void;
}

export default function SortableFileItem({
  id,
  file,
  index,
  onRemove,
}: SortableFileItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
    zIndex: isDragging ? 50 : "auto",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        group flex items-center gap-3 px-4 py-3 rounded-xl bg-white
        border border-ink-100 shadow-sm
        transition-shadow duration-150
        ${isDragging ? "shadow-xl ring-2 ring-coral/30" : "hover:shadow-md"}
        animate-slide-up
      `}
    >
      {/* Drag handle */}
      <button
        className="flex-shrink-0 cursor-grab active:cursor-grabbing text-ink-300 hover:text-ink-500 transition-colors touch-none"
        {...attributes}
        {...listeners}
        aria-label="Drag to reorder"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <circle cx="5.5" cy="4" r="1.5" />
          <circle cx="10.5" cy="4" r="1.5" />
          <circle cx="5.5" cy="8" r="1.5" />
          <circle cx="10.5" cy="8" r="1.5" />
          <circle cx="5.5" cy="12" r="1.5" />
          <circle cx="10.5" cy="12" r="1.5" />
        </svg>
      </button>

      {/* Order badge */}
      <span className="flex-shrink-0 w-6 h-6 rounded-md bg-ink-100 text-ink-400 text-xs font-mono font-medium flex items-center justify-center">
        {index + 1}
      </span>

      {/* PDF icon */}
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-coral/10 flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M9 2H4C3.45 2 3 2.45 3 3V13C3 13.55 3.45 14 4 14H12C12.55 14 13 13.55 13 13V6L9 2Z"
            fill="#ff4d2e"
            opacity="0.8"
          />
          <path d="M9 2V6H13" fill="#ff4d2e" opacity="0.5" />
          <text x="5.5" y="11.5" fontSize="3.5" fill="white" fontWeight="bold" fontFamily="monospace">
            PDF
          </text>
        </svg>
      </div>

      {/* File info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-ink-800 truncate">{file.name}</p>
        <p className="text-xs text-ink-400 font-mono">{formatFileSize(file.size)}</p>
      </div>

      {/* Remove button */}
      <button
        onClick={() => onRemove(id)}
        aria-label={`Remove ${file.name}`}
        className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center
                   text-ink-300 hover:text-red-500 hover:bg-red-50
                   transition-all duration-150 opacity-0 group-hover:opacity-100"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M11 3L3 11M3 3L11 11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
