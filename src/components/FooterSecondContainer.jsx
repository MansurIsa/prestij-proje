import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBranchList } from '../actions/MainAction';
import FooterSecondCard from './FooterSecondCard';


const FooterSecondContainer = () => {
    const dispatch = useDispatch();
    const branchListArr = useSelector(state => state.Data.branchListArr);


    useEffect(() => {
        dispatch(getBranchList())
    }, [dispatch])

    

    return (
        <div className='footer_second_container container'>
            <div className="footer_second_card">
                <h4>HAQQIMIZDA</h4>
                <p>PRESTIJ-S tədris mərkəzi 2010-cu ildən keyfiyyətli tədrisi ilə xidmətinizdədir! Mərkəzdə qısa vaxt ərzində müasir dövrün tələblərinə uyğun olan tədris metodlarından i...</p>
                <div className='header_middle_container_content footer_second_btn'>
                    <button><span>Read More</span></button>
                </div>
            </div>
            <div className="footer_second_cards">
                {
                    [...branchListArr]?.reverse().map((data,i)=>{
                        return data.is_active?<FooterSecondCard key={i} data={data}/>:null
                    })
                }
                
            </div>

        </div>
    )
}

export default FooterSecondContainer