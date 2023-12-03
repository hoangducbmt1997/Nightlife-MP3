import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <aside>
                <h2>Sidebar</h2>
            </aside>
        </div>
    );
}

export default Sidebar;
