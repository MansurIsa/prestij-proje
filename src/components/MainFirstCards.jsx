import React from 'react'
import OnlineExamIcon from '../images/online-course (1).png'
import OnlineSignUpIcon from '../images/registered (1).png'
import OnlineExamResultIcon from '../images/checklist (4).png'

const MainFirstCards = () => {
    return (
        <div className="main_first_cards">
            <ul className='main_second_cards_container container'>
                <li className="header_second_card">
                    <div>
                        <img src={OnlineExamResultIcon} alt="" />
                        
                    </div>
                    <p>İmtahan nəticələri</p>
                </li>
                <li className="header_second_card">
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
        </div>

    )

}

export default MainFirstCards