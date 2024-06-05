import mixin from '@/mixins/APIHandlingMixin';
const currFunctionNm = "BEFT Update Inward Account"; 
const apiUrl = JSON.parse(sessionStorage.getItem("apiUrlPath") as any);




//   const customer_info_post = async (customer_obj) => {
//     // debugger

//     const resData = await mixin.$postApiCall(
//         currFunctionNm,
//         apiUrl.CorLoanAPIPath,
//         "Customer/CustomerPost",
//         customer_obj
//     );
//     if (resData) {

//         return resData.responseData
//     }
// }

const customer_info_post = async (customer_obj) => {
  // debugger
  const BusinessData = {
    obj_Customer : customer_obj
  };
  const resData = await mixin.$postApiCall(
    currFunctionNm,
    apiUrl.CorLoanAPIPath,
    "Customer/PostCustomerInfo",
    BusinessData
  );
  if (resData) {
    // debugger
    return resData;
  }
};


const CountryGet = async() =>{
  const BusinessData = {

  };
  const resData = await mixin.$getApiCall(
    currFunctionNm,
    apiUrl.CorLoanAPIPath,
    'Customer/CountryGet',
    // 'BusinessData'
    {}
    
  )
  if(resData){
    return resData;
  }
}

const DivisionGet = async(Country_Id) =>{
  const BusinessData = {
    COUNTRY_ID : Country_Id,
  };
  const resData = await mixin.$getApiCall(
    currFunctionNm,
    apiUrl.CorLoanAPIPath,
    'Customer/DivisionGet',
    BusinessData
  )
  if(resData){
    return resData;
  }
}

const DistrictGet = async(Division_Id) =>{
  // debugger
  const BusinessData = {
    DIVISION_ID : Division_Id,
  };
  const resData = await mixin.$getApiCall(
    currFunctionNm,
    apiUrl.CorLoanAPIPath,
    'Customer/DistrictGet',
    BusinessData
  )
  if(resData){
    return resData;
  }
}

// 
const ThanaGet = async(District_Id) =>{

  const BusinessData = {
    DISTRICT_ID : District_Id,
  };
  const resData = await mixin.$getApiCall(
    currFunctionNm,
    apiUrl.CorLoanAPIPath,
    'Customer/ThanaGet',
    BusinessData
  )
  if(resData){
    return resData;
  }
}

const CustomerGet = async(p_customer_id) =>{
  const BusinessData = {
    p_customer_id : p_customer_id,
  };
  const resData = await mixin.$getApiCall(
    currFunctionNm,
    apiUrl.CorLoanAPIPath,
    'Customer/CustomerGet',
    BusinessData
  )
  if(resData){
    return resData;
  }
}



// const introducer_info_post = async (customer_obj) => {
//   const BusinessData = {
//     obj_Customer : customer_obj
//   };
//   const resData = await mixin.$postApiCall(
//     currFunctionNm,
//     apiUrl.CorLoanAPIPath,
//     "Customer/CustomerPost",
//     BusinessData
//   );
//   if (resData) {
//     return resData;
//   }
// };




  export default{
    customer_info_post,
    // introducer_info_post
    CountryGet,
    DivisionGet,
    DistrictGet,
    ThanaGet,
    CustomerGet 

  }