import React from "react";

const MarkdownPreviewer = React.lazy(
  () => import("./components/MarkdownPreviewer"),
);

function App() {
  return (
    <>
      <header className="fixed left-0 top-0 w-full border-b border-gray-500 p-5">
        <h1 className="mb-0 text-center">Markdown Previewer</h1>
      </header>
      <main className="h-5/6 pt-20">
        <MarkdownPreviewer />
      </main>
      <footer className="fixed bottom-0 left-0 w-full">
        <p className="text-center">By Harris Salimo</p>
      </footer>
    </>
  );
}

export default App;
