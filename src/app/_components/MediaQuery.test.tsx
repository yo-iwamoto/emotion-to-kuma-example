import { MediaQuery } from './MediaQuery';
import { render } from '@testing-library/react';

describe('MediaQuery', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<MediaQuery />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('has color style', () => {
    const { getByText } = render(<MediaQuery />);

    expect(getByText('MediaQuery')).toHaveStyleRule('color', 'orange');
  });
});
