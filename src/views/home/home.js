import React, { useEffect, useState } from 'react';
import { Button, } from '@material-ui/core';
import background from  '../../media/background.jpg'
import axios from 'axios';
import './home.css';


const Home = (props) => {
  const {
    history
  } = props;
  const [productData, setproductData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/products')
    .then((result) => {
      console.log(JSON.stringify(result.data))
      setproductData(result.data);
      }
    )
  }, []);

  const handleCarrito = (product) => {
    if (localStorage.getItem('cart')) {
      const cart = JSON.parse(localStorage.getItem('cart'))
      cart.push({
        id: product.id,
        cant: 2
      })
    } else {
      const cart = [
        {
          id: product.id,
          cant: 2
        }
      ];
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }

  return(
    <div className="home">
      <div className="header">
        <img src={background} alt="img"></img>
        <p className="title-header">Dadsd</p>
      </div>
      <p style={{ textAlign: 'center'}}>Productos</p>
      <div className="content">
        
        {productData.map(product => 
          <div className="content-card">
            <img src={background} alt="img"></img>
            <p>Papaya</p>
            <p>{product.description}</p>
            <p>Precio: <strong>{product.price}</strong></p>
            <p>Stock: <strong>{product.stock}</strong></p>
            <Button style={{display: 'block', margin: 'auto'}} onClick={handleCarrito(product)}>Añadir</Button>
        </div>
        )

        }
        
      </div>
    </div>
  );
}

export default Home;