import React, { useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { monthSelectChange } from '../redux/MainReducer';
// import { getAccountingAbiturientMonthPaymentList, getAccountingAccountingMonthPaymentList, getAccountingCivilMonthPaymentList, getAccountingComputerCourseMonthPaymentList, getAccountingForeignlanguageMonthPaymentList, getAccountingHighSchoolMonthPaymentList, getAccountingMasterMonthPaymentList, getAccountingMiqMonthPaymentList, getAccountingPreSchoolMonthPaymentList, getAccountingPrimarySchoolMonthPaymentList, getAccountingSeasonMonthList, getAccountingStudentMonthPaymentList, getAccountingTeacherMonthPaymentList, getBranchsAbiturientsList, getBranchsAccountingList, getBranchsBlockAbiturientsList, getBranchsBlocksList, getBranchsCivilList, getBranchsCivilSubjectstList, getBranchsClassAbiturientsList, getBranchsClassesList, getBranchsComputerCourseAllList, getBranchsComputerCourseList, getBranchsComputerList, getBranchsForeignLanguageList, getBranchsForeignLanguageList2, getBranchsGroupAbiturientsList, getBranchsGroupMasterList, getBranchsGroupsList, getBranchsHandleHighSchoolClassList, getBranchsHandleHighSchoolGroupList, getBranchsSeasonsList, getBranchsTeachersList } from '../actions/MainAction';
import { getAccountingAbiturientMonthPaymentList, getAccountingSeasonMonthList, 
    getAccountingStudentMonthPaymentList, getAccountingTeacherMonthPaymentList, 
    
    getBranchsSeasonsList } from '../actions/MainAction';

const AccountingMonths = ({ id }) => {
    const { seasonSelectValue, accountingSeasonMonthListArr, monthSelectValue, accountingAbiturientMonthPaymentListArr, accountingStudentMonthPaymentListArr } = useSelector(state => state.Data);
    console.log(accountingSeasonMonthListArr);
    console.log(accountingAbiturientMonthPaymentListArr);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBranchsSeasonsList(localStorage.getItem('branchId')))
    }, [dispatch])




    // let selectedSeason = localStorage.getItem('selectedSeason')




    useEffect(() => {
        dispatch(getAccountingSeasonMonthList(localStorage.getItem('selectedSeason')));

    }, [dispatch, seasonSelectValue]);







    const monthSelectChange1 = (e) => {

        console.log(e.target);
        const selectedMonth = e.target.value;
        console.log(selectedMonth);
        localStorage.setItem('selectedMonth', selectedMonth)
        dispatch(monthSelectChange(selectedMonth));
        dispatch(getAccountingTeacherMonthPaymentList(selectedMonth));
        dispatch(getAccountingAbiturientMonthPaymentList(selectedMonth));
        // dispatch(getAccountingMasterMonthPaymentList(selectedMonth))
        // dispatch(getAccountingMiqMonthPaymentList(selectedMonth))
        // dispatch(getAccountingCivilMonthPaymentList(selectedMonth))
        // dispatch(getAccountingComputerCourseMonthPaymentList(selectedMonth))
        // dispatch(getAccountingForeignlanguageMonthPaymentList(selectedMonth))
        // dispatch(getAccountingAccountingMonthPaymentList(selectedMonth))
        // dispatch(getAccountingPrimarySchoolMonthPaymentList(selectedMonth))
        // dispatch(getAccountingPreSchoolMonthPaymentList(selectedMonth))
        // dispatch(getAccountingHighSchoolMonthPaymentList(selectedMonth))
        dispatch(getAccountingStudentMonthPaymentList(id, selectedMonth))



    };


    console.log(monthSelectValue);

    console.log(accountingStudentMonthPaymentListArr);
    console.log(accountingAbiturientMonthPaymentListArr);
    return (
        <div className="season_select_container">
            <div className='branchs_seasons'>
                <select onChange={monthSelectChange1} value={monthSelectValue}>
                {/* <select onChange={monthSelectChange1} value={localStorage.getItem('selectedMonth')}> */}

                    <option disabled value="">Ay seçin</option>
                    {
                        accountingSeasonMonthListArr?.map((data, i) => {
                            return (
                                <option key={data.id} value={data.id}>{data.name}</option>
                            );
                        })
                    }
                </select>
                <FaChevronDown className='select_down_icon' />
            </div>
        </div>

    )
}

export default AccountingMonths