import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import logo from '../../assets/ft-logo.png'
import "./styles.css"

const Footer = () => {

    const navItems = [
        {
          name: "CHÚNG TÔI",
          id: "#about"
        },
        {
          name: "THỰC ĐƠN",
          id: "#menu"
        },
        {
          name: "BÀI VIẾT",
          id: "#blogs",
        },
        {
          name: "LIÊN HỆ",
          id: "#contact"
        }
    ];

    return (
        <div className="footer">
            <img src={logo} alt="footer-logo" className='footer-image'/>
            <div className="footer-contact">
                <BsFacebook size={36} cursor="pointer"/>
                <BsInstagram size={36} cursor="pointer"/>
            </div>
            <div className="footer-nav">
                {
                    navItems.map((item, i) => <a key={i} href={item.id}>{item.name.toUpperCase()}</a>)
                }
            </div>
            <div className='footer-copyright'>
                &copy; FOODTOWN 2022. ALL RIGHTS RESERVE
            </div>
        </div>
    )
}

export default Footer