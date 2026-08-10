import TopicCard from "./components/TopicCard";

function App() {
  const title = "My Fullstack Roadmap";
  const currentTopic = "React";

  const topics = [
    {
      title: "React",
      description: "Learning React fundamentals.",
    },
    {
      title: "TypeScript",
      description: "Learning type-safe JavaScript.",
    },
    {
      title: "CSS",
      description: "Learning how to style web applications.",
    },
  ];
  return (
    <main>
      <h1>{title}</h1>
      <p>I am currently learning {currentTopic}.</p>

      {topics.map((topic) => (
        <TopicCard
          key={topic.title}
          title={topic.title}
          description={topic.description}
        />
      ))}

      <TopicCard
        title="CSS"
        description="Learning how to style web applications."
      />
    </main>
  );
}

export default App;
