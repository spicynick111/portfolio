import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MorphingText = ({ words = [], className = "", stayDuration = 1200 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, stayDuration);
    return () => clearTimeout(timeout);
  }, [index, words, stayDuration]);

  // Support for words as string or { text, newline }
  const current = words[index];
  const isObj = typeof current === 'object' && current !== null;
  const text = isObj ? current.text : current;
  const newline = isObj ? current.newline : false;

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={text}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className={className}
        style={{ display: newline ? "block" : "inline-block", minWidth: "1ch" }}
      >
        {newline ? <><br />{text}</> : text}
      </motion.span>
    </AnimatePresence>
  );
};

export default MorphingText; 