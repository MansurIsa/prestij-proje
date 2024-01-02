import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import FooterLogoImg from '../images/logo_footer.png'
import { getSettingsList } from '../actions/MainAction';
import { useDispatch, useSelector } from 'react-redux';


const FooterLogo = () => {

  const dispatch = useDispatch();
  const { settingsListArr } = useSelector(state => state.Data);


  useEffect(() => {
    dispatch(getSettingsList())
  }, [dispatch])

  return (
    <Link to='/prestij-proje'>
        {
          settingsListArr[0]?.logo_active ?
            <img className='logo' src={settingsListArr[0]?.logo} alt="" />
            : null
        }
      </Link>
  )
}

export default FooterLogo