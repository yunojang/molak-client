import { render, screen } from '@/lib/test-lib';
import { Title } from './Title';

describe('Title Component test suite', () => {
  test('render inital text', async () => {
    // render
    render(<Title />);

    // query
    const head = screen.getByRole('heading');

    // assertion
    expect(head).toHaveTextContent('Title');
  });
});
