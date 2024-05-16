import React from 'react';
import { useRouteError } from 'react-router-dom';

import Layout from './Components/Layout';

const NotFound = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <Layout>
            <div className="py-[25%] text-center">
                <h1 className="my-auto text-4xl font-bold font-heading">
                    404 Not Found
                </h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>
        </Layout>
    );
};

export default NotFound;
