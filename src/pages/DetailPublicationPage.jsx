import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import OtherHeader from '../components/OtherHeader'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPubliciationRetrieveList } from '../actions/MainAction'
import Footer from '../components/Footer'
import DetailPubliciationContainer from '../components/DetailPubliciationContainer'

const DetailPublicationPage = ({otherPageBanner}) => {

    const { id } = useParams()

  const dispatch = useDispatch();
  const editionRetrieveObj = useSelector(state => state.Data.editionRetrieveObj);

  useEffect(() => {
    dispatch(getPubliciationRetrieveList(id))
  }, [dispatch,id])
// }, [dispatch])

  console.log(editionRetrieveObj);
  return (
    <div>
      <Helmet>
      </Helmet>
      <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent={editionRetrieveObj.title} otherHeaderPagesLink={editionRetrieveObj.title} />
      <main>
        <section>
          <DetailPubliciationContainer editionRetrieveObj={editionRetrieveObj} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default DetailPublicationPage