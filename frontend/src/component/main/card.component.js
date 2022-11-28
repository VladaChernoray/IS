import React from "react";
import {GET_CATEGORIES} from "../../query/categories.query";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Query} from "@apollo/client/react/components";

export class Card extends React.Component {
    render() {
        return(
            <Query query={ GET_CATEGORIES }>
                {({loading, data}) => {
                  if (loading) return 'Loading';
                    const { categories } = data;
                    return categories.map(({name, products}) => (
                    <CardContainer>
                        <Category>{name}</Category>
                        {products.map(({name, id, inStock, gallery, prices}) =>(
                            <CardContent>
                                <CardImage className='card-image' src={gallery[0]}/>
                                <Link to={`/pdp/${id}`} className='card-link'>
                                    <CardTitle>{name}</CardTitle>
                                </Link>
                            </CardContent>
                        ))}
                    </CardContainer>))
                }}
            </Query>
        )
    }
}

const Category = styled.h1`
  font-size: 42px;
  font-weight: 400;
  line-height: 67px;
  letter-spacing: 0;
  text-align: left;
  margin: 0 100px;
`

const CardContent = styled.div`
  display: inline-block;
  margin: 30px;
  padding: 16px;
  text-decoration: none;
  box-shadow: rgba(17, 17, 26, 0.1) 0 4px 16px, rgba(17, 17, 26, 0.1) 0 8px 24px, rgba(17, 17, 26, 0.1) 0 16px 56px;
}`

const CardImage = styled.img`
  object-fit: cover;
  object-position: right;
  width: 250px;
  height: 250px;
`
const CardTitle = styled.p`
  color: black;
  text-align: start;
  font-size: 18px;
`

const CardContainer = styled.div`
  text-align: center;
  font-family: 'Raleway', sans-serif;
  padding: 40px 0;

  .card-link:link{
    text-decoration: none!important;
  }
`