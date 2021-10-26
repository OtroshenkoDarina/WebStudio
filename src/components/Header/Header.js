import React from 'react';
import styles from './Header.module.scss'
import * as icons from '../icons/index'

const Header = () => {
    return (
        <div className={styles.container}>
            <a href='#' className={styles.logo}><span className={styles.logoPart}>Web</span>Studio</a>
            <div className={styles.nav}>
                <div className={styles.navLinks}>
                    <a href='#' className={styles.navLink}>Студия</a>
                    <a href='#' className={styles.navLink}>Портфолио</a>
                    <a href='#' className={styles.navLink}>Контакты</a>
                </div>
                <div className={styles.navContacts}>
                    <div className={styles.navIcons}>
                        {icons.email()}
                        <a href='mailto:info@devstudio.com' className={styles.navContact}>info@devstudio.com</a>
                    </div>
                    <div className={styles.navIcons}>
                        {icons.tel()}
                        <a href='tel:+38 096 111 11 11' className={styles.navContact}>+38 096 111 11 11</a>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Header;