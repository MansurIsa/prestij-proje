import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";

const OtherExamResultsContainer = () => {
    const [examResultsİnpValue, setExamResultsİnpValue] = useState("");
    const [examResultsErr, setExamResultsErr] = useState("");
    const [selectedExam, setSelectedExam] = useState("");

    const examResultsİnpChange = (e) => {
        setExamResultsİnpValue(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSelectedExam(e.target.value);
        setExamResultsİnpValue(""); // seçimi dəyişəndə inputu təmizləyirik
        setExamResultsErr(""); // səhv mesajını təmizləyirik
    };

    const examResultsSubmit = (e) => {
        e.preventDefault();

        if (examResultsİnpValue !== "") {
            const y = selectedExam === "Magistr" 
                ? "https://dev.prestij-s.com/oapp/results.php"
                : selectedExam === "1-8 ci siniflər"?
                "https://sinaq.prestij-s.com/search-result"
                : "https://dev.prestij-s.com/app/results.php";
            
            window.open(`${y}?is_nomresi=${examResultsİnpValue}`, '_blank');
        } else {
            setExamResultsErr("İş nömrəsi boş ola bilməz!");
        }
    };

    return (
        <div className='other_about_container container other_exam_results_container'>
            <form onSubmit={examResultsSubmit}>
                <select className='exam_result_select' value={selectedExam} onChange={handleSelectChange}>
                    <option value="" disabled>Sınaq imtahanını seçin</option>
                    <option value="Magistr">Magistr</option>
                    <option value="Blok">Blok</option>
                    <option value="Buraxılış">Buraxılış</option>
                    <option value="Miq">Miq</option>
                    <option value="1-8 ci siniflər">1-8 ci siniflər</option>
                </select>

                {selectedExam && (
                    <>
                        <div className='exam_results_inp_icon'>
                            <FaUser />
                            <input
                                placeholder='İş nömrəsi'
                                type="number"
                                value={examResultsİnpValue}
                                onChange={examResultsİnpChange}
                            />
                        </div>
                        <p>{examResultsErr}</p>
                        <div className='other_contact_form'>
                            <button type="submit"><span>Göstər</span></button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
};

export default OtherExamResultsContainer;
