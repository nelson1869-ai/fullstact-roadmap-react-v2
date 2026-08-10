import TopicCard from "./components/TopicCard";

function App() {
  const title = "My Fullstack Roadmap";
  const currentTopic = "React";

  const topics = [
    {
      title: "React",
      description: "Learning React fundamentals.",
      status: "In Progress",
    },
    {
      title: "TypeScript",
      description: "Learning type-safe JavaScript.",
      status: "Next",
    },
    {
      title: "CSS",
      description: "Learning how to style web applications.",
      status: "Next",
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
          status={topic.status}
        />
      ))}

      <TopicCard
        title="CSS"
        description="Learning how to style web applications."
        status="Next"
      />
    </main>
  );
}

export default App;
