/* src/components/RequestItemModal.tsx */
"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import InquiryForm from "./InquiryForm";

export default function RequestItemModal() {
  const [open, setOpen] = useState(false);

  if (typeof window === "undefined") return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded bg-steam text-black px-6 py-2 font-semibold"
      >
        Don’t see your item? Ask here
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
            <div className="bg-steam rounded-2xl p-8 relative w-full max-w-lg">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 font-bold text-xl"
              >
                ✕
              </button>
              <h3 className="text-xl font-extrabold mb-4 text-center">
                Custom Product Request
              </h3>
              <InquiryForm close={() => setOpen(false)} />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
