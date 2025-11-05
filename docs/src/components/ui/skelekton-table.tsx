interface SkeletonTableProps {
  columnCount: number;
  rowCount: number;
}

const SkeletonTable: React.FC<SkeletonTableProps> = ({
  columnCount,
  rowCount,
}) => {
  const headerStyle = 'bg-[#4A4A4A] text-white text-left';
  const thStyle = 'py-3 px-4 font-semibold';
  const tdStyle = 'py-3 px-4 border-b border-gray-200';

  return (
    <div className="animate-pulse overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full bg-white">
        <thead className={headerStyle}>
          <tr>
            {Array.from({ length: columnCount }).map((_, index) => (
              <th
                key={index}
                className={thStyle}
              >
                <div className="h-4 w-3/4 rounded bg-gray-500"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rowCount }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columnCount }).map((_, colIndex) => (
                <td
                  key={colIndex}
                  className={tdStyle}
                >
                  <div className="h-4 w-full rounded bg-gray-200"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonTable;
