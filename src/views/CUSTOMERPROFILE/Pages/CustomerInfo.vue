<template>
    <BaseHeader class="position-css" :title="'Customer'" :is-four-button="true" :button1="'OK'" :button2="'View'"
        :button3="'Refresh'" :button4="'Exit'" @onSubmitFromChildren="OnSubmit" @onViewFromChildren="OnDecline"
        @onRefreshFromChildren="OnRefresh" @onExitFromChildren="OnExit" />
    <br />
    <br />
    <v-container class="custprofile_details_header">
        <p>Customer Profile Details</p>
    </v-container>
    <br>
    <v-container>
        <v-card>
            <v-text>
                <v-form>
                    <v-row>
                        <v-col>
                            <v-row>
                                <v-col cols="12" md="5">
                                    <v-text-field v-model="objCusInfo.CUSTOMER_ID" :counter="10" label="Customer ID"
                                        hide-details 
                                        @blur="ByCustomerId(objCusInfo.CUSTOMER_ID)"></v-text-field>
                                </v-col>
                            </v-row>
                            <br>

                            <v-row>
                                <v-col cols="12" md="5">
                                    <v-text-field v-model="objCusInfo.CUSTOMER_NAME" :counter="10" label="Customer Name"
                                        hide-details required></v-text-field>
                                </v-col>

                                <v-col cols="12" md="5">
                                    <v-text-field v-model="objCusInfo.FATHER_NAME" :counter="10" label="Father Name"
                                        hide-details required></v-text-field>
                                </v-col>
                            </v-row>

                            <br>

                            <v-row>
                                <v-col cols="12" md="3">
                                    <v-text-field v-model="objCusInfo.MOTHER_NAME" :counter="10" label="Mother Name"
                                        hide-details required></v-text-field>
                                </v-col>

                                <v-col cols="12" md="3">
                                    <v-autocomplete v-model="objCusInfo.GENDER" :items="genders" label="Gender"
                                        item-value="value" item-title="label" required></v-autocomplete>
                                </v-col>

                                <v-col cols="12" md="3">
                                    <v-text-field v-model="objCusInfo.DATE_OF_BIRTH" :counter="10" type="date"
                                        label="Date of Birth" hide-details required>
                                    </v-text-field>
                                </v-col>

                                <v-col cols="12" md="2">
                                    <v-autocomplete v-model="objCusInfo.MARITAL_STATUS" :items="maritals"
                                        label="Marital" item-value="value" item-title="label" @update:modelValue="onMaritalStatusChange" required></v-autocomplete>
                                </v-col>
                            </v-row>
                            <br>
                            <v-row>
                                <v-col cols="12" md="5">
                                    <v-text-field v-model="objCusInfo.SPOUSE_NAME" :counter="10" label="Spouse Name"
                                        :disabled="isSpouseNameDisabled" hide-details ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="5">
                                    <v-text-field v-model="objCusInfo.NID" :counter="10" label="NID" hide-details
                                        required :error-messages="nidError" @input="validateNID" v-on:keypress="[rules.isDecimal($event)]"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <br>
                    <br>
                    <v-row>
                        <v-col>
                            <v-tabs v-model="tab" bg-color="#054b75">
                                <v-tab style="color: white" value="one">INTRODUCER INFO</v-tab>
                                <v-tab style="color: white" value="two">ADDRESS LIST</v-tab>
                            </v-tabs>


                            <v-window v-model="tab">
                                <v-window-item value="one">
                                    <br>
                                    <v-row>
                                        <v-col cols="12" md="4">
                                            <v-autocomplete v-model="objIntroInfo.INTRODUCER_TYPE" :items="introducers"
                                                item-value="value" item-title="label"
                                                label="Introducer Type"></v-autocomplete>
                                        </v-col>

                                        <v-col cols="12" md="4">
                                            <v-text-field v-model="objIntroInfo.INTRODUCER_ACC_BRANCH"
                                                label="Introducer Acc Branch" hide-details required></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="4">
                                            <v-text-field v-model="objIntroInfo.INTRODUCER_ACC_NO"
                                                label="Introducer Acc No" hide-details ></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <br>

                                    <v-row>
                                        <v-col cols="12" md="5">
                                            <v-text-field v-model="objIntroInfo.INTRODUCER_DETAILS" :counter="10"
                                                label="Introducer Details" hide-details ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <br>
                                </v-window-item>

                                <v-window-item value="two">

                                    <br>
                                    <v-row>
                                        <v-col cols="12" md="4">
                                            <v-autocomplete v-model="objAddressList.ADDRESS_TYPE" :items="address"
                                                label="Address Type" @update:modelValue="CountryGet()"
                                                item-value="value" item-title="label"></v-autocomplete>
                                        </v-col>

                                        <v-col cols="12" md="4">
                                            <v-text-field v-model="objAddressList.ADDRESS" label="Address" hide-details
                                                @update:modelValue=test() ></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="4">
                                            <v-text-field v-model="objAddressList.CITY" label="City/Town/Area"
                                                hide-details ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" md="3">
                                            <v-text-field v-model="objAddressList.ZIP" label="Zip/Postal Code"
                                                hide-details v-on:keypress="[rules.isDecimal($event)]" ></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="3">
                                            <v-autocomplete v-model="objAddressList.COUNTRY" :items="CountryList"
                                                label="Country" item-value="COUNTRY_ID" item-title="COUNTRY_NM"
                                                @update:modelValue="DivisionGet(objAddressList.COUNTRY)"></v-autocomplete>
                                        </v-col>

                                        <v-col cols="12" md="3">
                                            <v-autocomplete v-model="objAddressList.DIVISION" :items="DivisionList"
                                                label="Division/State" item-value="DIVISION_ID" item-title="DIVISION_NM"
                                                @update:modelValue="DistrictGet(objAddressList.DIVISION)"></v-autocomplete>
                                        </v-col>

                                        <v-col cols="12" md="3">
                                            <v-autocomplete v-model="objAddressList.DISTRICT" :items="DistrictList"
                                                label="District" item-value="DISTRICT_ID" item-title="DISTRICT_NM"
                                                @update:modelValue="ThanaGet(objAddressList.DISTRICT)"></v-autocomplete>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col cols="12" md="3">
                                            <v-autocomplete v-model="objAddressList.THANA" label="Thana"
                                                item-value="THANA_ID" item-title="THANA_NM" :items="ThanaList"
                                                @update:modelValue="ThanaGet(objAddressList.DISTRICT)" ></v-autocomplete>
                                        </v-col>

                                        <v-col cols="12" md="3">
                                            <v-text-field v-model="objAddressList.PHONE_NO" label="Phone Number"
                                                hide-details v-on:keypress="[rules.isDecimal($event)]"></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="3">
                                            <v-text-field v-model="objAddressList.MOBILE_NO" label="Mobile Number"
                                                hide-details v-on:keypress="[rules.isDecimal($event)]"></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="3">
                                            <v-text-field v-model="objAddressList.EMAIL" label="Email" hide-details
                                                ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <br>
                                    <br>
                                    <v-row>
                                        <v-col class="btn">
                                            <v-btn style="background: #054b75; color: white" @click="addAddress()">
                                                {{ isEditMode ? 'Update' : 'Add' }}
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                    <br>
                                    <br>
                                    <v-row>
                                        <v-data-table :headers="headers" :items="tableItems" :items-per-page="10" dense>
                                            <template v-slot:item.action="{ item, index }">
                                                <v-btn @click="EditButtonClick(item, index)" color="primary">
                                                    Edit
                                                </v-btn>
                                            </template>
                                        </v-data-table>
                                    </v-row>
                                </v-window-item>
                            </v-window>
                        </v-col>
                    </v-row>
                </v-form>
            </v-text>
        </v-card>
    </v-container>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';

