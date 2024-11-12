import classNames from "classnames/bind";

import styles from './Dashboard.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faHome } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Dashboard() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('name-page')}>
                <FontAwesomeIcon className={cx('icon-home')} icon={faHome}/>
                <span>Dashboard</span>
            </div>

            <div className={cx('wrapper__card')}>
                
                <div className={cx('card__sales')}>
                    <div className={cx('card__title')}>
                        <h1>Sales</h1>
                        <FontAwesomeIcon className={cx('icon-chartbar')} icon={faChartBar}/>
                    </div>
                    <div className={cx('card__content')}>
                        <p>1.500.000.000 vnđ</p>
                    </div>
                </div>

                <div className={cx('card__orders')}>
                        
                </div>
                <div className={cx('card__select-time')}>
                     
                </div>
            </div>
        </div>
     ); 
}

export default Dashboard;