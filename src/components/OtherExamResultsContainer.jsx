import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const OtherExamResultsContainer = () => {

    const navigate=useNavigate()

    const [examResultsİnpValue, setExamResultsİnpValue] = useState("")
    const [examResultsErr, setExamResultsErr] = useState("")

    const examResultsİnpChange = (e) => {
        setExamResultsİnpValue(e.target.value)
    }

    const examResultsSubmit=(e)=>{
        e.preventDefault()

        if(examResultsİnpValue!==""){
            window.open(`https://prestij-s.com/oapp/results.php?is_nomresi=${examResultsİnpValue}`, '_blank');

        }else{
            setExamResultsErr("İş nömrəsi boş ola bilməz!")
        }



    }
    return (

        <div className='other_about_container container other_exam_results_container'>
            <form onSubmit={examResultsSubmit}>
                <div className='exam_results_inp_icon'>
                    <FaUser />
                    <input placeholder='İş nömrəsi' type="number" value={examResultsİnpValue} onChange={examResultsİnpChange} />

                </div>
                <p>{examResultsErr}</p>
                <div className='other_contact_form'>
                    <button><span>Göstər</span></button>
                </div>


            </form>
        </div>





    )
}

export default OtherExamResultsContainer