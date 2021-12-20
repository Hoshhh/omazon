import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'

const products = [
    {id: 0, name: 'Shoes', description: 'Running Shoes.', price: '$80', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png'},
    {id: 1, name: 'Macbook', description: 'Apple macbook', price: '$1200', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000' },
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {
                    products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} />
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}

export default Products
