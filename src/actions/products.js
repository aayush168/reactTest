import axios from 'axios'
import { FETCH_PRODUCTS } from '../constants';

function fetchProductsAPI() {
  return axios.get('http://dummy.restapiexample.com/api/v1/employees').then(res => {
    return res.data.splice(0,10)
  })
}

export function fetchProducts() {
  return {
    type: 'FETCH_PRODUCTS',
    payload: fetchProductsAPI()
  }
}


