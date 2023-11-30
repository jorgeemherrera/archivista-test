import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../../components/searchBar/searchBar';
import searchIcon from '@/../public/search.png'
import gridIcon from '@/../public/grid.svg'
import columnIcon from '@/../public/list.png'
describe('SearchBar Component', () => {
  const mockProps = {
    title: 'Test Title',
    icon: searchIcon,
    alt: 'Icon Alt Text',
    width: 20,
    height: 20,
    placeholder: 'Search...',
    iconGrid: gridIcon,
    iconColumn: columnIcon,
    onChangeView: jest.fn(),
    onSearch: jest.fn(),
  };

  it('renders SearchBar component with correct elements', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<SearchBar {...mockProps} />);

    expect(getByText('Test Title')).toBeInTheDocument();

    const searchInput = getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();
    
    expect(getByTestId('icon')).toHaveAttribute('alt', 'Icon Alt Text');
    expect(getByTestId('icon')).toHaveAttribute('width', '20');
    expect(getByTestId('icon')).toHaveAttribute('height', '20');

    expect(getByTestId('list-icon')).toHaveAttribute('alt', 'Icon Alt Text');
    expect(getByTestId('list-icon')).toHaveAttribute('width', '20');
    expect(getByTestId('list-icon')).toHaveAttribute('height', '20');

    expect(getByTestId('grid-icon')).toHaveAttribute('alt', 'Icon Alt Text');
    expect(getByTestId('grid-icon')).toHaveAttribute('width', '20');
    expect(getByTestId('grid-icon')).toHaveAttribute('height', '20');
  });

  it('calls onSearch when input changes', () => {
    const { getByPlaceholderText } = render(<SearchBar {...mockProps} />);
    const searchInput = getByPlaceholderText('Search...');

    fireEvent.change(searchInput, { target: { value: 'test search' } });

    expect(mockProps.onSearch).toHaveBeenCalledWith('test search');
  });

  it('calls onChangeView with "list" when list icon is clicked', () => {
    const { getByTestId } = render(<SearchBar {...mockProps} />);
    const listIcon = getByTestId('list-icon');

    fireEvent.click(listIcon);

    expect(mockProps.onChangeView).toHaveBeenCalledWith('list');
  });

  it('calls onChangeView with "cards" when grid icon is clicked', () => {
    const { getByTestId } = render(<SearchBar {...mockProps} />);
    const gridIcon = getByTestId('grid-icon');

    fireEvent.click(gridIcon);

    expect(mockProps.onChangeView).toHaveBeenCalledWith('cards');
  });
});
