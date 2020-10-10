import React from 'react';
import Product from '../components/Product';
import {Link} from 'react-router-dom';

const ProductsPage = ({match}) => {
    return ( 
        <>
            <div>strona produktów</div>
            <Product id={match.params.id}/>
            <Link to="/products">Powrót do listy produktu</Link>
        </>
     );
}
 
export default ProductsPage;