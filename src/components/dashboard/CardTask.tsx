interface CardTaskProps {
  title: string;
  description: string;
  tags: string[];
}

export function CardTask({ title, description, tags }: CardTaskProps) {
  return (
    <div className="w-[320px] bg-white p-6 rounded-lg space-y-[10px] shadow-md">
      <h4 className="text-[#403937] text-sm font-bold">{title}</h4>
      <p className="text-[#756966] text-sm font-medium">
        {description.slice(0, 68).concat("...")}
      </p>

      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#E2D6FF] rounded-lg text-[#7C3AED] py-1 px-2 text-[12px]"
          >
            rocketseat
          </span>
        ))}
      </div>
    </div>
  );
}
