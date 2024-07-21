import DOMPurify from "dompurify";
import { marked } from "marked";
import React, { ChangeEventHandler, useState } from "react";

const Editor = React.lazy(() => import("./Editor"));
const Previewer = React.lazy(() => import("./Previewer"));

export default function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState("# Hello, Markdown!");

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMarkdown(e.target.value);
  };

  const getMarkdownText = () => {
    const rawMarkup = DOMPurify.sanitize(
      marked.parse(
        markdown.replace(/^[\\u200B\\u200C\\u200D\\u200E\\u200F\\uFEFF]/, ""),
      ) as string,
    );
    return { __html: rawMarkup };
  };

  return (
    <div className="markdown-previewer grid h-full w-full grid-cols-1 grid-rows-2 gap-5 bg-gray-100 p-5 dark:bg-gray-900">
      <Editor value={markdown} onChange={handleChange} />
      <Previewer value={getMarkdownText()} />
    </div>
  );
}
