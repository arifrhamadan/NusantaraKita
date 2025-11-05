import React from 'react';
import type { TableProps } from './table';
import Table from './table';

interface TableWithTitle extends TableProps {
  titleText: string;
}

const TableWithTitle: React.FC<TableWithTitle> = ({
  columnHeaders,
  rowData,
  titleText = 'Query Parameters',
}) => {
  return (
    <section className="py-4">
      <h2 className="mb-4 text-2xl font-semibold text-gray-700">{titleText}</h2>
      <Table
        columnHeaders={columnHeaders}
        rowData={rowData}
      />
    </section>
  );
};

export default TableWithTitle;
