import { setupEmotionTest } from '../../__tests__/setup-function';
import { Keyframe } from './Keyframe';
import { render } from '@testing-library/react';

beforeAll(() => setupEmotionTest());

describe('Keyframe', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Keyframe />);

    expect(asFragment()).toMatchSnapshot();
  });
});
