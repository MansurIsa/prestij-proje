import React from 'react'

const DetailTeacherContainer = ({teacherRetrieveObj}) => {
    return (
        <div className='container detail_news_container'>
            {
                teacherRetrieveObj?.is_active ?
                <div className="teachers_slider_card detail_teacher_card">
                <img src={teacherRetrieveObj.image} alt="" />
                <h3>{teacherRetrieveObj.name + ' ' + teacherRetrieveObj.surname}</h3>
                <h5>{teacherRetrieveObj.mission}</h5>
                <p>{teacherRetrieveObj.about}</p>
                
                <div className="details">
                    <span>{teacherRetrieveObj.profession}</span>

                </div>
            </div> : null
            }

        </div>
    )
}

export default DetailTeacherContainer