import BaseHeader from '@/components/shared/BaseHeader.vue';
import rules from '@/mixins/rules';
import { toast } from 'vue3-toastify';
import type ICOR_INTRODUCER_INFO from '../models/ICOR_INTRODUCER_INFO';
import type ICOR_ADDRESS_LIST from '../models/ICOR_ADDRESS_LIST';
import type ICOR_CUSTOMER_INFO from '../models/ICOR_CUSTOMER_INFO';
import customer_service from '../Service/customer_service';
import store from '@/store';


// const tabs = ref(null);
const tab = ref(null);

let objIntroInfo = ref<ICOR_INTRODUCER_INFO>({}).value;
let objCusInfo = ref<ICOR_CUSTOMER_INFO>({}).value;
let objAddressList = ref<ICOR_ADDRESS_LIST>({}).value;
let tableItems = ref([] as any);
let tempAddress = ref({} as any);
//let tableItems = ref<ICOR_ADDRESS_LIST[]>([]);
let CountryList = ref<any[]>([]);
let DivisionList = ref<any[]>([]);
let DistrictList = ref<any[]>([]);
let ThanaList = ref<any[]>([]);
// let addressForUpdate=ref([]as any);
let isEditMode = ref(false);
let editIndex = ref(null);

// objCusInfo.MADE_BY  = store.getters.getUserId;
// console.log('objCusInfo in page_load: ', objCusInfo);
let genders = [
    {
        label: 'Male',
        value: 'Male'
    },

    {
        label: 'Female',
        value: 'Female'
    }
];



