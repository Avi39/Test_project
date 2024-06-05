import type ModelBase from '@/commonModels/ModelBase';

export default interface ICOR_ADDRESS_LIST extends ModelBase{
    ADDRESS_TYPE?: string;
    ADDRESS ?: string;
    CITY ?: string;
    ZIP ?: string;
    COUNTRY ?: string;
    DIVISION ?: string;
    DISTRICT ?: string;
    THANA ?: string;
    PHONE_NO ?: string;
    MOBILE_NO ?: string;
    EMAIL ?: string;
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