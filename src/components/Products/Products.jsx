import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import makeStyles from './styles';

// const products = [
//     { id: 1, name: 'Sekiro', description: 'game1', price:'$10', image: 'https://assets.vg247.com/current//2018/08/Sekiro-Shadows-Die-Twice-Collectors-Edition-600x338.jpg'},
//     { id: 2, name: 'Elden Ring', description: 'game2', price:'$20', image: 'https://www.cnet.com/a/img/MZDXOBFhomkoeJpeGEAlDG1icVI=/940x0/2022/02/23/f12a8db7-d99b-4b8d-9b09-d84f12661cf7/elden-ring-plakat.jpg'}
// ];

const Products = ({products, onAddToCart }) => {
    const classes = makeStyles();
    // console.log (products)
    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid  container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid  item key={product.id} xs={12} sm={6} md={4} lg={3} >
                        <Product  className={classes.cursor} product={product} onAddToCart={onAddToCart} />                       
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;