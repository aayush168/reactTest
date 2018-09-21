import { FETCH_PRODUCTS } from '../constants'

const initialState = {
  products: [],
  loading: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_PRODUCTS_PENDING':
    console.log(action, 'PENDING')
      return {
        ...state,
        loading: true
      }
    case 'FETCH_PRODUCTS_FULFILLED':
      console.log(action, 'FULFILLED')
      return {
        ...state,
        products: action.payload,
        loading: false
      }
    case 'FETCH_PRODUCTS_REJECTED':
      console.log(action, 'REJECTED')
      return {
        ...state,
        loading: false
      }
    default: 
      return state
  }
}