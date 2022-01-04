import React from 'react';
import './ProductDetailsForm.css';
import { useParams } from 'react-router-dom';
import data from '../../data';

export default function ProductDetailsForm(props) {
    const {id} = useParams();

    const checked = () => {
        const radios = document.getElementsByName('material');
        for(let i = 0; i < radios.length; i++){
            if(radios[i].checked){
                return radios[i].value;
            }
        }
    }

    const validate = () => {
        const amount = document.getElementById('amount').value;
        const color = document.getElementById('colors').value;
        if(amount.match(/^[1-9][0-9]*$/) && checked()){
            const product = data.findProduct(id);

            data.cart.push({
                id: data.idCart++,
                name: product.name,
                model: product.model,
                material: checked(),
                color: color,
                amount: amount,
                price: product.price,
                total: amount * product.price
            });

            alert("The product is added to the cart.");
        }else{
            alert('Invalid input. Please try again.');
        }
    }

    return (
        <div className='product-details-form'>
            <form>
                <fieldset className='material'>
                    <legend>Choose material</legend>
                    <input type="radio" id="material-leather" name="material" value="leather"/>
                    <label htmlFor="material-leather">leather</label>
                    <br/>
                    <input type="radio" id="material-vinyl" name="material" value="vinyl"/>
                    <label htmlFor="material-vinyl">vinyl</label>
                    <br/>
                    <input type="radio" id="material-fabric" name="material" value="fabric"/>
                    <label htmlFor="material-fabric">fabric</label>
                </fieldset>

                <div className='amount'>
                    <label htmlFor='amount'>Amount</label>
                    <input type='text' name='amount' id='amount' autoComplete='off'></input>
                </div>

                <div className='color'>  
                    <label htmlFor="colors">Choose color</label>
                    <select name="colors" id="colors">
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Gray">Gray</option>
                        <option value="Red">Red</option>
                    </select>
                </div>

                <button type="button" className='btn' onClick={validate}> Add to cart </button>

            </form>
        </div>
    )
}