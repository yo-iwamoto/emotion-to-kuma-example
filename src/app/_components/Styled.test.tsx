import { Styled } from './Styled';
import { render } from '@testing-library/react';

describe('Styled', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Styled />);

    expect(asFragment()).toMatchSnapshot();
  });
});
