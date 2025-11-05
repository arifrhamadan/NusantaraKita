import type { IconType } from 'react-icons/lib';

export type CardItemData = {
  icon: IconType;
  title?: string;
  value: string;
};

export interface CardItemProps {
  items: CardItemData[];
}

export const CardItem: React.FC<CardItemProps> = ({ items }) => {
  return (
    <div className="relative flex flex-col gap-2 overflow-hidden rounded-xl border border-gray-300 bg-white p-4 pl-6 shadow-sm">
      <div className="bg-primary absolute top-0 left-0 h-full w-1.5" />
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-[#4A4A4A]"
        >
          <item.icon />
          <span className="font-medium">
            {item.title ? `${item.title}: ` : ''} {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};
