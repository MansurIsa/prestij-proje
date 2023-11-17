import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSettingsList } from '../actions/MainAction';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { branchChangeAccount } from '../redux/MainReducer';

const RegisterPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { settingsListArr,branchsListArr,branchSelectAccountValue } = useSelector(state => state.Data);

    console.log(branchSelectAccountValue);
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [regErrPsw, setRegErrPsw] = useState("")
    const [isAccountant, setIsAccountant] = useState(false)

    console.log(branchsListArr);
    useEffect(() => {
        dispatch(getSettingsList())
    }, [dispatch])

    const setRegEmailValue = (e) => {
        setEmail(e.target.value)
    }
    const setRegNameValue = (e) => {
        setName(e.target.value)
    }
    const setRegSurnameValue = (e) => {
        setSurname(e.target.value)
    }
    const setRegPasswordValue = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setRegErrPsw('The password must be at least 8 characters long')
        } else if (!/[a-zA-Z]/.test(e.target.value)) {
            setRegErrPsw('the password should not consist of digits only')
        } else {
            setRegErrPsw('')
        }
    }
 

    const setRegIsAccountant = (e) => {
        setIsAccountant(e.target.checked)
    }

    const handleRegister = (e) => {
        e.preventDefault()
        const data = {
            first_name: name,
            last_name: surname,
            email: email,
            password: password,
            is_accountant: isAccountant,
            branch: +branchSelectAccountValue
        }

        console.log(data);
        axios('https://prestijs.pythonanywhere.com/api/account/account-create/', {
            method: "POST",
            data
        }).then(resp => {
            console.log(resp);
            Swal.fire({
                title: "Created",
                text: "User created",
                icon: "success",
                confirmButtonText: "OK",
            })

        }).catch(err => {
            Swal.fire({
                title: "Error",
                text: "user not created",
                icon: "error",
                confirmButtonText: "OK",
            }).then(function () {
                navigate('/register')
            });
        })
    }

    return (
        <div className="login_container">
            <div id='register' className="login">
                {
                    settingsListArr[0]?.favicon_active ?
                        <img className='logo' src={settingsListArr[0]?.favicon} alt="" />
                        : null
                }
                <form className='login_form' onSubmit={handleRegister}>
                    <div className="register_line">
                        <div className="register_name">
                            <label htmlFor="regName">Adınız</label>
                            <input id='regName' value={name} type="text" placeholder="Adınızı daxil edin" onChange={setRegNameValue} />
                        </div>
                        <div className="register_surname">
                            <label htmlFor="regSurname">Soyadınız</label>
                            <input id='regSurname' value={surname} type="text" placeholder="Soyadınızı daxil edin" onChange={setRegSurnameValue} />
                        </div>
                    </div>
                    <div className="register_line">
                        <div className="register_email">
                            <label htmlFor="regEmail">Emailiniz</label>
                            <input id='regEmail' value={email} type="email" placeholder="Emailinizi daxil edin" onChange={setRegEmailValue} />
                        </div>
                        <div className="password">
                            <label htmlFor="regPsw">Şifrəniz</label>
                            <input id='regPsw' value={password} type="password" placeholder="Şifrənizi daxil edin" onChange={setRegPasswordValue} />
                            <p className='reg_err_psw'>{regErrPsw}</p>
                        </div>

                    </div>
                    <div className='register_check_container'>
                        {/* <div className="register_check">
                            <label htmlFor="regStaff">is staff</label>
                            <input id='regStaff' value={isStaff} onChange={setRegIsStaff} type="checkbox" />
                        </div> */}

                        <div className="register_check">
                            <label htmlFor="regAccountant">is accountant</label>
                            <input id='regAccountant' value={isAccountant} onChange={setRegIsAccountant} type="checkbox" />
                        </div>
                        <div className="season_select_container">
                            <div className='branchs_seasons'>
                                <select onChange={(e)=>dispatch(branchChangeAccount(e.target.value))} value={branchSelectAccountValue}>
                                   
                                    <option disabled value="">Filial seçin</option>
                                    {
                                        branchsListArr?.map((data, i) => {
                                            return (
                                                <option key={data.id} value={data.id}>{data.name}</option>
                                            );
                                        })
                                    }
                                </select>
                                <FaChevronDown className='select_down_icon' />
                            </div>
                        </div>


                    </div>


                    <p className='dont_have_account'>Hesabınız var? <Link to='/login'>Daxil ol</Link></p>

                    <button type="submit" className="login_btn register_btn">Qeydiyyat</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage