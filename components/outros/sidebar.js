import React from 'react';
import Styles from '../../styles/sidebar.module.css';

export default function Sidebar() {
    return (
        <nav className={Styles.side}>
            <div className={Styles.side__inner}>
                <div className={Styles.top}>
                    <span>@adsfmp</span>
                </div>

                <div className={Styles.bottom}>
                    <a href='LEANDRO PICKLER' target='_blank' rel='noreferrer'>Github</a>
                    {/* <a href='LEANDRO PICKLER' target='_blank' rel='noreferrer'>Linkedin</a> */}
                    <a href='LEANDRO PICKLER' target='_blank' rel='noreferrer'>Face FMP</a>
                </div>
            </div>
        </nav>
    )
}
