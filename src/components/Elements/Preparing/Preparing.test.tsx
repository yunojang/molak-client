import { render, screen } from '@/lib/test-lib';
import { Preparing } from './Preparing';

describe('Preparing Component test suite', () => {
  test('render inital text', async () => {
    // render
    render(<Preparing />);

    // query
    const head = screen.getByRole('heading');

    // assertion
    expect(head).toHaveTextContent('Preparing');
  });
});
