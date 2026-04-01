"use client";

interface MergeButtonProps {
  onClick: () => void;
  isLoading: boolean;
  disabled: boolean;
  fileCount: number;
}

export default function MergeButton({
  onClick,
  isLoading,
  disabled,
  fileCount,
}: MergeButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        relative w-full py-4 rounded-xl font-display font-semibold text-base
        transition-all duration-200 ease-out
        ${
          disabled
            ? "bg-ink-100 text-ink-300 cursor-not-allowed"
            : isLoading
            ? "bg-coral text-white cursor-wait"
            : "bg-coral text-white hover:bg-coral-dark active:scale-[0.98] shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30"
        }
      `}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-3">
          <span className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-white/80"
                style={{ animation: `pulseDot 1.4s ease-in-out ${i * 0.2}s infinite` }}
              />
            ))}
          </span>
          Merging PDFs…
        </span>
      ) : (
        <span className="flex items-center justify-center gap-2">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M3 9H15M9 3L15 9L9 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Merge {fileCount > 0 ? `${fileCount} PDFs` : "PDFs"}
        </span>
      )}
    </button>
  );
}
