import {Link} from "react-router-dom";
function Header() {
    return (
        <header>
            <h1><Link to ="/">Ecommerce</Link></h1>
            <ul>
                <li><Link to ="/categories">Categories</Link></li>
                <li><Link to ="/cart">Cart</Link></li>
                <li><Link to ="/login">Login</Link></li>
            </ul>
        </header>
    );
}

export default Header;
