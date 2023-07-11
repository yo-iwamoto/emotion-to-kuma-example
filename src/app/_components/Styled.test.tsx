import { Styled } from './Styled';
import { render } from '@testing-library/react';

describe('Styled', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Styled />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('has color style', () => {
    const { getByText } = render(<Styled />);

    expect(getByText('Styled')).toHaveStyleRule('color', 'red');
  });
});
