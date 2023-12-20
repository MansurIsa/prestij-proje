import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSettingsList } from '../actions/MainAction';
import axios from 'axios';
import Swal from 'sweetalert2';
import {  useNavigate } from 'react-router-dom';

const LoginPage = () => {
    localStorage.removeItem('ACCESS_TOKEN')
    localStorage.removeItem('loggedInEmail')
    localStorage.removeItem('branchId')
    localStorage.removeItem('selectedSeason')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const settingsListArr = useSelector(state => state.Data.settingsListArr);

   

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginErrPsw, setLogErrPsw] = useState("")

    useEffect(() => {
        dispatch(getSettingsList())
    }, [dispatch])

    const setRegEmailValue = (e) => {
        setEmail(e.target.value)
    }
    const setRegPasswordValue = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length<8){
            setLogErrPsw('The password must be at least 8 characters long')
         }else if(!/[a-zA-Z]/.test(e.target.value)){
            setLogErrPsw('the password should not consist of digits only')
         }else{
            setLogErrPsw('')
         }
    }


    const handleLogin = (e) => {
        e.preventDefault()
        const data={
            email: email,
            password: password
        }
        axios('https://prestijs.pythonanywhere.com/api/token/',{
            method: "POST",
            data
        }).then(resp=>{
            console.log(resp.data.access);
            if(resp.data.access){
                navigate('/accounting')
                localStorage.setItem('ACCESS_TOKEN',resp.data.access)
                localStorage.setItem('loggedInEmail',data.email)
            }
        }).catch(err=>{
            Swal.fire({
                title: "Error",
                text: "Login unsuccessful",
                icon: "error",
                confirmButtonText: "OK",
              }).then(function () {
                  navigate('/login')
                });
        })
    }

    console.log(settingsListArr);

    return (
        <div className="login_container">
            <div id='register' className="login">
                {
                    settingsListArr[0]?.favicon_active ?
                        <img className='logo' src={settingsListArr[0]?.favicon} alt="" />
                        : null
                }
                <form className='login_form' onSubmit={handleLogin}>
                    <div className="register_line">
                        <div className="register_email">
                            <label htmlFor="">Emailiniz</label>
                            <input value={email} type="email" placeholder="Emailinizi daxil edin" onChange={setRegEmailValue} />
                        </div>
                        <div className="password">
                            <label htmlFor="">Şifrəniz</label>
                            <input value={password} type="password" placeholder="Şifrənizi daxil edin" onChange={setRegPasswordValue} />
                            <p className='reg_err_psw'>{loginErrPsw}</p>
                        </div>
                    </div>


                    <button type="submit" className="login_btn">Daxil ol</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage