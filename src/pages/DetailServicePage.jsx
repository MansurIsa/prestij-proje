import React, { useEffect } from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getServiceRetrieveList } from '../actions/MainAction'
import DetailServiceContainer from '../components/DetailServiceContainer'
import { Helmet } from 'react-helmet'

const DetailServicePage = ({ otherPageBanner }) => {
  const { id } = useParams()

  const dispatch = useDispatch();
  const serviceRetrieveObj = useSelector(state => state.Data.serviceRetrieveObj);

  useEffect(() => {
    dispatch(getServiceRetrieveList(id))
  }, [dispatch,id])
// }, [dispatch])

  console.log(serviceRetrieveObj);
  return (
    <div>
      <Helmet>
        <title>{serviceRetrieveObj.title}</title>
      </Helmet>
      <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent={serviceRetrieveObj.title} otherHeaderPagesLink={serviceRetrieveObj.title} />
      <main>
        <section>
          <DetailServiceContainer serviceRetrieveObj={serviceRetrieveObj} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default DetailServicePage