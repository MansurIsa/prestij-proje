import React from 'react'
import { Helmet } from 'react-helmet'
import OtherHeader from '../components/OtherHeader'
import Footer from '../components/Footer'
import OtherCourseOnlineRegister from '../components/OtherCourseOnlineRegister'

const CourseOnlineRegisterPage = ({otherPageBanner}) => {
    return (
        <div>
            <Helmet>
                <title>Kursa online qeydiyyat</title>
            </Helmet>
            <OtherHeader otherPageBanner={otherPageBanner} otherHeaderMainContent="Kursa Online Qeydiyyat" otherHeaderPagesLink="Kursa Online Qeydiyyat" />
            <main>
                <section>
                    <OtherCourseOnlineRegister/>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default CourseOnlineRegisterPage