import { setup } from 'src/__tests__/setup';
import { Normal } from './Normal';
import { render } from '@testing-library/react';

beforeAll(() => setup());
describe('Normal', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Normal />);

    expect(asFragment()).toMatchSnapshot();
  });
});
