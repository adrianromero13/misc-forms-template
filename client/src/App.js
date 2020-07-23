import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import CreateProduct from './CreateProduct'

function App() {
    // state variables
    return (
        <BrowserRouter>
            <h1>Hello World</h1>
            <Route exact path='/productform' component={CreateProduct} />
        </BrowserRouter>
    )
}

export default App;
