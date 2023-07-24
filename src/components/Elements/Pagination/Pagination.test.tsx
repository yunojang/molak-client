import { render, screen } from '@/lib/test-lib';
import { Pagination } from './Pagination';

describe('Pagination Component test suite', () => {
  test('render inital text', async () => {
    // render
    render(<Pagination />);

    // query
    const head = screen.getByRole('heading');

    // assertion
    expect(head).toHaveTextContent('Pagination');
  });
});
