import cart from "../assets/cart-shopping-solid.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
function CartWidget () {
    return (
        <img className=" mx-4 px-2" width="40"   src={cart} alt="cartImage"></img>
        );
}
export default CartWidget;
