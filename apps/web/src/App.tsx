import TopicCard from "./components/TopicCard";

function App() {
  const title = "My Fullstack Roadmap";
  const currentTopic = "React";

  return (
    <main>
      <h1>{title}</h1>
      <p>I am currently learning {currentTopic}.</p>

      <TopicCard title="React" description="Learning React fundamentals." />

      <TopicCard
        title="TypeScript"
        description="Learning type-safe JavaScript."
      />

      <TopicCard
        title="CSS"
        description="Learning how to style web applications."
      />
    </main>
  );
}

export default App;
