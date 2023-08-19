import { render, screen } from '@/lib/test-lib';
import { PageIntroTitle } from './PageIntroTitle';

describe('Title Component test suite', () => {
  test('render inital text', async () => {
    // render
    render(<PageIntroTitle />);

    // query
    const head = screen.getByRole('heading');

    // assertion
    expect(head).toHaveTextContent('Title');
  });
});
