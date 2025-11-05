interface OverviewDescriptionProps {
  title: string;
  description: string;
}

const OverviewDescription: React.FC<OverviewDescriptionProps> = ({
  description,
  title,
}) => {
  return (
    <div className="mb-5">
      <h2 className="mb-3 text-xl font-semibold text-gray-600">{title}</h2>
      <p className="leading-relaxed text-gray-600">{description}</p>
    </div>
  );
};

export default OverviewDescription;
