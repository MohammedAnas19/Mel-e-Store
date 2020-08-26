import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

export default class Product extends React.Component {
	render() {
		return (
  			<div class="card" style="width: 20rem;">
				<img class="card-img-top" src={product.src} alt="Card image cap"> </img>
			 	<div class="card-block">
					<h4 class="card-title">{product.title}      {product.price}</h4>	    		   				
				</div>
			</div>
			 
		);
	}
}

