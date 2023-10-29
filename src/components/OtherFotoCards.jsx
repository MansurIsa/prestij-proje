import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFotoGalleryList } from '../actions/MainAction'
import OtherFotoCard from './OtherFotoCard'

const OtherFotoCards = () => {
    

    const dispatch = useDispatch()
    const fotoGalleryListArr = useSelector(state => state.Data.fotoGalleryListArr)
    useEffect(() => {
        dispatch(getFotoGalleryList())
    }, [dispatch])

    console.log(fotoGalleryListArr);
    return (
        <div className='other_foto_cards'>
            {
                fotoGalleryListArr?.map((data,i)=>{
                   return <OtherFotoCard key={i} data={data}/>
                })
            }
           
            

        </div>
    )
}

export default OtherFotoCards