const headers = ref<any[]>([
    { title: 'ADDRESS_TYPE', value: 'ADDRESS_TYPE' },
    { title: 'ADDRESS', value: 'ADDRESS' },
    { title: 'CITY', value: 'CITY' },
    { title: 'Zip', value: 'ZIP' },
    { title: 'Country', value: 'COUNTRY_NM' },
    { title: 'Division', value: 'DIVISION_NM' },
    { title: 'District', value: 'DISTRICT_NM' },
    { title: 'Thana', value: 'THANA_NM' },
    { title: 'Phone_number', value: 'PHONE_NO' },
    { title: 'Mobile_number', value: 'MOBILE_NO' },
    { title: 'Email', value: 'EMAIL' },
    { title: 'Actions', value: 'action' }
]);



// const items = [
//     {
//         AddressType: 'Account Holder',
//         Address: 'Mirpur'
//     }
//     // {  "player": "Stephen Curry", },
//     // { "championships": [2012, 2013, 2016, 2020], "player": "Lebron James", },
//     // { "championships": [2017, 2018], "player": "Kevin Durant", },
//     // { "championships": [2021], "player": "Giannis Antetokounmpo", }
// ];

// const nidRule = (value: string) => {
//   return value.length >= 10 || 'NID must be at least 10 characters';
// };

const nidError = ref<string | null>(null);

const validateNID = () => {
  if (objCusInfo.NID.length < 10  ) {
    nidError.value = 'NID must be 10 characters';
  }
  else if(objCusInfo.NID.length > 17){
    nidError.value = 'NID not more than 17 characters';
  }
   else {
    nidError.value = null;
  }
};



const isFormValid = computed(() => {
  // Perform validation logic here
  const requiredFields = [
    objCusInfo.CUSTOMER_NAME,
    objCusInfo.FATHER_NAME,
    objCusInfo.MOTHER_NAME,
    objCusInfo.GENDER,
    objCusInfo.DATE_OF_BIRTH,
    objCusInfo.MARITAL_STATUS,
    // objCusInfo.SPOUSE_NAME,
    objCusInfo.NID,
  
  ];

  return requiredFields.every(field => field);
});

const isSpouseNameDisabled = computed(() => objCusInfo.MARITAL_STATUS !== 'Married');


 


async function onMaritalStatusChange() {
  if (objCusInfo.MARITAL_STATUS == 'Unmarried') {
    objCusInfo.SPOUSE_NAME = null;
  }
}


Page_Load();    
async function addAddress() {
    // debugger
    console.log('objAddressList on add button', objAddressList)

    await matchCountry_NM(objAddressList)
    console.log('country get');
    await matchDivision_NM(objAddressList)
    console.log('division get');
    await matchDistrict_NM(objAddressList);
    console.log('district get');
    await matchThana_NM(objAddressList);
    console.log('thana get');

    const existingAddress = tableItems.value.find(item => item.ADDRESS_TYPE === objAddressList.ADDRESS_TYPE);

    // if (!isEditMode.value) {
        if (existingAddress) {
            toast.error(`An address of type ${objAddressList.ADDRESS_TYPE} already exists.`);
            return;
        }

        // if (tableItems.value.length >= 2) {
        //     toast.error('You can only add two addresses: one Present and one Permanent.');
        //     return;
        // }

        // else {
        //     // If in edit mode, allow updating the existing address but prevent duplicate types
        //     if (existingAddress && existingAddress !== tableItems.value[editIndex.value]) {
        //         toast.error(`An address of type ${objAddressList.ADDRESS_TYPE} already exists.`);
        //         return;
        //     }
        // }
    // }




    tempAddress = { ...objAddressList };
    console.log(tempAddress);

    if (isEditMode.value == true) {
        tableItems.value[editIndex.value] = tempAddress;
        console.log(tableItems.value[editIndex.value]);
        // addressForUpdate.value.push(tempAddress);
    }
    else {
        tableItems.value.push(tempAddress);

    }
    await clear();

    console.log('table Item: ', tableItems);

    console.log('table Item2: ', tableItems);
    isEditMode.value = false;
    // editIndex.value = null; 
}

