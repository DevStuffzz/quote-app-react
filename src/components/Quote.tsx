import { useState } from "react";

interface Quote {
  text: string;
  author: string;
}

export default function Quote() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://quote-app-dkw-kw.fly.dev/quote");
      if (!response.ok) throw new Error("Failed to fetch");
      const data: Quote = await response.json();
      setQuote(data);
    } catch (err) {
      console.error(err);
      setQuote({ text: "Failed to load quote.", author: "" });
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
      {quote ? (
        <div className="text-center">
          <p className="text-xl font-semibold">&ldquo;{quote.text}&rdquo;</p>
          <p className="mt-2 text-gray-500">— {quote.author}</p>
        </div>
      ) : (
        <p className="text-gray-400">Click the button to get a quote</p>
      )}

      <button
        onClick={fetchQuote}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
        disabled={loading}
      >
        {loading ? "Loading..." : "New Quote"}
      </button>
    </div>
  );
}
