'use client'
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'recordName', headerName: 'Record Name', width: 700, sortable: false },
  { field: 'status', headerName: 'Status', width: 200 },
  { field: 'date', headerName: 'Date', type: 'number', width: 200, sortable: false },
  /*   {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.recordName || ''} ${params.row.status || ''}`,
    }, */
];

const rows = [
  { id: 1, status: 'Minting', recordName: 'What it means to be a Polston', date: '03/08/2023' },
  { id: 2, status: 'Draft', recordName: 'What it means to be a Polston', date: '03/08/2023' },
  { id: 3, status: 'Draft', recordName: 'What it means to be a Polston', date: '03/08/2023' },
  { id: 4, status: 'Certified', recordName: 'What it means to be a Polston', date: '03/08/2023' },
  { id: 5, status: 'Certified', recordName: 'What it means to be a Polston', date: '03/08/2023' },
  { id: 6, status: 'Minting', recordName: 'What it means to be a Polston', date: '03/08/2023' },
  { id: 7, status: 'Certified', recordName: 'What it means to be a Polston', date: '03/08/2023' },
  { id: 8, status: 'Minting', recordName: 'What it means to be a Polston', date: '03/08/2023' },
  { id: 9, status: 'Draft', recordName: 'What it means to be a Polston', date: '04/08/2023' },
];

export default function DataTable() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
      />
    </div>
  );
}