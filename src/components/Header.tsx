import {FC} from 'react'
import Logo from '../assets/jarb logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import logo from '../assets/logo.jpg'
import './Header.css'

const Header : FC = () => {
    return (
        
            <div className='Header' >
                
                <div className="logo">
                    <img src={Logo} alt="Jarb Logo" />
                </div>
                <div className="search">
                    <input type="text" placeholder='ค้นหาสินค้า' />
                </div>
                
                    
                <ul className="cart">
                    <li><a href="#"><FaShoppingCart /></a></li>
                    <h2> ตะกร้าสินค้า </h2>
                    <li><a href="#"><FaEllipsisV /></a></li>
                    <li><a href="#"><FaUserAlt /></a></li>
                    <h2>บัญชีของฉัน</h2>
                </ul>

            <div >
                <div className="word-container">
                    <div className="word">สินค้า</div>
                    <div className="separator"></div>
                    <div className="word">จัดสเปค</div>
                    <div className="separator"></div>
                    <div className="word">ติดต่อ
                        <img src={logo} alt="LOgo" />
                    </div>
                </div>

                    
            </div>

            </div>
            
        
    )
}
export default Header