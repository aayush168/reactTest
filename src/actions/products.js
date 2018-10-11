import axios from 'axios';
import db from '../firebase/db'

// function fetchProductsAPI() {
//   return axios.get('http://dummy.restapiexample.com/api/v1/employees').then(res => {
//     return res.data.splice(0,10)
//   })
// }

async function fetchProductsAPI() {
  let productData = []
  try {
    var docRef = await db.collection("products").get()  
    docRef.forEach(doc => {
      productData.push(doc.data())
    })
    return productData
  } catch(e) {
    return e
  }
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

