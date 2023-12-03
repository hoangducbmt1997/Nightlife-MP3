import { Routes, Route, Link } from 'react-router-dom';
import { publicRoutes } from '~/Routes';
import { DefaultLayout } from '~/Components/Layout';
import { Fragment } from 'react';
export default function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = route.layout;
                    if (route.layout == null) {
                        Layout = Fragment;
                    } else {
                        Layout = route.layout;
                    }
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}
