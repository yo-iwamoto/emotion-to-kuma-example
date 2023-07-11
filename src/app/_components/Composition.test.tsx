import { Composition } from './Composition';
import { render } from '@testing-library/react';

describe('Composition', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Composition />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('has color style', () => {
    const { getByText } = render(<Composition />);

    expect(getByText('Composition')).toHaveStyleRule('color', 'skyblue');
  });
});
