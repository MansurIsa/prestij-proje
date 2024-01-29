import React, { useEffect } from 'react'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  getNewsRetrieveList } from '../actions/MainAction'
import DetailNewsContainer from '../components/DetailNewsContainer'
import { Helmet } from 'react-helmet'

const DetailNewsPage = ({ otherPageBanner }) => {
    const { id } = useParams()




    const dispatch = useDispatch()
    const { newsRetrieveObj } = useSelector(state => state.Data)
    
    useEffect(() => {
        dispatch(getNewsRetrieveList(id))
    }, [dispatch,id])
// }, [id])
    

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Helmet>
                <title>{newsRetrieveObj.title}</title>
            </Helmet>
            <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent={newsRetrieveObj.title} otherHeaderPagesLink={newsRetrieveObj.title} />
            <main>
                <section>
                    <DetailNewsContainer newsRetrieveObj={newsRetrieveObj} />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default DetailNewsPage