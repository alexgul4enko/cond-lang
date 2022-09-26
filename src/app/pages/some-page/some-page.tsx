import { FC } from 'react';
import { ReusableComponent } from 'common/components';
import styles from './some-page.module.scss';

export const SomePage: FC = () => (
    <ReusableComponent>
        <p className={styles.mainApp} data-testid='some-page'>
            Some Page
        </p>
    </ReusableComponent>
);
