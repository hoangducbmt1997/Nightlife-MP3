import Home from '~/Pages/Home';
import News from '~/Pages/News';
import About from '~/Pages/About';
import Following from '~/Pages/Following';
import { HeaderOnly } from '~/Components/Layout';
import { DefaultLayout } from '~/Components/Layout';

const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/about', component: About, layout: DefaultLayout },
    { path: '/news', component: News, layout: DefaultLayout },
    { path: '/following', component: Following, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
