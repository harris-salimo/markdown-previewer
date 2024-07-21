import { ChangeEventHandler } from "react";

export default function Editor({
  value,
  onChange,
}: {
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}) {
  return (
    <div className="editor prose h-full max-w-full dark:prose-invert">
      <h2>Editor</h2>
      <textarea
        className="h-5/6 w-full rounded-lg bg-gray-200 dark:bg-gray-800"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
