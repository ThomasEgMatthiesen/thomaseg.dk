import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {

    return (
        <>
            <div className="sm:px-10 md:px-12 lg:px-16 xl:px-20">
                <Outlet />
            </div>

            {/* Restore scroll position on landing page */}
            <ScrollRestoration
                getKey={(location, matches) => {
                const paths = ["/"];
                return paths.includes(location.pathname) ? location.pathname : location.key;
                }}
            />
        </>

    );
};

export default Layout;