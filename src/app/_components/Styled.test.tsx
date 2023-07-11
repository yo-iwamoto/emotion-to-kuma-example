import { setupEmotionTest } from '../../__tests__/setup-function';
import { Styled } from './Styled';
import { render } from '@testing-library/react';

beforeAll(() => setupEmotionTest());

describe('Styled', () => {
  it('renders unchanged', () => {
    const { asFragment } = render(<Styled />);

    expect(asFragment()).toMatchSnapshot();
  });
});