async function EditButtonClick(item, index) {
    // debugger
    isEditMode.value = true;
    item.COUNTRY_ID = item.COUNTRY
    item.DIVISION_ID = item.DIVISION
    item.DISTRICT_ID = item.DISTRICT
    item.THANA_ID = item.THANA

    console.log('item', item);
    console.log(index);
    //   objAddressList = {...item};
    objAddressList.ADDRESS_TYPE = item.ADDRESS_TYPE;
    objAddressList.ADDRESS = item.ADDRESS;
    objAddressList.CITY = item.CITY;
    objAddressList.ZIP = item.ZIP;
    objAddressList.COUNTRY = item.COUNTRY_ID;
    objAddressList.DIVISION = item.DIVISION_ID;
    objAddressList.DISTRICT = item.DISTRICT_ID;
    objAddressList.THANA = item.THANA_ID;
    objAddressList.PHONE_NO = item.PHONE_NO;
    objAddressList.MOBILE_NO = item.MOBILE_NO;
    objAddressList.EMAIL = item.EMAIL;

     isEditMode.value = true;
    editIndex.value = index;

    item.ADDRESS_TYPE = '';
    item.ADDRESS = '';
    item.CITY = '';
    item.ZIP = '';
    item.COUNTRY_ID = '';
    item.DIVISION_ID = '';
    item.DISTRICT_ID = '';
    item.THANA_ID = '';
    item.PHONE_NO = '';
    item.MOBILE_NO = '';
    item.EMAIL = '';
    // objAddressList.isAdd = false;
    // objAddressList.isOld = true;
    // objAddressList.CloneObj = { ...item.CloneObj };
    console.log("CloneObj = ", objAddressList.CloneObj);
    
   
    // const existingAddress = tableItems.value.find(item => item.ADDRESS_TYPE === objAddressList.ADDRESS_TYPE);
    // if (existingAddress && existingAddress == tableItems.value[editIndex.value]) {
    //         toast.error(`An address of type ${objAddressList.ADDRESS_TYPE} already exists.`);
    //         return;
    //     }

}

const sample_headers = ref<any[]>([{ text: 'Credit Line', value: 'CREDIT_LINE_NM' }]);

let introducers = [
    {
        label: 'Account Holder',
        value: 'Account Holder'
    },

    {
        label: 'Bank Employee with P.A. No',
        value: 'Bank Employee with P.A. No'
    },
    {
        label: 'Peoples Representative',
        value: 'Peoples Representative'
    }
];
let maritals = [
    {
        label: 'Married',
        value: 'Married'
    },

    {
        label: 'Unmarried',
        value: 'Unmarried'
    }
];

let address = [
    // {
    //     label: 'Dhaka,mirpur',
    //     value: 'dhaka,mirpur'
    // },

    // {
    //     label: 'Chittagong,jamalkhan',
    //     value: 'Chittagong,jamalkhan'
    // },
    // {
    //     label: 'Kathmandu, Kalikasthan',
    //     value: 'Kathmandu, Kalikasthan'
    // }
    {
        label: 'Present',
        value: 'Present'
    },
    {
        label: 'Parmanent',
        value: 'Parmanent'
    }
];

let country = [
    {
        label: 'Bangladesh',
        value: 'Bangladesh'
    },

    {
        label: 'Nepal',
        value: 'Nepal'
    },
    {
        label: 'Thailand',
        value: 'Thailand'
    }
];

let division = [
    {
        label: 'Bangladesh',
        value: 'Bangladesh'
    },

    {
        label: 'Nepal',
        value: 'Nepal'
    },
    {
        label: 'Thailand',
        value: 'Thailand'
    }
];


