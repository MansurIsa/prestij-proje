import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAccountingAbiturientMonthPaymentList,  getBranchsSeasonsList } from '../actions/MainAction';
import { FaChevronDown } from 'react-icons/fa';
import {  seasonCreateModalFunc, seasonUpdateModalContainerFunc,  seasonsSelectChange } from '../redux/MainReducer';
import SeasonCreateModal from './modals/SeasonCreateModal';
import SeasonUpdateModal from './modals/SeasonUpdateModal';
import SeasonUpdateModalContainer from './modals/SeasonUpdateModalContainer';
import MonthCreateModalContainer from './modals/MonthCreateModalContainer';

const BranchsSeasons = ({ id }) => {
    const [refreshed, setRefreshed] = useState(false);
    const { branchsId, branchsSeasonsListArr, seasonSelectValue, monthSelectValue,seasonCreateModal,seasonUpdateModal,seasonUpdateModalContainer,monthCreateModalContainer } = useSelector(state => state.Data)
    console.log(branchsId);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getBranchsSeasonsList(id))
    }, [dispatch, id])

    console.log(branchsSeasonsListArr);
    console.log(seasonSelectValue);
    console.log(id);

   

    const seasonsSelectChange1 = (e) => {

        const selectedSeason = e.target.value;
       

        if (!refreshed) {
            dispatch(seasonsSelectChange(selectedSeason))
            localStorage.setItem('selectedSeason', selectedSeason);
            setRefreshed(true);
            dispatch(getAccountingAbiturientMonthPaymentList(monthSelectValue));

            window.location.reload();
        }
        
    }

    let getSelectedSeason = localStorage.getItem('selectedSeason')
    console.log(getSelectedSeason);
    let c = branchsSeasonsListArr.find(data => data.id === +getSelectedSeason)
    console.log(c);

    
    
    return (
        <div className='season_select_container'>
            <div className=" branchs_seasons">
                <select onChange={seasonsSelectChange1} value={seasonSelectValue}>
                    <option value="" disabled>{c ? c.name : 'Sezon seçin'}</option>
                    {
                        branchsSeasonsListArr?.map((data, i) => {
                            return <option key={data.id} value={data.id}>{data.name}</option>
                        })
                    }

                </select>
                <FaChevronDown className='select_down_icon' />
            </div>
            <button onClick={()=>dispatch(seasonCreateModalFunc())}>Sezon yarat</button>
            <button onClick={()=>dispatch(seasonUpdateModalContainerFunc())}>Sezon dəyiş</button>

            {seasonCreateModal && <SeasonCreateModal/>}
            {seasonUpdateModalContainer && <SeasonUpdateModalContainer/>}
            {seasonUpdateModal && <SeasonUpdateModal/>}
            {monthCreateModalContainer && <MonthCreateModalContainer/>}

        </div>
    )
}

export default BranchsSeasons