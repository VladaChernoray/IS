import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DraverConsumer, DraverContext } from "../../context/draver.context";

export class DraverComponent extends React.Component {
  static contextType = DraverContext
  
  
    render() {
       const products = JSON.parse(localStorage.getItem('products'))      

        return(
          <DraverConsumer>
            {(props) => props.isDraverActive && (
              <Draver>
                    <Drawer>
                      {products.map(product => (
                        <CartContainer>
                            <CartTitle>My bag</CartTitle>
                            <CartProduct>
                            <div>
                                     <CartProductName>{product.name}</CartProductName>
                                     <CartProductSize>
                                     {product.attributes.filter(a => a.name === 'Size').map(b => (
                                     <ProductAttributes>{b.name}</ProductAttributes>
                                     ))}
                                     {product.attributes.filter(a => a.id === 'Size').map(a => (
                                       a.items.map(i => (
                                       <AttributesSize id="size">{i.value}</AttributesSize>))))}
                                     </CartProductSize>
                                     <CartProductCapacity>
                                      {product.attributes.filter(a => a.name == 'Capacity').map(a =>
                                        <ProductAttributes>{a.name}</ProductAttributes>
                                        )}
                                      {product.attributes.filter(a => a.id === 'Capacity').map(a => 
                                        a.items.map(i =>
                                          <AttributesCapacity id="capacity">{i.value}</AttributesCapacity>
                                        ))}
                                     </CartProductCapacity>
                                     <CartProductColor>
                                     {product.attributes.filter(a => a.name === 'Color').map(b => (
                                     <ProductAttributes>{b.name}</ProductAttributes>
                                     ))}
                                     {product.attributes.filter(a => a.id === 'Color').map(a => ( a.items.map(i => (
                                     <ProductColorContainer>
                                       <ProductColor style={{backgroundColor: i.value}}></ProductColor> 
                                       </ProductColorContainer>
                                        ))))}
                                     </CartProductColor>
                                 </div>
                                <CartProductImage>
                                  <CartImage src={product.gallery[0]}/>
                                </CartProductImage>
                            </CartProduct>
                            <CartTotal>
                                <b></b>
                                <b></b>
                            </CartTotal>                          
                            <div>
   
                            </div>
                        </CartContainer>
                        ))}
                        <CartButtonContainer>
                                <CartButtonView>
                                  <Link  to={`/cart/`} className='cart-button-link view'> VIEW BAG</Link>
                                  </CartButtonView>
                                <CartButtonCheck>
                                  <Link to={`/category/`} className='cart-button-link check'>CHECK OUT</Link>
                                  </CartButtonCheck>
                            </CartButtonContainer>
  
                    </Drawer>
                </Draver>
            ) 
            }
          </DraverConsumer>   
        )
    }
}

const Drawer = styled.div`
  position: absolute;
  width: 400px;
  right: 0;
  top: 90px;
  border-radius: 0;
  padding: 0 16px;
  background-color: white;
  gap: 32px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 85%;
`

const CartContainer = styled.div``

const CartTitle = styled.b`
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
`
const CartProduct = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
`

const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0;
`
const CartProductName = styled.p``
const CartProductSize = styled.div`
#size:focus{
  background-color: black;
  color: white;
}`
const CartProductColor = styled.div``
const ProductColorContainer = styled.div`
  display: inline-block;
`
const ProductColor = styled.div`
width: 32px;
height: 32px;
margin-right: 12px;
`
const CartProductImage = styled.div`
`
const CartImage = styled.img`
  width: 100px;
  height: 100px
`
const CartButtonContainer =  styled.div`
  display: flex;
  justify-content: space-between;
`
const Draver = styled.div`
  font-family: 'Raleway', sans-serif;
  left: 0;
  top: 0;
  background-color: rgba(57, 55, 72, 0.22);
  width: 100%;
  height: 100%;
  position: fixed;

.cart-button-link {
  text-decoration: none;
  color: black;
}
.check{
  color: white;
} 
.cart-button-link {
  text-decoration: none;
  color: black;
}
`
const CartButtonView = styled.button`
font-family: Raleway;
font-size: 14px;
font-weight: 600;
line-height: 17px;
letter-spacing: 0;
text-align: center;
height: 45px;
width: 140px;
background: none;
color: black;
`
const CartButtonCheck = styled.button`
background-color: #5ECE7B;
font-family: Raleway;
font-size: 14px;
font-weight: 600;
line-height: 17px;
letter-spacing: 0;
text-align: center;
height: 45px;
width: 140px;
color: white;
border: none;
`

const AttributesCapacity = styled.button`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  display: inline;
  width: 60px;
  height: 24px;
  margin-right: 12px;
  background-color: white;
  border: 1px solid #1D1F22;
  
`
const AttributesSize = styled.button`
  text-align: center;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  display: inline;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  background-color: white;
  border: 1px solid #1D1F22;
`
const ProductAttributes = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0em;
  margin: 10px 0;
`
const CartProductCapacity = styled.div`
#capacity:focus{
  background-color:#52D67A;
  color: white;
  border: #52D67A;
}`