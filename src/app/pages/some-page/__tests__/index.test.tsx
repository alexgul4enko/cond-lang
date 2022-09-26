import { render } from '@testing-library/react';
import { SomePage } from '../some-page';

describe('<SomePage />', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<SomePage />);
        expect(getByTestId('some-page')).toBeInTheDocument();
    });
});
