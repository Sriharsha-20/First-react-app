import MessageCard from "./MessageCard";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <MessageCard
        title="Introduction to React"
        message="This card demonstrates how props are passed to a reusable component."
      />

      <MessageCard
        title="Reusable Components"
        message="The same component can be reused with different data using props."
      />

      <MessageCard
        title="Component Communication"
        message="Props allow parent components to send data to child components."
      />

      <MessageCard
        title="Vite + React Setup"
        message="This project is built using Vite for faster React development."
      />
    </div>
  );
}

export default App;
