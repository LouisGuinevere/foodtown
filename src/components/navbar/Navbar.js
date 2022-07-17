import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsCart, BsClockHistory} from 'react-icons/bs'
import { MdOutlineAccountCircle } from 'react-icons/md'
import logo from "../../assets/ft-logo.png"
import "./styles.css"

const Navbar = ({isLogin, setLoginStatus}) => {

  const navigate = useNavigate();

  const onSignIn = () => {
    navigate("/auth");
  }

  const onSignOut = () => {
    setLoginStatus(false);
  }

  const onViewCart = () => {
    navigate("/cart");
  }

  const navItems = [
    {
      name: "Chúng tôi",
      id: "#about"
    },
    {
      name: "Thực đơn",
      id: "#menu"
    },
    {
      name: "Bài viết",
      id: "#blogs",
    },
    {
      name: "Liên hệ",
      id: "#contact"
    }
  ];

  return (
    <div className='navbar-container'>
        <div className="navbar-left-container">
            <img src={logo} alt="navbar-logo" className="navbar-logo" onClick={() => navigate("/")}/>
            <p className='navbar-name'>Food Town</p>
            {
              navItems.map((item, i) => <a href={item.id} key={i} className='navbar-item'>{item.name.toUpperCase()}</a>)
            }
        </div>
        <div className="navbar-right-container">
          <BsClockHistory className='navbar-cart' size={24} onClick={onViewCart}/>
          <BsCart className='navbar-cart' size={24} onClick={onViewCart}/>
          {isLogin 
            ? 
            <div className="dropdown">
              <MdOutlineAccountCircle className='navbar-cart' size={26} onClick={onViewCart}/>
              <div className="dropdown-content">
                <p>TÀI KHOẢN</p>
                <p>CÀI ĐẶT</p>
                <p onClick={onSignOut}>ĐĂNG XUẤT</p>
              </div>
            </div>
            : <p className='navbar-item' onClick={onSignIn}>ĐĂNG NHẬP</p>
          }
        </div>
    </div>
  )
}

export default Navbar