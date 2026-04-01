import MergeTool from "@/components/MergeTool";
import SeoContent from "@/components/SeoContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f8f6]">
      {/* Subtle top accent */}
      <div className="h-1 bg-gradient-to-r from-coral via-coral-light to-transparent" />

      <div className="max-w-2xl mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white border border-ink-100 rounded-full px-4 py-1.5 text-xs font-mono text-ink-400 shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Free · Private · No sign-up
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-ink-900 leading-tight tracking-tight">
            Merge PDF{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Online</span>
              <span
                className="absolute bottom-1 left-0 w-full h-3 bg-coral/20 -z-0 rounded"
                aria-hidden
              />
            </span>
          </h1>

          <p className="mt-4 text-ink-400 text-lg max-w-md mx-auto leading-relaxed">
            Combine multiple PDFs into one file - instantly, for free, without
            uploading anything.
          </p>
        </header>

        {/* Tool */}
        <MergeTool />

        {/* SEO Content */}
        <SeoContent />
      </div>
    </main>
  );
}
