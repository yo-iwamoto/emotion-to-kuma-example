import { ObjectStyle } from './ObjectStyle';
import { render } from '@testing-library/react';

describe('ObjectStyle', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<ObjectStyle />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('has color style', () => {
    const { getByText } = render(<ObjectStyle />);

    expect(getByText('ObjectStyle')).toHaveStyleRule('color', 'blue');
  });
});
