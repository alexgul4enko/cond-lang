import { NavLink } from 'cond-app-core/router';
import styles from './layout.module.scss';

export function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <NavLink to='gnu' className={styles.link} activeClassName={styles.active}>
                    Gettext
                </NavLink>
                <NavLink to='intl' className={styles.link} activeClassName={styles.active}>
                    Intl
                </NavLink>
            </header>
            <main className={styles.main}>{children}</main>
        </>
    );
}
