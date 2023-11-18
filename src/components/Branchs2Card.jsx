import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getBranchsId } from '../redux/MainReducer'

const Branchs2Card = ({ data }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [refreshed, setRefreshed] = useState(false);



    const handleBranchsCard = (id) => {



        if (!refreshed) {
            localStorage.setItem('branchId', id)
            dispatch(getBranchsId(id))
            navigate(`/branchs-category/${id}`)
            setRefreshed(true);

            // Sayfayı yenilemek için aşağıdaki kodu kullanabilirsiniz
            window.location.reload();
        }

    }
    return (
        <div onClick={() => handleBranchsCard(data.id)} className='branchs_card'>
            <h2>{data.name}</h2>
        </div>
    )
}

export default Branchs2Card