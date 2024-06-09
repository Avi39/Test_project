import type ModelBase from '@/commonModels/ModelBase';
import type COR_INTRODUCER_INFO from './ICOR_INTRODUCER_INFO'
import type ICOR_INTRODUCER_INFO from './ICOR_INTRODUCER_INFO';
import type { List } from 'lodash';
import type ICOR_ADDRESS_LIST from './ICOR_ADDRESS_LIST';

export default interface ICOR_CUSTOMER_INFO extends ModelBase{
    CUSTOMER_ID?: string;
    CUSTOMER_NAME?: string;
    FATHER_NAME?: string;
    MOTHER_NAME?: string;
    GENDER?: string;
    DATE_OF_BIRTH?: string;
    MARITAL_STATUS?: string;
    SPOUSE_NAME?: string;
    NID?: string;
    MAKE_BY?: string;
    AUTH_STAT_ID?: string;  
    AUTH_1ST_BY?: string;
    AUTH_1ST_DATE?: string;
    AUTH_2ND_BY?: string;
    AUTH_2ND_DATE?: string;
    LAST_ACTION?: string;
    MAKE_DATE?: string;
    INTRODUCER?: ICOR_INTRODUCER_INFO; 
    ADDRESS?: ICOR_ADDRESS_LIST[];
    // ADDRESS?: Array<ICOR_ADDRESS_LIST>
}