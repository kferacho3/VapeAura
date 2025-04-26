/* src/components/InquiryForm.tsx */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type Fields = { name: string; email: string; message: string };

export default function InquiryForm({ close }: { close?: () => void }) {
  const { register, handleSubmit, reset } = useForm<Fields>();
  const [sent, setSent] = useState(false);

  async function onSubmit(data: Fields) {
    await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSent(true);
    reset();
    close?.();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 content-center text-black"
    >
      <input
        className="w-full p-3 rounded-lg"
        placeholder="Name"
        {...register("name", { required: true })}
      />
      <input
        className="w-full p-3 rounded-lg"
        placeholder="Email"
        type="email"
        {...register("email", { required: true })}
      />
      <textarea
        className="w-full p-3 rounded-lg h-32"
        placeholder="What can we source for you?"
        {...register("message", { required: true })}
      />
      <button
        type="submit"
        className="w-full bg-amber-400 text-black font-bold py-3 rounded-lg"
      >
        {sent ? "Sent — thank you!" : "Send Inquiry"}
      </button>
    </form>
  );
}
