import React from 'react'

const AccountingTeachersStatusColor = () => {
    return (
        <div className='accounting_students_status_color_container container'>
            <div className="accounting_students_status_color_card">
                <div></div>
                <p>Ödəniş edənlər</p>
            </div>
            <div className="accounting_students_status_color_card">
                <div></div>
                <p>Ödənişi max 3 gün gecikənlər</p>
            </div>
            <div className="accounting_students_status_color_card">
                <div></div>
                <p>Ödənişi 3 gündən daha çox gecikənlər</p>
            </div>
            <div className="accounting_students_status_color_card">
                <div></div>
                <p>Ödənişinə 3 və daha az gün qalmış</p>
            </div>
            <div className="accounting_students_status_color_card">
                <div></div>
                <p>Ödənişi bugün olanlar</p>
            </div>
           
            
        </div>
    )
}

export default AccountingTeachersStatusColor