async function test() {

}
async function OnSubmit() {

    
    //console.log(objCusInfo);
    // debugger;

    if (!isFormValid.value) {
    toast.error('Please fill in all required fields.');
    return;
  }

  validateNID();
  if (nidError.value) {
    toast.error(nidError.value);
    return;
  }

    objCusInfo.INTRODUCER = { ...objIntroInfo };
    objCusInfo.ADDRESS = tableItems.value;
    objCusInfo.MAKE_BY = store.getters.getUserId;
    objCusInfo.INTRODUCER.MAKE_BY = store.getters.getUserId;
    console.log('intro: ', objCusInfo);
    console.log(objAddressList.CloneObj);

    for (let element of objCusInfo.ADDRESS) {
        element.COUNTRY_ID = element.COUNTRY
    }
    await customer_service.customer_info_post(objCusInfo).then((res: any) => {
        if (res) {
            console.log('customer post response', res);
            toast.success('successfully inserted data');
        }
    });

    //     await customer_service.introducer_info_post(objIntroInfo).then((res: any) => {

    // if (res) {
    //     console.log('customer post response', res)
    // }
    // });
    
}

async function CountryGet() {
    await customer_service.CountryGet().then((res: any) => {
        CountryList.value = res;
        // console.log(CountryList.value);
    });
}
async function Page_Load() {
    await CountryGet()
};

async function DivisionGet(Country_ID) {
    // console.log(objAddressList.value.COUNTRY);
    await customer_service.DivisionGet(Country_ID).then((res: any) => {
        DivisionList.value = res;
        //console.log(DivisionList.value);
    });



}

async function DistrictGet(Division_Id) {
    await customer_service.DistrictGet(Division_Id).then((res: any) => {
        DistrictList.value = res;
        //console.log(DistrictList.value);
        //console.log(DistrictList);
    });


}

async function ThanaGet(District_Id) {
    await customer_service.ThanaGet(District_Id).then((res: any) => {
        ThanaList.value = res;
        //console.log(ThanaList.value);
        //console.log(ThanaList);
    });

}

async function matchCountry_NM(element) {

    const matchedCountry = CountryList.value.find((item) => item.COUNTRY_ID === element.COUNTRY);
    if (matchedCountry) {
        element.COUNTRY_NM = matchedCountry.COUNTRY_NM;
    }
}


async function matchDivision_NM(element) {
    await customer_service.DivisionGet(element.COUNTRY).then((res: any) => {
        if (res) {
            DivisionList.value = res;
            const matchedDivision = DivisionList.value.find((item) => item.DIVISION_ID === element.DIVISION);
            if (matchedDivision) {
                element.DIVISION_NM = matchedDivision.DIVISION_NM;
            }
        }
    });
    //DivisionList.value = []
    //objAddressList.DIVISION = null as any
}
async function matchDistrict_NM(element) {
    // debugger
    await customer_service.DistrictGet(element.DIVISION).then((res: any) => {
        if (res) {
            DistrictList.value = res;
            const matchedDistrict = DistrictList.value.find((item) => item.DISTRICT_ID === element.DISTRICT);
            if (matchedDistrict) {
                element.DISTRICT_NM = matchedDistrict.DISTRICT_NM;
            }
        }
    });

    //  DistrictList.value = []
    //objAddressList.DISTRICT = null as any
}
async function matchThana_NM(element) {
    // debugger
    await customer_service.ThanaGet(element.DISTRICT).then((res: any) => {
        if (res) {
            ThanaList.value = res;
            const matchedThana = ThanaList.value.find((item) => item.THANA_ID === element.THANA);
            if (matchedThana) {
                element.THANA_NM = matchedThana.THANA_NM;
            }
        }
    });
    // ThanaList.value = []
    //  objAddressList.THANA = null as any


}

