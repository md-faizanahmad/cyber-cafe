"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await res.json();

    setLoading(false);

    if (result.success) {
      alert("✅ Request sent");
      form.reset();
    } else {
      alert("❌ Failed");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="नाम"
        className="w-full border p-2 rounded"
      />

      <input
        name="phone"
        placeholder="मोबाइल नंबर"
        className="w-full border p-2 rounded"
      />

      <textarea
        name="message"
        placeholder="आपको क्या सेवा चाहिए?"
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 bg-black text-white rounded"
      >
        {loading ? "Sending..." : "भेजें"}
      </button>
    </form>
  );
}
