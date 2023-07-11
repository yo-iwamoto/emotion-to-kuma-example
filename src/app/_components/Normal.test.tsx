import { Normal } from './Normal';
import { render } from '@testing-library/react';

describe('Normal', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Normal />);

    expect(asFragment()).toMatchSnapshot();
  });
});
