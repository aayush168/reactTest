import axios from 'axios';

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

export function toggleModal() {
  return {
    type: 'TOGGLE_MODAL'
  }
}

export function setModalData(payload) {
  return {
    type: 'POPULATE_MODAL_DATA',
    payload
  }
}

export function addToCart(payload) {
  return {
    type: 'ADD_TO_CART',
    payload
  }
}

export function resetAll() {
  return {
    type: 'RESET_CART'
  }
}

