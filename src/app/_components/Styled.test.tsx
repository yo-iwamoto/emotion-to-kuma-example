import { setup } from 'src/__tests__/setup';
import { Styled } from './Styled';
import { render } from '@testing-library/react';

beforeAll(() => setup());
describe('Styled', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Styled />);

    expect(asFragment()).toMatchSnapshot();
  });
});
