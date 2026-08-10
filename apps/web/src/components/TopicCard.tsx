type TopicCardProps = {
  title: string;
  description: string;
};

function TopicCard({ title, description }: TopicCardProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

export default TopicCard;
