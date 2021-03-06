import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage'
import ProductListPage from '../pages/ProductListPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';

const Page = () => {
    return ( 
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/products" component={ProductListPage} />
                <Route path="/product/:id" component={ProductsPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/login" component={LoginPage} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}
 
export default Page;
