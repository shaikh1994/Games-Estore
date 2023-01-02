import React, { useState, useEffect } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';


import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';


import useStyles from './styles'


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <Button {...other} />;
  })(({ theme, expand }) => ({
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const Product = ({ product, onAddToCart }) => {

    const [expanded, setExpanded] = useState(false);
  
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const classes = useStyles();

    // console.log(product.variant_groups[0].options)
    // console.log (product)
    const a=product.variant_groups[0].options

  return (
    <Card className= {classes.root}>
        <div className={classes.cardContent}>
            <ExpandMore 
                expand={expanded} 
                onClick={handleExpandClick} 
                aria-expanded={expanded} 
            >  
                <h3>{product.name}</h3>           
            </ExpandMore>
        </div>

        <CardMedia className={classes.media} image={product.image.url} title={product.name} />
        <div className={classes.buttons}> 
                {a.map((e, id) => (                   
                        <button key={id} className={classes.button}>{e.name}</button>                 
                ))}
            </div>  

        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>            
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} 
                    variant="body2" 
                    />
            </CardContent>
        </Collapse>

        <CardActions className={classes.cardActions}>
            <Typography variant="h5" >
                    {product.price.formatted_with_symbol}
            </Typography>
            <Button variant="outlined" aria-label="Add to Cart" onClick= {() => onAddToCart(product.id, 1)} >
                <AddShoppingCart className={classes.cursor} label="Add to Cart"/>               
            </Button>
        </CardActions>
    </Card>
  );
}

export default Product
