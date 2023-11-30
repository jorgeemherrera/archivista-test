import { render } from '@testing-library/react';
import DataTable from '../../components/RecordList';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

jest.mock('@mui/x-data-grid', () => ({
  ...jest.requireActual('@mui/x-data-grid'),
  DataGrid: jest.fn(),
}));

const mockData = {
    records: [
      { id: '1', metadata: { image: 'image1.jpg', title: 'Title 1' }, status: 'certified', createdAt: new Date() },
    ],
  };
  
  describe('DataTable Component', () => {
    it('renders DataTable component with DataGrid', () => {
      const { container } = render(<DataTable data={mockData} />);

      console.log('container', container)
  
      expect(container).toBeInTheDocument();
    });
  });