"use client";
import { useState, useEffect } from "react";

/**
 * useTypingEffect
 * Cycles through an array of strings with a typewriter animation.
 * @param {string[]} texts     - Array of strings to cycle through
 * @param {number}   typeSpeed - ms per character while typing (default 60)
 * @param {number}   deleteSpeed - ms per character while deleting (default 40)
 * @param {number}   pauseMs  - ms to pause on completed word (default 1800)
 */
export function useTypingEffect(texts, typeSpeed = 60, deleteSpeed = 40, pauseMs = 1800) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const current = texts[textIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, typeSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseMs);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((i) => (i + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typeSpeed, deleteSpeed, pauseMs]);

  return displayText;
}
