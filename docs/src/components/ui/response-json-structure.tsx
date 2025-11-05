import React from 'react';

export interface ResponseJsonListItem {
  name: string;
  details?: string;
  children?: ResponseJsonListItem[];
}

interface ResponseJsonStructureProps {
  items: ResponseJsonListItem[];
}

interface RecursiveListItemProps {
  item: ResponseJsonListItem;
}

const highlightClass =
  'bg-[#4A4A4A] text-white px-1.5 py-0.5 rounded-sm inline-block font-mono text-sm';

const RecursiveListItem: React.FC<RecursiveListItemProps> = ({ item }) => {
  return (
    <li className="mb-1">
      <span className={highlightClass}>{item.name}</span>
      {item.details && (
        <span className="ml-2 text-sm text-gray-700">{item.details}</span>
      )}
      {item.children && item.children.length > 0 && (
        <ul className="mt-1 list-inside list-disc pl-5">
          {item.children.map((child, index) => (
            <RecursiveListItem
              key={`${item.name}-child-${index}`}
              item={child}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const ResponseJsonStructure: React.FC<ResponseJsonStructureProps> = ({
  items,
}) => {
  if (!items || items.length === 0) return null;

  return (
    <ul className="list-inside list-disc">
      {items.map((item, index) => (
        <RecursiveListItem
          key={`root-${index}`}
          item={item}
        />
      ))}
    </ul>
  );
};

export default ResponseJsonStructure;
