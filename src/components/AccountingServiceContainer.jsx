import React from 'react'
import { useNavigate } from 'react-router-dom'

const AccountingServiceContainer = () => {
    const navigate=useNavigate()
    const handleServiceCard=()=>{
        navigate('/accounting')
    }
    const handleAccountingCard=()=>{
        navigate('/accounting2')
    }
    return (
        <div className='branchs_container'>
            <div onClick={handleServiceCard} className='branchs_card'>
                <h2>Xidmətlər</h2>
            </div>
            <div onClick={handleAccountingCard} className='branchs_card'>
                <h2>Mühasibatlıq</h2>
            </div>
        </div>
    )
}

export default AccountingServiceContainer