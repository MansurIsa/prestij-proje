import axios from "axios"
import { baseUrl } from "../MAIN_API";
import {headerLoading, getBannerListArr, getBranchListArr, getContactInfoListArr, 
    getFotoGalleryListArr, getNewsListArr, getNewsRetrieveObj, getServiceRetrieveObj,
     getServicesListArr, getSettingsListArr, getSuccessItemListArr, getSuccessListArr, 
     getTeachersListArr, getVideoGalleryListArr, otherHeaderLoading, getTeacherRetrieveObj, 
     getEditionListArr, getEditionRetrieveObj, getBranchsListArr, getBranchsSeasonsListArr, 
     getBranchsStudentsListArr, getBranchsTeachersListArr, getBranchsAbiturientsListArr, 
     getBranchsBlocksListArr, getBranchsClassesListArr, getBranchsSubjectsListArr, 
     getBranchsGroupsListArr ,getBranchsBlockAbiturientsListArr, getBranchsClassAbiturientsListArr,
      getBranchsSubjectAbiturientsListArr, getBranchsGroupAbiturientsListArr, 
 
      getBranchsAccountingListArr,  getAccountingSeasonMonthListArr, 
      getAccountingAbiturientMonthPaymentListArr, 
    getAccountingTeacherMonthPaymentListArr, 
    getAccountingMonthAbiturientPaymentListArr, 
     getAccountingMonthTeachersPaymentListArr, 
    getLoggedInUser, getNotificationListArr, getCategoryListArr, getClassesListArr, getGroupsListArr, 
    getLanguageListArr, getBlockListArr, getSubjectListArr, getAccountingStudentMonthPaymentListArr, 
    getAccountantsFunc } from "../redux/MainReducer";


export const getBannerList=()=>async dispatch=>{
    dispatch(headerLoading())
    return await axios.get(`${baseUrl}prestij/banners-list/`)
    .then(resp=>{
        console.log(resp);
        
        dispatch(getBannerListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getContactInfoList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}prestij/contactinformation-list/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getContactInfoListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getServicesList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}prestij/service-list/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getServicesListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getNewsList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}prestij/news-list/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getNewsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getVideoGalleryList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}prestij/videogallery-list/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getVideoGalleryListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getFotoGalleryList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}prestij/photogallery-list/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getFotoGalleryListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}
export const getTeachersList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}prestij/teacher-list/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getTeachersListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getSuccessList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}prestij/success-list/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getSuccessListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}
export const getSuccessItemList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}prestij/successitem-list/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getSuccessItemListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getNewsRetrieveList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}prestij/news-retrieve/${id}/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getNewsRetrieveObj(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getServiceRetrieveList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}prestij/service-retrieve/${id}/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getServiceRetrieveObj(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getTeacherRetrieveList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}prestij/teacher-retrieve/${id}/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getTeacherRetrieveObj(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getSettingsList=()=>async dispatch=>{
    dispatch(otherHeaderLoading())
    return await axios.get(`${baseUrl}prestij/settings-list/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getSettingsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}prestij/branch-list/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getEditionList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}prestij/edition-list/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getEditionListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getPubliciationRetrieveList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}prestij/edition-retrieve/${id}/`)
    .then(resp=>{
        console.log(resp);
        dispatch(getEditionRetrieveObj(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsList=(email)=>async dispatch=>{
    return await axios.get(`${baseUrl}service/branch-list/${email}`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchsSeasonsList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}service/branch-season-list/${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsSeasonsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsStudentsList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}service/season-student-list/${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsStudentsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsTeachersList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}service/season-teacher-list/${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsTeachersListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsAbiturientsList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}service/abiturient-list/${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsAbiturientsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}
export const getBranchsBlockAbiturientsList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}service/block-abiturient-list/${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsBlockAbiturientsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchsBlocksList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}service/abiturient-block-list/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsBlocksListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsClassesList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}service/abiturient-class-list/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsClassesListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}
export const getBranchsSubjectsList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}service/abiturient-subject-list/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsSubjectsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchsGroupsList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}service/abiturient-group-list/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsGroupsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getBranchsClassAbiturientsList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}service/class-abiturient-list/${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsClassAbiturientsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsSubjectAbiturientsList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}service/subject-abiturient-list/${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsSubjectAbiturientsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getBranchsGroupAbiturientsList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}service/group-abiturient-list/${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsGroupAbiturientsListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}



export const getBranchsAccountingList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}service/accounting-list/${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBranchsAccountingListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}




export const getAccountingSeasonMonthList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}accounting/season-month-list/${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingSeasonMonthListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getAccountingTeacherMonthPaymentList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}accounting/teacher-month-payment-list/${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingTeacherMonthPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}



export const getAccountingAbiturientMonthPaymentList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}accounting/student-month-payment-list/${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingAbiturientMonthPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}


export const getAccountingStudentMonthPaymentList=(id,id2)=>async dispatch=>{
    return await axios.get(`${baseUrl}accounting/student-category-month-payment-list/${id}/${id2}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingStudentMonthPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}






export const getAccountingMonthAbiturientPaymentList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}accounting/month-student-payment-list/${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingMonthAbiturientPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}





export const getAccountingMonthTeachersPaymentList=(id)=>async dispatch=>{
    return await axios.get(`${baseUrl}accounting/month-teacher-payment-list/${id}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountingMonthTeachersPaymentListArr(resp.data))
    }).catch(err=>{
        console.log(err);
    })
}

export const getUser=(email)=>async dispatch=>{
    return await axios.get(`${baseUrl}account/account/${email}/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getLoggedInUser(resp.data))
        
    }).catch(err=>{
        console.log(err);
    })
}



export const getNotificationList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}notification/notification-list/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getNotificationListArr(resp.data))
        
    }).catch(err=>{
        console.log(err);
    })
}


export const getCategoryList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}service/category-list-create/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getCategoryListArr(resp.data))
        
    }).catch(err=>{
        console.log(err);
    })
}





export const getclassesList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}service/class-list-create/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getClassesListArr(resp.data))
        
    }).catch(err=>{
        console.log(err);
    })
}


export const getGroupsList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}service/group-list-create/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getGroupsListArr(resp.data))
        
    }).catch(err=>{
        console.log(err);
    })
}


export const getLanguageList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}service/language-list-create/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getLanguageListArr(resp.data))
        
    }).catch(err=>{
        console.log(err);
    })
}


export const getBlockList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}service/block-list-create/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getBlockListArr(resp.data))
        
    }).catch(err=>{
        console.log(err);
    })
}


export const getSubjectList=()=>async dispatch=>{
    return await axios.get(`${baseUrl}service/subject-list-create/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getSubjectListArr(resp.data))
        
    }).catch(err=>{
        console.log(err);
    })
}


export const getAccountants=()=>async dispatch=>{
    return await axios.get(`${baseUrl}account/accountants/`,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    })
    .then(resp=>{
        console.log(resp);
        dispatch(getAccountantsFunc(resp.data))
        
    }).catch(err=>{
        console.log(err);
    })
}












