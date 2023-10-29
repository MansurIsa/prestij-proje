import React from 'react'
import OnlineExamIcon from '../images/online-course (1).png'
import OnlineSignUpIcon from '../images/registered (1).png'
import OnlineExamResultIcon from '../images/checklist (4).png'
import { useNavigate } from 'react-router-dom'

const HeaderSecondCards = () => {
    const navigate=useNavigate()

    const courseOnlineRegister=()=>{
        navigate('/course-online-register')
    }

    
    return (
        <ul className='header_second_cards_container container'>
            <li className="header_second_card">
                <div>
                    <img src={OnlineExamResultIcon} alt="" />
                    
                </div>
                <p>İmtahan nəticələri</p>
            </li>
            <li onClick={courseOnlineRegister} className="header_second_card">
                <div>
                    <img src={OnlineSignUpIcon} alt="" />
                </div>
                <p>Kursa online qeydiyyat</p>
            </li>
            
            
            <li className="header_second_card">
                <div>
                    <img src={OnlineExamIcon} alt="" />


                </div>
                <p>Online sınaq imtahanı</p>
            </li>
        </ul>
    )
}

export default HeaderSecondCards