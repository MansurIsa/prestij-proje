import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getTeacherRetrieveList } from '../actions/MainAction';
import { Helmet } from 'react-helmet';
import OtherHeader from '../components/OtherHeader';
import Footer from '../components/Footer';
import DetailTeacherContainer from '../components/DetailTeacherContainer';

const DetailTeacherPage = ({otherPageBanner}) => {
    const { id } = useParams()
    console.log(id);
    const dispatch = useDispatch();
  const {teacherRetrieveObj} = useSelector(state => state.Data);

  useEffect(() => {
    dispatch(getTeacherRetrieveList(id))
  }, [dispatch,id])
// }, [])

  console.log(teacherRetrieveObj);
  return (
    <div>
    <Helmet>
      <title>{}</title>
    </Helmet>
    <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent={`${teacherRetrieveObj.name}-${teacherRetrieveObj.surname}`} otherHeaderPagesLink={`${teacherRetrieveObj.name}-${teacherRetrieveObj.surname}`} />
    <main>
      <section>
        <DetailTeacherContainer teacherRetrieveObj={teacherRetrieveObj} />
      </section>
    </main>
   
    <Footer />
  </div>
  )
}

export default DetailTeacherPage