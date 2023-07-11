import { setup } from 'src/__tests__/setup';
import { Composition } from './Composition';
import { render } from '@testing-library/react';

beforeAll(() => setup());
describe('Composition', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Composition />);

    expect(asFragment()).toMatchSnapshot();
  });
});
