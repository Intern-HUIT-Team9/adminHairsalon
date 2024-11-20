// DashboardStylist.jsx
import React from 'react';
import classNames from "classnames/bind";
import styles from './DashboardStylist.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import CalendarComponent from '~/components/Layout/LayoutStylist/CalendarComponent';  // Import Calendar component

const cx = classNames.bind(styles);

function DashboardStylist() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('name-page')}>
                <FontAwesomeIcon className={cx('icon-home')} icon={faHome}/>
                <span>Dashboard</span>
            </div>
            {/* Nội dung dashboard ở đây */}
            <div>
                <h2>Nội dung Dashboard</h2>
                {/* Render Calendar component vào trong Dashboard */}
                <CalendarComponent />
            </div>
        </div>
    );
}

export default DashboardStylist;
