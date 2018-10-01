
const initialState = {
  products: [
    { name: 'Chicken Burger', price: 175, details: 'Grilled chickhen with cheese topping', imgSrc: 'https://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/Roadhouse-King-Silo-300x270_CR.jpg'},
    { name: 'Ham Burger', price: 200, details: 'Deep Fried Ham with hot spices', imgSrc: 'https://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/Roadhouse-King-Silo-300x270_CR.jpg' }
  ],
  loading: false,
  productModalVisibility: false,
  productModalData: {},
  billingModalVisibilty: false,
  billingModalData: []
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
    case 'TOGGLE_MODAL':
      return {
        ...state,
        productModalVisibility: !state.productModalVisibility
      }
    case 'POPULATE_MODAL_DATA':
      return {
        ...state,
        productModalData: action.payload
      }
    case 'TOGGLE_BILLING_MODAL':
      return {
        ...state,
        billingModalVisibilty: !state.billingModalVisibilty
      }
    case 'ADD_TO_CART': {
      return {
        ...state, 
        billingModalData: state.billingModalData.concat(action.payload)
      }
    }
    default: 
      return state
  }
}