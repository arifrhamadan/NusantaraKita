import type React from 'react';

export interface NotesProps {
  items: (string | React.JSX.Element)[];
}

export const Notes: React.FC<NotesProps> = ({ items }) => {
  return (
    <div className="mb-10">
      <h3 className="mb-4 text-lg font-semibold text-gray-700">Notes</h3>
      <ul className="list-outside list-disc space-y-2 pl-4 text-gray-700">
        {items.map((item, index) => (
          <li key={`note-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
