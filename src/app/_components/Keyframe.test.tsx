import { Keyframe } from './Keyframe';
import { render } from '@testing-library/react';

describe('Keyframe', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Keyframe />);

    expect(asFragment()).toMatchSnapshot();
  });
});
