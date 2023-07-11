import { setup } from 'src/__tests__/setup';
import { ObjectStyle } from './ObjectStyle';
import { render } from '@testing-library/react';

beforeAll(() => setup());
describe('ObjectStyle', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<ObjectStyle />);

    expect(asFragment()).toMatchSnapshot();
  });
});
