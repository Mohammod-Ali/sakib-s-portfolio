// components/LoopTypewriter.jsx
import React, { useEffect, useState } from "react";

export default function LoopTypewriter({
  words = [],
  typeSpeed = 80,
  deleteSpeed = 40,
  delayBetweenWords = 1200,
  cursor = true,
  cursorChar = "|",
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (isDeleting) {
      // deleting
      timeout = setTimeout(() => {
        setText((prev) => currentWord.substring(0, prev.length - 1));
      }, deleteSpeed);
    } else {
      // typing
      timeout = setTimeout(() => {
        setText((prev) => currentWord.substring(0, prev.length + 1));
      }, typeSpeed);
    }

    // when typing finished
    if (!isDeleting && text === currentWord) {
      // pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
    }

    // when deleting finished -> move to next word
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
    // dependencies intentionally include text/isDeleting/wordIndex/words
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delayBetweenWords]);

  return (
    <span style={{ fontWeight: "700", fontSize: "32px" }}>
      {text}
      {cursor && (
        <span
          style={{
            display: "inline-block",
            marginLeft: 6,
            animation: "blink 1s step-end infinite",
          }}
        >
          {cursorChar}
        </span>
      )}

      {/* Inline CSS for cursor blink */}
      <style>{`
        @keyframes blink { 
          50% { opacity: 0 } 
        }
      `}</style>
    </span>
  );
}
