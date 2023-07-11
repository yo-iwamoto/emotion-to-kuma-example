import { Keyframe } from './Keyframe';
import { render } from '@testing-library/react';

describe('Keyframe', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Keyframe />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('has color style', () => {
    const { getByText } = render(<Keyframe />);

    expect(getByText('Keyframe')).toHaveStyleRule('color', 'purple');
  });
});
