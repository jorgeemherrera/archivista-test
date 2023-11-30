import { render } from '@testing-library/react';
import CardList from '../../components/CardList';

describe('CardList Component', () => {
  it('renders CardList component with provided data', () => {
    const mockData = {
      records: [
        {
          id: '1',
          metadata: {
            image: 'example.jpg',
            title: 'Example Title',
          },
          createdAt: new Date(),
        },
      ],
    };

    const { container } = render(<CardList data={mockData} />);

    expect(container.querySelector('.title-card-list')).toBeTruthy();
    expect(container.querySelector('.record-id')).toBeTruthy();
  });
});
