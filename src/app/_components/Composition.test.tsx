import { setupEmotionTest } from '../../__tests__/setup-function';
import { Composition } from './Composition';
import { render } from '@testing-library/react';

beforeAll(() => setupEmotionTest());

describe('Composition', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Composition />);

    expect(asFragment()).toMatchSnapshot();
  });
});
