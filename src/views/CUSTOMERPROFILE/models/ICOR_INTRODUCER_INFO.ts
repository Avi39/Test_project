import type ModelBase from '@/commonModels/ModelBase';

export default interface ICOR_INTRODUCER_INFO extends ModelBase{
    INTRODUCER_TYPE?: string;
    INTRODUCER_ACC_BRANCH?: string;
    INTRODUCER_ACC_NO?: string;
    INTRODUCER_DETAILS?: string;
    INTRODUCER_ID?: string;
    CUSTOMER_ID?: string;
    MAKE_BY?: string;
    AUTH_STAT_ID?: string;
    AUTH_1ST_BY?: string;
    AUTH_1ST_DATE?: string;
    AUTH_2ND_BY?: string;
    AUTH_2ND_DATE?: string;
    LAST_ACTION?: string;
    MAKE_DATE?: string;
}