import { setup } from 'src/__tests__/setup';
import { Keyframe } from './Keyframe';
import { render } from '@testing-library/react';

beforeAll(() => setup());
describe('Keyframe', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Keyframe />);

    expect(asFragment()).toMatchSnapshot();
  });
});
