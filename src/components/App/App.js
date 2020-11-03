import React from 'react';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import Header from '../Header/Header';

const App = () => {
    return (
        <ErrorBoundry>
            <div className = 'app'>
               <Header/>
            </div>
        </ErrorBoundry>
    );
}

export default App;
