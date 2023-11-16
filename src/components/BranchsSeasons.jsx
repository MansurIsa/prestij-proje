import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAccountingAbiturientMonthPaymentList, getAccountingSeasonMonthList, getBranchsAbiturientsList, getBranchsAccountingList, getBranchsBlockAbiturientsList, getBranchsBlocksList, getBranchsCivilList, getBranchsCivilSubjectstList, getBranchsClassAbiturientsList, getBranchsClassesList, getBranchsComputerCourseAllList, getBranchsComputerCourseList, getBranchsComputerList, getBranchsForeignLanguageList, getBranchsForeignLanguageList2, getBranchsGroupAbiturientsList, getBranchsGroupMasterList, getBranchsGroupsList, getBranchsHandleHighSchoolClassList, getBranchsHandleHighSchoolGroupList, getBranchsSeasonsList, getBranchsTeachersList } from '../actions/MainAction';
import { FaChevronDown } from 'react-icons/fa';
import { monthCreateModalContainerFunc, seasonCreateModalFunc, seasonUpdateModalContainerFunc, seasonUpdateModalFunc, seasonsSelectChange } from '../redux/MainReducer';
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
        // dispatch(getBranchsSeasonsList(localStorage.getItem('branchId')))
        dispatch(getBranchsSeasonsList(id))
    }, [dispatch, id])

    console.log(branchsSeasonsListArr);
    console.log(seasonSelectValue);
    console.log(id);

    // const seasonsSelectChange=(e)=>{
    //     setSeasonSelectValue(e.target.value==''?branchsSeasonsListArr[0].id: e.target.value)
    //     dispatch(seasonsSelectChange2(e.target.value))
    //     // dispatch(getBranchsTeachersList(e.target.value))
    // }

    // useEffect(() => {
    //     const storedSeason = localStorage.getItem('selectedSeason');
    //     if (storedSeason) {
    //         dispatch(seasonsSelectChange(storedSeason));
    //     }
    // }, [dispatch]);
    // 


    const seasonsSelectChange1 = (e) => {

        const selectedSeason = e.target.value;
        // dispatch(seasonsSelectChange(selectedSeason))
        // // dispatch(getAccountingAbiturientMonthPaymentList(monthSelectValue));
        // localStorage.setItem('selectedSeason', selectedSeason);


        if (!refreshed) {
            dispatch(seasonsSelectChange(selectedSeason))
            localStorage.setItem('selectedSeason', selectedSeason);
            setRefreshed(true);
            dispatch(getAccountingAbiturientMonthPaymentList(monthSelectValue));

            // Sayfayı yenilemek için aşağıdaki kodu kullanabilirsiniz
            window.location.reload();
        }
        // dispatch(getAccountingAbiturientMonthPaymentList(monthSelectValue));
        // dispatch(getBranchsAbiturientsList(selectedSeason))
        // dispatch(getBranchsTeachersList(selectedSeason))
        // dispatch(getBranchsAccountingList(selectedSeason))
        // dispatch(getBranchsBlockAbiturientsList(selectedSeason))
        // dispatch(getBranchsBlocksList(selectedSeason))
        // dispatch(getBranchsCivilList(selectedSeason))
        // dispatch(getBranchsCivilSubjectstList(selectedSeason))
        // dispatch(getBranchsClassAbiturientsList(selectedSeason))
        // dispatch(getBranchsClassesList(selectedSeason))
        // dispatch(getBranchsComputerCourseAllList(selectedSeason))
        // dispatch(getBranchsComputerCourseList(selectedSeason))
        // dispatch(getBranchsComputerList(selectedSeason))
        // dispatch(getBranchsForeignLanguageList(selectedSeason))
        // dispatch(getBranchsForeignLanguageList2(selectedSeason))
        // dispatch(getBranchsGroupAbiturientsList(selectedSeason))
        // dispatch(getBranchsGroupMasterList(selectedSeason))
        // dispatch(getBranchsGroupsList(selectedSeason))
        // dispatch(getBranchsHandleHighSchoolClassList(selectedSeason))
        // dispatch(getBranchsHandleHighSchoolGroupList(selectedSeason))
    }
    // console.log(selectedSeason);

    let getSelectedSeason = localStorage.getItem('selectedSeason')
    console.log(getSelectedSeason);
    let c = branchsSeasonsListArr.find(data => data.id == getSelectedSeason)
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
            {/* <button style={{backgroundColor: '#EAAE0D'}} onClick={()=>dispatch(monthCreateModalContainerFunc())}>Ayları yarat</button> */}

            {seasonCreateModal && <SeasonCreateModal/>}
            {seasonUpdateModalContainer && <SeasonUpdateModalContainer/>}
            {seasonUpdateModal && <SeasonUpdateModal/>}
            {monthCreateModalContainer && <MonthCreateModalContainer/>}

        </div>
    )
}

export default BranchsSeasons