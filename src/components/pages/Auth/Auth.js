import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles.css"

const Auth = ({isLogin, setLoginStatus}) => {

    const [mode, setMode] = useState(0);
    const navigate = useNavigate();

    const onLogin = () => {
        console.log(0)
        setMode(0);
    }

    const onSignUp = () => {
        console.log(1)
        setMode(1);
    }

    const onForgetPassword = () => {
        console.log(2)
        setMode(2);
    }

    const onSubmitLogin = (e) => {
        e.preventDefault();
        setLoginStatus(true);
        navigate("/");
    }

    const displayForm = () => {
        console.log(mode === 1);
        switch(mode) {
            case 1:
                return (
                    <form action="" className='signup-form-container'>
                        <p className='auth-form-title'>Chào mừng tới FoodTown</p>
                        <p>Hãy đăng ký để cùng ăn với chúng tôi</p>
                        <div className='signup-form'>
                            <div className='signup-name'>
                                <input type="text" name="" id="" className='signup-firstname' placeholder='Họ đệm...'/>
                                <input type="text" name="" id="" className='signup-lastname' placeholder='Tên...'/>
                            </div>
                            <input type="text" name="" id="" placeholder='Số điện thoại...'/>
                            <input type="text" name="" id="" placeholder='Tên đăng nhập...'/>
                            <input type="password" name="" id="" placeholder='Mật khẩu...'/>
                            <input type="password" name="" id="" placeholder='Nhắc lại mật khẩu...'/>
                        </div>
                        <button className='btn-transparent btn'>Đăng ký</button>
                        <p onClick={onLogin} className="auth-mode">Tôi muốn đăng nhập</p>
                    </form>
                )
            case 2:
            default:
                return (
                    <form action="" className='login-form-container'>
                        <p className='auth-form-title'>Chào mừng tới FoodTown</p>
                        <p>Hãy đăng nhập để cùng ăn với chúng tôi</p>
                        <div className='login-form'>
                            <input type="text" name="" id="" placeholder='Tên đăng nhập...'/>
                            <input type="password" name="" id="" placeholder='Mật khẩu...'/>
                        </div>
                        <button className='btn-transparent btn' onClick={onSubmitLogin}>Đăng nhập</button>
                        <p onClick={onSignUp} className="auth-mode">Bạn chưa có tài khoản?</p>
                        <p onClick={onForgetPassword} className="auth-mode">Bạn quên mật khẩu?</p>
                    </form>
                )
        }
    }

    return (
        <div className='auth-container container'>
            {displayForm()}
        </div>
    )
}

export default Auth