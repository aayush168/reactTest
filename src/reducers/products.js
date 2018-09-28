import { FETCH_PRODUCTS } from '../constants'

const initialState = {
  products: [],
  loading: false,
  modalVisibility: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_PRODUCTS_PENDING':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_PRODUCTS_FULFILLED':
      return {
        ...state,
        products: action.payload,
        loading: false
      }
    case 'FETCH_PRODUCTS_REJECTED':
      return {
        ...state,
        loading: false
      }
    case 'TOGGLE_PRODUCTS':
      return {
        ...state,
        modalVisibility: !modalVisibility
      }
    default: 
      return state
  }
}