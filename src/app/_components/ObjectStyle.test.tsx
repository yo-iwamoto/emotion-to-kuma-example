import { setupEmotionTest } from '../../__tests__/setup-function';
import { ObjectStyle } from './ObjectStyle';
import { render } from '@testing-library/react';

beforeAll(() => setupEmotionTest());

describe('ObjectStyle', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<ObjectStyle />);

    expect(asFragment()).toMatchSnapshot();
  });
});