async function ByCustomerId(customer_id) {
    await customer_service.CustomerGet(customer_id).then(async (res: any) => {
        if (res) {
            console.log(res);
            objCusInfo.CUSTOMER_ID = res.CUSTOMER_ID;
            objCusInfo.CUSTOMER_NAME = res.CUSTOMER_NAME;
            objCusInfo.FATHER_NAME = res.FATHER_NAME;
            objCusInfo.MOTHER_NAME = res.MOTHER_NAME;
            objCusInfo.GENDER = res.GENDER;
            objCusInfo.DATE_OF_BIRTH = res.DATE_OF_BIRTH;
            objCusInfo.MARITAL_STATUS = res.MARITAL_STATUS;
            objCusInfo.SPOUSE_NAME = res.SPOUSE_NAME;
            objCusInfo.NID = res.NID;

            objCusInfo.CloneObj = { ...res };
            objCusInfo.isAdd = false;
            objCusInfo.isOld = true;
            //console.log(res.INTRODUCER);

            objIntroInfo.INTRODUCER_TYPE = res.INTRODUCER?.INTRODUCER_TYPE;

            objIntroInfo.INTRODUCER_ACC_BRANCH = res.INTRODUCER?.INTRODUCER_ACC_BRANCH;
            objIntroInfo.INTRODUCER_ACC_NO = res.INTRODUCER?.INTRODUCER_ACC_NO;
            objIntroInfo.INTRODUCER_DETAILS = res.INTRODUCER?.INTRODUCER_DETAILS;

            objIntroInfo.CloneObj = { ...res.INTRODUCER };
            objIntroInfo.isAdd = false;
            objIntroInfo.isOld = true;

            for (let element of res.ADDRESS) {

                // debugger;
                console.log('Getting Address');


                await matchCountry_NM(element)
                console.log('Getting Dividion');
                await matchDivision_NM(element)
                console.log('Getting District');
                await matchDistrict_NM(element)
                console.log('Getting Thana');
                await matchThana_NM(element)

                console.log('Address Got successfully');
                element.COUNTRY_ID = element.COUNTRY
                // element.CloneObj = { ...element }
                objAddressList.CloneObj = {...element}
                objAddressList.isAdd = false;
                objAddressList.isOld = true;
                console.log(objAddressList);
                // element.CloneObj.oldValue = { ...element }
                // element.CloneObj.newValue = { ...element }
                // element.isAdd = false
                // element.isOld = true
                // element.isDelete = false
            }

            tableItems.value  = res.ADDRESS;

            // if (element.isOld = true) {
            //     const originalData = tableItems.value[index].CloneObj;
            //     if (originalData) {
            //         tableItems.value[index] = { ...originalData };
            //     }
            // }




            // tableItems.value = res.ADDRESS;

            // objCusInfo.ADDRESS = res.ADDRESS;

            // for (let i of res.ADDRESS) {
            //     debugger
            //     i.CloneObj = { ...i };
            // }


            // tableItems.value.forEach((e) => {
            //     debugger
            //     if (!commonMethod.stringIsEmptyOrNullCheck(e.ADDRESS_ID)) {
            //         e.isAdd = false;
            //         e.isOld = true;
            //     }
            // });
            // console.log('table items on fetch', tableItems.value)



        }
    });

}

async function clear() {
    objAddressList.ADDRESS_TYPE = '';
    objAddressList.ADDRESS = '';
    objAddressList.CITY = '';

    objAddressList.ZIP = '';
    objAddressList.COUNTRY = '';
    objAddressList.DIVISION = '';
    objAddressList.DISTRICT = '';

    objAddressList.THANA = '';
    objAddressList.PHONE_NO = '';
    objAddressList.MOBILE_NO = '';

    objAddressList.EMAIL = '';

}

async function OnDecline() { }
async function OnRefresh() { }
async function OnExit() { }
</script>
<style scoped>
.inward-css {
    max-height: 700px !important;
    max-width: 800px !important;
    margin-left: 100px;
    padding-top: 10px;
    padding-bottom: 40px;
}

.width {
    max-width: 800px;
    margin-left: 100px;
}

.position-css {
    padding-top: 10px;
    padding-bottom: 40px;
}

.middle-position {
    margin-left: 100px;
}

.left-margin {
    margin-left: -30px;
}

.btn {
    text-align: end;
    padding-right: 5%;
}

.table {
    margin-top: 20px;
}

.custprofile_details_header {
    /* display: flex; */
    background-color: #2d4b80;
    color: aliceblue;
    font-weight: bold;
    /* border border-radius: 25px; */
    border-radius: 10px;
    /* height: 12px; */
    /* padding-top: 12px; */
    padding: 1%;
}

.position-css {
    margin-bottom: 0
}
</style>
