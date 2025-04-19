"use client"

export default function StickyHelpButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-stretch text-silver-light">
      <span className="rounded-t-lg bg-chrome/80 px-4 py-2 text-xs font-medium backdrop-blur-sm">
        Missing your product?
      </span>
      <a
        href="mailto:info@vapeaura.com?subject=Product%20Request"
        className="rounded-b-lg bg-deepsea-light px-4 py-2 text-sm font-bold hover:bg-deepsea transition backdrop-blur-sm"
      >
        Reach Out to Us
      </a>
    </div>
  )
}
