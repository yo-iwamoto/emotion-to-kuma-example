import { setup } from 'src/__tests__/setup';
import { MediaQuery } from './MediaQuery';
import { render } from '@testing-library/react';

beforeAll(() => setup());
describe('MediaQuery', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<MediaQuery />);

    expect(asFragment()).toMatchSnapshot();
  });
});
