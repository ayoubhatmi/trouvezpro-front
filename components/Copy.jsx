"use client";
import { useState } from "react";
import { Copy as CopyIcon } from "lucide-react";

const Copy = ({ text, onCopy }) => {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      if (onCopy) onCopy();
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleCopy}
    >
      <p className="text-muted-foreground sm:cursor-pointer">{text}</p>
      {hovered && (
        <div
          className={`absolute sm:flex hidden items-center gap-1 right-0 top-0 p-1 bg-gray-800 text-white text-xs rounded ${
            copied ? "bg-green-600" : ""
          }`}
          style={{ transform: "translateX(100%)" }}
        >
          <CopyIcon size={18} />
          {copied ? "Copied!" : "Copy"}
        </div>
      )}
    </div>
  );
};

export default Copy;
