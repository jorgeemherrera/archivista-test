'use client'
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import data from '@/app/api/data.json';
import { Container } from '@mui/material';
import './recordList.scss'



const columns: GridColDef[] = [
  {
    field: 'image', headerName: 'Record Title', width: 150, 
    align: 'center',
    headerAlign: 'right',
    sortable:false,
    disableColumnMenu:false,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.metadata.image || ''}`, renderCell: (params) => <img width={52} height={43} src={params.value} />, 
      
  },
  {
    field: 'title', headerName: '', width: 750, sortable: false,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.metadata.title || ''}`,
  },
  { field: 'status', headerName: 'Status', width: 250 },
  { field: 'createdAt', headerName: 'Date', width: 250, sortable: false },
];

export default function DataTable({ data }: any) {
  const recordsData = data.records;

  return (
    <Container style={{ height: '100%', width: '100%' }} className='container-table'>
      <DataGrid
        className='data-grid'
        rows={recordsData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
      />
    </Container>
  );
}