import { render, screen } from '@/lib/test-lib';
import { Hovering } from './Hovering';

describe('Hovering Component test suite', () => {
  test('render inital text', async () => {
    // render
    render(<Hovering />);

    // query
    const head = screen.getByRole('heading');

    // assertion
    expect(head).toHaveTextContent('Hovering');
  });
});
