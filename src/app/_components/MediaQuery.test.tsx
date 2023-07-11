import { setupEmotionTest } from '../../__tests__/setup-function';
import { MediaQuery } from './MediaQuery';
import { render } from '@testing-library/react';

beforeAll(() => setupEmotionTest());

describe('MediaQuery', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<MediaQuery />);

    expect(asFragment()).toMatchSnapshot();
  });
});
