import React from 'react'
import { useSelector } from 'react-redux';
import { FaManatSign } from "react-icons/fa6";

const AccountingStudentTotalDay = ({categoryName}) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    
    
    const { accountingStudentMonthPaymentListArr } = useSelector(state => state.Data)
    console.log(accountingStudentMonthPaymentListArr);
    
    let total = accountingStudentMonthPaymentListArr.filter(data => data.status === true)

    
    let paidTotal = 0;
    
    
    if (total?.length>0 && total?.filter(data=>data?.paid_date===formattedDate)) {
        for (let i = 0; i < total?.filter(data=>data?.paid_date===formattedDate).length; i++) {
            paidTotal += total?.filter(data=>data?.paid_date===formattedDate)[i].payment_amount
        }
    }
    console.log(total?.filter(data=>data?.paid_date===formattedDate && data.payment_type==='N'));
    

    let paidNTotal=0;
   let paidNTotalArr=total?.length>0 && total?.filter(data=>data?.paid_date===formattedDate && data?.payment_type==='N')

   if(paidNTotalArr){
    for(let i=0;i<paidNTotalArr.length;i++){
        paidNTotal+=paidNTotalArr[i].payment_amount
    }
   }

    console.log(paidNTotal);
    
    let paidHKTotal=0;
   let paidHKTotalArr=total?.length>0 && total?.filter(data=>data?.paid_date===formattedDate && data?.payment_type==='HK')

   if(paidHKTotalArr){
    for(let i=0;i<paidHKTotalArr.length;i++){
        paidHKTotal+=paidHKTotalArr[i].payment_amount
    }
   }

    console.log(paidHKTotal);

   
    return (
        <table className='accounting_abiturient_total_container'>
            <tr >
               
                <th>
                   Bu gün ödəniş etmiş {categoryName?.name}lərin sayı
                </th>
                
                <th>
                  Bu gün ödəniş etmiş {categoryName?.name}lərin ödənişlərinin cəmi
                </th>
                <th>
                  Bu gün ödəniş etmiş {categoryName?.name}lərin Nağd ödənişlərinin cəmi
                </th>
                <th>
                  Bu gün ödəniş etmiş {categoryName?.name}lərin Hesaba köçürülən ödənişlərinin cəmi
                </th>


            </tr>
            <tr className='branchs_students_card'>
                
                <td className="branchs_students_inner_card">
                    {total?.filter(data=>data?.paid_date===formattedDate)?.length}
                </td>
               
                <td className="branchs_students_inner_card">
                    {paidTotal}<FaManatSign className='manat_icon'/>
                </td>
                <td className="branchs_students_inner_card">
                    {paidNTotal}<FaManatSign className='manat_icon'/>
                </td>
                <td className="branchs_students_inner_card">
                    {paidHKTotal}<FaManatSign className='manat_icon'/>
                </td>

            </tr>
        </table>
    )
}

export default AccountingStudentTotalDay