import React from 'react'
import { useSelector } from 'react-redux'

const AccountingStudentsTotal = () => {
    let totalArr;
    const { accountingAbiturientMonthPaymentListArr, accountingMasterMonthPaymentListArr, accountingMiqMonthPaymentListArr, accountingCivilMonthPaymentListArr,
        accountingForeignlanguageMonthPaymentListArr, accountingComputerCourseMonthPaymentListArr, accountingAccountingMonthPaymentListArr,
        accountingHighSchoolMonthPaymentListArr, accountingPreSchoolMonthPaymentListArr, accountingPrimarySchoolMonthPaymentListArr } = useSelector(state => state.Data)

    //     totalArr=[...accountingAbiturientMonthPaymentListArr,...accountingMasterMonthPaymentListArr,...accountingMiqMonthPaymentListArr,...accountingCivilMonthPaymentListArr,...accountingForeignlanguageMonthPaymentListArr,...accountingComputerCourseMonthPaymentListArr,...accountingAccountingMonthPaymentListArr,...accountingHighSchoolMonthPaymentListArr,...accountingPreSchoolMonthPaymentListArr,...accountingPrimarySchoolMonthPaymentListArr]
    // console.log(totalArr);

    let total = accountingAbiturientMonthPaymentListArr.filter(data => data.status === true)
    let paidTotal = 0;
    if (total) {
        for (let i = 0; i < total.length; i++) {
            paidTotal += total[i].payment_amount
        }
    }
    let paymentTotal = 0;
    for (let i = 0; i < accountingAbiturientMonthPaymentListArr.length; i++) {
        paymentTotal += accountingAbiturientMonthPaymentListArr[i].payment_amount
    }
    let activeTotalAbiturient = accountingAbiturientMonthPaymentListArr.filter(data => data.student.status == 'DE')
    let activeTotalMaster = accountingMasterMonthPaymentListArr.filter(data => data.master.student.status == 'DE')
    let activeTotalMiq = accountingMiqMonthPaymentListArr.filter(data => data.miq.student.status == 'DE')
    let activeTotalCivil = accountingCivilMonthPaymentListArr.filter(data => data.civilservice.student.status == 'DE')
    let activeTotalComputerCourse = accountingComputerCourseMonthPaymentListArr.filter(data => data.computercourse.student.status == 'DE')
    let activeTotalForeignLang = accountingForeignlanguageMonthPaymentListArr.filter(data => data.foreignlanguage.student.status == 'DE')
    let activeTotalAccounting = accountingAccountingMonthPaymentListArr.filter(data => data.accounting.student.status == 'DE')
    let activeTotalHighschool = accountingHighSchoolMonthPaymentListArr.filter(data => data.highschool.student.status == 'DE')
    let activeTotalPreschool = accountingPreSchoolMonthPaymentListArr.filter(data => data.preschool.student.status == 'DE')
    let activeTotalPrimaryschool = accountingPrimarySchoolMonthPaymentListArr.filter(data => data.primaryschool.student.status == 'DE')


    return (
        <table className='accounting_abiturient_total_container'>
            <tr>
                <th>
                    Ümumi tələbələrin sayı
                </th>
                <th>
                    Ödəniş edilmiş tələbələrin sayı
                </th>
                <th>
                    Aktiv tələbələrin sayı
                </th>
                <th>
                    Ümumi tələbələrin ödənişlərinin cəmi
                </th>
                <th>
                    Ödəniş edilmiş tələbələrin ödənişlərinin cəmi
                </th>


            </tr>
            <tr className='branchs_students_card'>
                <td className="branchs_students_inner_card">
                    {
                        accountingAbiturientMonthPaymentListArr?.length


                    }
                </td>
                <td className="branchs_students_inner_card">
                    {total?.length}
                </td>
                <td className="branchs_students_inner_card">
                    {activeTotalAbiturient?.length
                        // +activeTotalMaster?.length+activeTotalMiq?.length+
                        // activeTotalCivil?.length+activeTotalComputerCourse?.length+activeTotalForeignLang?.length+activeTotalAccounting?.length+
                        // activeTotalHighschool?.length+activeTotalPreschool?.length+activeTotalPrimaryschool?.length}
                    }
                </td>
                <td className="branchs_students_inner_card">
                    {paymentTotal}
                </td>
                <td className="branchs_students_inner_card">
                    {paidTotal}
                </td>

            </tr>
        </table>
    )
}

export default AccountingStudentsTotal