import { render, screen } from '@/lib/test-lib';
import { FileInput } from './FileInput';

describe('FileInput Component test suite', () => {
  test('render inital text', async () => {
    // render
    render(<FileInput />);

    // query
    const head = screen.getByRole('heading');

    // assertion
    expect(head).toHaveTextContent('FileInput');
  });
});
