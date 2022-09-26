import { FC } from 'react';
import styles from './reusable-component.module.scss';

export const ReusableComponent: FC = ({ children }) => (
    <div className={styles.component} data-testid='reusable-component'>
        {children}
    </div>
);
