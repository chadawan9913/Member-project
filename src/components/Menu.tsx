import { FC } from 'react';
import './Menu.css';
import { FaSignInAlt } from "react-icons/fa";
import { Content } from 'antd/es/layout/layout';


const Menu: FC = () => {
  return (
    
    <Content className='menu' >
      <div className='account'>
        <p>บัญชีของฉัน</p>
      </div>
      <div className='info'>
        <p>ข้อมูลส่วนตัว</p>
      </div>
      <div className='edit'>
        <p>แก้ไขข้อมูลส่วนตัว</p>
      </div>
      <div className='history'>
        <p>ประวัติการสั่งซื้อ</p>
      </div>
      <div className='delete'>
        <p>ลบบัญชี</p>
      </div>
      <div className='sign-out-icons'>
        <li><a href="#"><FaSignInAlt/></a></li>
      </div>
      <div className='sign-out'>
        <p>sign out</p>
      </div>
      
    </Content>
    );
};


  

export default Menu ;


