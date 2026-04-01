export default function SeoContent() {
  const steps = [
    {
      num: "01",
      title: "Upload your PDFs",
      desc: "Drag and drop multiple PDF files into the upload area, or click to browse your files. You can add as many PDFs as you need.",
    },
    {
      num: "02",
      title: "Arrange the order",
      desc: "Drag the files into your desired order using the handles on the left. The merged PDF will follow this sequence exactly.",
    },
    {
      num: "03",
      title: "Merge & Download",
      desc: "Click the Merge PDFs button. Your browser combines the files instantly - no server upload needed - and downloads the result.",
    },
  ];

  const features = [
    {
      icon: "🔒",
      title: "100% Private",
      desc: "Your files never leave your device. All merging happens locally in your browser using the pdf-lib library.",
    },
    {
      icon: "⚡",
      title: "Instant Results",
      desc: "No waiting for uploads or server processing. Merge happens in seconds, regardless of your internet connection.",
    },
    {
      icon: "🆓",
      title: "Completely Free",
      desc: "No sign-up, no subscription, no watermarks. Just a simple, powerful tool you can use as many times as you like.",
    },
    {
      icon: "📱",
      title: "Works Everywhere",
      desc: "Compatible with all modern browsers on desktop and mobile. No plugins or software installation required.",
    },
  ];

  const faqs = [
    {
      q: "Is there a limit on the number of PDFs I can merge?",
      a: "There's no hard limit on the number of files. However, very large batches may slow down your browser. We recommend merging up to 20 files at a time for best performance.",
    },
    {
      q: "What is the maximum file size?",
      a: "Each individual PDF file can be up to 20 MB. If you need to merge larger files, consider compressing them first.",
    },
    {
      q: "Are my files safe? Does anything get uploaded?",
      a: "Completely safe. The entire merge process happens inside your browser using JavaScript. No file data is ever transmitted to any server.",
    },
    {
      q: "Will the quality of my PDFs be affected?",
      a: "No. The merge process copies pages directly without re-encoding or compressing any content, so the original quality is preserved perfectly.",
    },
    {
      q: "Can I merge PDFs on my phone?",
      a: "Yes! The tool is fully responsive and works on iOS and Android browsers without any app installation.",
    },
    {
      q: "What if the merged PDF is too large?",
      a: "The merged file size is the sum of the individual files (minus some overhead). To reduce size, compress each PDF individually before merging.",
    },
  ];

  return (
    <div className="mt-20 space-y-20">
      {/* How to section */}
      <section>
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-medium tracking-widest text-coral uppercase">
            Guide
          </span>
          <h2 className="mt-2 font-display font-bold text-3xl text-ink-900">
            How to merge PDF files
          </h2>
          <p className="mt-3 text-ink-400 max-w-md mx-auto">
            Three simple steps — no account required, no software to install.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-white rounded-2xl p-6 border border-ink-100 shadow-sm"
            >
              <span className="font-display font-black text-5xl text-ink-100 leading-none">
                {step.num}
              </span>
              <h3 className="mt-2 font-display font-semibold text-lg text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why use section */}
      <section>
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-medium tracking-widest text-coral uppercase">
            Benefits
          </span>
          <h2 className="mt-2 font-display font-bold text-3xl text-ink-900">
            Why use our merge PDF tool
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 bg-white rounded-2xl p-6 border border-ink-100 shadow-sm"
            >
              <span className="text-2xl flex-shrink-0">{f.icon}</span>
              <div>
                <h3 className="font-display font-semibold text-ink-900">{f.title}</h3>
                <p className="mt-1 text-sm text-ink-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ section */}
      <section>
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-medium tracking-widest text-coral uppercase">
            FAQ
          </span>
          <h2 className="mt-2 font-display font-bold text-3xl text-ink-900">
            Frequently asked questions
          </h2>
        </div>
        <div className="space-y-4 max-w-2xl mx-auto">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-white border border-ink-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-display font-semibold text-ink-800 hover:text-coral transition-colors">
                {faq.q}
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ink-100 flex items-center justify-center transition-transform group-open:rotate-45">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="px-6 pb-5 text-sm text-ink-500 leading-relaxed border-t border-ink-100 pt-4">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center pb-10 text-xs text-ink-300 font-mono">
        Merge PDF Online - free, private, no account needed.
      </footer>
    </div>
  );
}
