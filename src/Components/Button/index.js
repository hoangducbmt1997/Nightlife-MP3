import classNames from 'classnames';
import myAlert from '~/myAlert';
import { Link } from 'react-router-dom';

const cx = classNames.bind('styles');

function Button({ to, href, primary, children, onClick }) {
    let Comp = 'button';
    const props = {
        onClick,
    };

    if (to) {
        // Tạo liên kết bên trong từ React Router Dom
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper');

    return (
        <Comp classNames={classes}>
            <span>{children}</span>
        </Comp>
    );
}
export default Button;
