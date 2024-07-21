export default function Previewer({
  value,
}: {
  value?: {
    __html: string;
  };
}) {
  return (
    <div className="preview prose h-full max-w-full dark:prose-invert">
      <h2>Preview</h2>
      <div
        className="mt-3 h-5/6 w-full overflow-y-auto rounded-lg border border-gray-500 bg-gray-200 p-2 dark:bg-gray-800"
        dangerouslySetInnerHTML={value}
      />
    </div>
  );
}
