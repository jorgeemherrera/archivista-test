'use client'
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import './recordList.scss'
import { formatDate } from '../../utils/dateUtils';
import mintingImage from '@/../public/Minting.png';
import draftImage from '@/../public/Draft.png';
import certifiedImage from '@/../public/Artboard.png';
import Image from 'next/image';
import Link from 'next/link';

const columns: GridColDef[] = [
  {
    align: 'center',
    disableColumnMenu: false,
    field: 'image',
    headerAlign: 'right',
    headerName: 'Record Title',
    sortable: false,
    
    width: 150,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.metadata.image || ''}`, renderCell: (params) => <img width={52} height={43} src={params.value} alt={params.value} />,
  },
  {
    field: 'title',
    headerName: '',
    width: 750,
    sortable: false,
    renderCell: (params) => (
      <Link href={`${params.row.id}`}>{params.row.metadata.title}</Link>
    )
  },
  {
    field: 'status', headerName: 'Status', width: 250,
    renderCell: (params) => {
      let imageStatus = <Image width={32} height={36} src={certifiedImage} alt={'Certified image'} />;
      if (params.row.status === 'minting') {
        imageStatus = <Image width={35} height={31} src={mintingImage} alt={'Minting image'} />
      }
      if (params.row.status === 'draft') {
        imageStatus = <Image width={35} height={31} src={draftImage} alt={'Draft image'} />
      }
      return (
        <Container className='container-status-cell'>
          {imageStatus}
          <span>{params.row.status}</span>
        </Container>
      )
    }

  },
  {
    field: 'createdAt', headerName: 'Date', width: 250,
    valueGetter: (params: GridValueGetterParams) =>
      `${formatDate(params.row.createdAt) || ''}`,
  },
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