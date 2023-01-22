import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const product = 'candy';
const flavour = 'strawberry';

const productLabel = product.toUpperCase() + ' ' + flavour;
const productImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Candy_in_Damascus.jpg/250px-Candy_in_Damascus.jpg';

function handleClick() {
  alert('구매 성공');
} 

root.render(
  <Fragment>
    {/* <h1>판매 : {product.toUpperCase() + ' '   + flavour} </h1> */}
    <h1>판매 : {productLabel} </h1>
    <img src={productImg} alt='productImg'/>
    
    <br></br>
    
    <button onClick={handleClick}>구매하기</button>
  </Fragment>
);
