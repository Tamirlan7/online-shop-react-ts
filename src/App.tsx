import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './router/routes';
import { RouteObject } from './types/types';
import Navbar from './components/Navbar';

const App: React.FC = () => {

    return (
        <div className='app'>
            <Navbar />
            <Routes>
                {routes.map((route: RouteObject) => <Route path={route.path} element={route.element} key={null}/>)}
            </Routes>
        </div>
    );
};

export default App;