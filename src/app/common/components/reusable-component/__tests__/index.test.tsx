import { render } from '@testing-library/react';
import { ReusableComponent } from '../reusable-component';

describe('<ReusableComponent />', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<ReusableComponent />);
        expect(getByTestId('reusable-component')).toBeInTheDocument();
    });
});
