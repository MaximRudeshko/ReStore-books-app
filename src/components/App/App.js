import React from 'react';
import { Route } from 'react-router-dom';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import Header from '../Header/Header';
import {Home, Cart} from '../pages'

const App = () => {
    return (
        <ErrorBoundry>       
            <div className = 'container'>
                <Header/>
                <Route path = '/' component = {Home} exact/>
                <Route path = '/cart' component = {Cart}/>
            </div>
        </ErrorBoundry>
    );
}

export default App;
