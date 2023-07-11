import { Composition } from './Composition';
import { render } from '@testing-library/react';

describe('Composition', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Composition />);

    expect(asFragment()).toMatchSnapshot();
  });
});
