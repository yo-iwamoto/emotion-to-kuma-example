import { setupKumaTest } from '../../__tests__/setup-function';
import { Normal } from './Normal';
import { render } from '@testing-library/react';

beforeAll(() => setupKumaTest());

describe('Normal', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Normal />);

    expect(asFragment()).toMatchSnapshot();
  });
});
