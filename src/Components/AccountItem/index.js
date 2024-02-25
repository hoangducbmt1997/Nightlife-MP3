import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=a5d48078&x-expires=1708704000&x-signature=wq5CGZnNJiOJPlv2qJyD6Mk3Qmo%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>nguyen van a</p>
                <span className={cx('username')}>nguyen van a</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}>
                    check
                </FontAwesomeIcon>
            </div>
        </div>
    );
}

export default AccountItem;
