type TopicCardProps = {
  title: string;
  description: string;
  status: string;
};

function TopicCard({ title, description, status }: TopicCardProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Status: {status}</p>
    </section>
  );
}

export default TopicCard;
