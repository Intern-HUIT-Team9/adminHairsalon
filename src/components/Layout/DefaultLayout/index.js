
import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';

const cx = classNames.bind(style);



function DefaultLayout({ children }) {
   

    return (
        <div className={cx('wrapper')}>
           {children}
        </div>
    );
}

export default DefaultLayout;