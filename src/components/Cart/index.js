// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header/index'
import './index.css'

const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <Header />
      <div className="cartDiv">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cartImage"
        />
      </div>
    </div>
  )
}
export default Cart
