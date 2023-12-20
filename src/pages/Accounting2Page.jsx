import React, { useEffect } from 'react'
import Branchs2Container from '../components/Branchs2Container'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { accountantChangeModalContainerFunc, branchCreateModalFunc, branchDeleteModalContainerFunc, branchUpdateModalContainerFunc } from '../redux/MainReducer'
import BranchCreateModal from '../components/modals/BranchCreateModal'
import BranchUpdateModalContainer from '../components/modals/BranchUpdateModalContainer'
import BranchUpdateModal from '../components/modals/BranchUpdateModal'
import BranchDeleteModalContainer from '../components/modals/BranchDeleteModalContainer'
import AccountantChangeModalContainer from '../components/modals/AccountantChangeModalContainer'
import AccountantUpdateModal from '../components/modals/AccountantUpdateModal'
import { getNotificationList } from '../actions/MainAction'

const Accounting2Page = () => {

  const navigate = useNavigate()
  const dispatch=useDispatch()
  const { loggedInEmail, loggedInUser,branchCreateModal,branchUpdateModalContainer,branchUpdateModal,branchDeleteModalContainer,
    accountantChangeModalContainer,accountantUpdateModal,unreadCount } = useSelector(state => state.Data)

  console.log(loggedInEmail);
  console.log(loggedInUser);

  const goRegister = () => {
    navigate('/register')
  }

  const notification = () => {
    navigate('/notification')
  }

  useEffect(()=>{
    dispatch(getNotificationList())
  },[dispatch])


  localStorage.removeItem('selectedSeason')
  localStorage.removeItem('selectedMonth')


  console.log(unreadCount);
  return (
    <div className='accounting_page_container'>
      {
        (loggedInUser?.is_accountant === false && loggedInUser?.is_staff === true) ?
          <div className="accounting_create container">
            <button onClick={notification} className='accounting_create_btn'>Bildirişlər({unreadCount})</button>
            <button onClick={goRegister} className='accounting_create_btn'>Mühasib yarat</button>
            <button onClick={()=>dispatch(accountantChangeModalContainerFunc())} className='accounting_create_btn'>Mühasib Dəyiş</button>
          </div>
          : null
      }
     



      <div className="accounting_page">
        <Branchs2Container />

      </div>
      {
        (loggedInUser?.is_accountant === false && loggedInUser?.is_staff === true)?
        <div className="branchs_create container">
        <button onClick={()=>dispatch(branchCreateModalFunc())} className="accounting_create_btn">Filial yarat</button>
        <button onClick={()=>dispatch(branchUpdateModalContainerFunc())} className="accounting_create_btn">Filial dəyiş</button>
        <button onClick={()=>dispatch(branchDeleteModalContainerFunc())} className="accounting_create_btn">Filial sil</button>
      </div>: null
      }
     

      {branchCreateModal && <BranchCreateModal/>}
      {branchUpdateModalContainer && <BranchUpdateModalContainer/>}
      {branchUpdateModal && <BranchUpdateModal/>}
      {branchDeleteModalContainer && <BranchDeleteModalContainer/>}
      {accountantChangeModalContainer && <AccountantChangeModalContainer/>}
      {accountantUpdateModal && <AccountantUpdateModal/>}

    </div>
  )
}

export default Accounting2Page