import ModelBase from '@/commonModels/ModelBase';
import ICOR_BEFT_TRANS_ADR from './ICOR_BEFT_TRANS_ADR';

export default interface ICOR_BEFT_TRANS_REG extends ModelBase {
  EFT_REG_SL?: number;
  EFT_REG_DT?: string;
  BRANCH_ID?: string;
  BRANCH_NM?: string;
  EFFECTIVE_ENTRY_DT?: string;
  CPS_RUN_ID?: string;
  DISCRETIONARY_DATA?: string;
  EFT_TRACE_NO?: string;
  ORGN_TRACE_NO?: string;
  TRANS_STATUS?: number;
  TRANS_TYPE?: string;
  ENTRY_CLASS_CODE?: string;
  EFT_DR_CR?: string;
  ORGN_AC_TYPE?: string;
  ORGN_AC_NO?: string;
  ORGN_ROUT_NO?: string;
  ORGN_CHK_DGT?: string;
  ORGN_BRANCH_NAME?: string;
  RSPD_ROUT_NO?: string;
  RSPD_CHK_DGT?: string;
  RSPD_BRANCH_NAME?: string;
  TRANS_CODE?: number;
  EFT_AMOUNT?: number;
  RSPD_AC_NO?: string;
  RECEIVER_ID?: string;
  RECEIVER_NAME?: string;
  INDIVIDUALID?: string;
  RECEIVINGCOMPANYID?: string;
  COMPANY_ID?: string;
  COMPANY_NAME?: string;
  COMPANY_ENTRY_DES?: string;
  COMPANY_DESC_DT?: string;
  IDNUMBER?: string;
  BEFTNDATA?: string;
  BEFTN_RT?: string;
  ADVICE_RT?: string;
  EFT_FILEID?: string;
  EFT_FILENAME?: string;
  SEQNUM?: number;
  BEFTNID?: string;
  COMPANY_DESC_DATA?: string;
  ADR_INDICATOR?: number;
  ADRCOUNT?: number;
  EFT_EDRID?: string;
  BATCH_NO?: string;
  RETURN_AMOUNT?: number;
  RETURN_FLAG?: number;
  RETURN_ID?: string;
  RETURN_REMARKS?: string;
  NOC?: number;
  CORRECTED_DATA?: string;
  REF_REG_SL?: number;
  CHANGECODE?: string;
  ITEM_TYPE_IND?: string;
  ENTRYADDENDACOUNT?: string;
  REMARKS?: string;
  EFT_ORGN_RSPD_FLAG?: string;
  ACTUAL_RSPD_AC_NO?: string;
  AUTH_STATUS_ID?: string;
  MAKE_BY?: string;
  MAKE_DT?: string;
  AUTH_1ST_BY?: string;
  AUTH_1ST_DT?: string;
  AUTH_2ND_BY?: string;
  AUTH_2ND_DT?: string;
  LAST_ACTION?: string;
  TRACKING_ID?: string;
  NFT_LOG_MSG?: string;
  INDIVIDUAL_NAME?: string;
  RECEIVINGCOMPANY?: string;
  BU_BATCH_NO?: number;
  BU_TRACER_NO?: number;
  ADDENDAINFO?: string;
  DISHONRETREASON?: string;
  DISHONRETREMARKS?: string;
  BU_REVERSE_BATCH_NO?: number;
  BU_REVERSE_TRACER_NO?: number;
  CONDISHONRETREASON?: string;
  CONDISHONRETREMARKS?: string;
  SETTLEMENTJDATE?: string;
  CURRENCY_ID?: string;
  EXCHANGE_RATE_ID?: string;
  EXCHANGE_RATE?: number;
  EFT_AMOUNT_LCY?: number;
  SESSION_ID?: string;
  CHEQUE_NO?: string;
  CHEQUE_DATE?: string;
  WITHOUT_CHEQUE_FLAG?: boolean;
  EXCEPTION?: string;
  pERRORCODE?: number;
  pERRORMSG?: string;
  ROWID?: string;
  // LIST_COR_BEFT_TRANS_UPD? : List<any>;
  listCOR_BEFT_TRANS_ADR? : Array<ICOR_BEFT_TRANS_ADR>;
  COR_BEFT_TRANS_ADR? : {};
  // LIST_SMS_NFT_AUTHORZ_LOG? : List<Object>;
  SERVICE_CODE?: number;
  UNDER_CLEARING?: string;
  CREATION_DATE?: string;
  CREATION_TIME?: string;
  DATA_SOURCE?: string;
  TRANS_TYPE_ID?: string;
  TRANS_TYPE_DESC?: string;
  ITEM_NO?: number;
  FILE_ID?: string;
  FILE_LIST?: string;
  FILE_NAME_WITHOUT_EXT?: string;
  FILE_NAME?: string;
  FILE_EXT?: string;
  TRANS_DATE?: string;
  RECEIVER_ACC_NO?: string;
  HONOREDRETURNED?: any;
  DRHONOREDCOUNT?: string;
  DRHONAMT?: string;
  CRHONCNT?: string;
  CRHONAMT?: string;
  DRRETCNT?: string;
  DRRETAMT?: string;
  CRRETCNT?: string;
  CRRETAMT?: string;
  CRTOTCNT?: any;
  CRTOTAMT?: any;
  DRTOTCNT?: any;
  DRTOTAMT?: any;
  CURRENT_BL?: number;
  ACCOUNT_STATUS?: string;
  ACCOUNT_TITLE?: string;
  FUNCTION_TYPE?: string;
  FUNCTION_ID?: number;
  objUpdateCOR_BEFT_TRANS_REG?: {};
  RSPD_BANK_ID?: string;
  RSPD_BANK_NM?: string;
  CHK_RSPD_MULT_ENTY?: boolean;
  CHK_ADD_CONTROL?: boolean;
  CHK_ORG_MULT_ENTY?: boolean;
  LOCAL_CURR?: string;
  List_COR_BEFT_TRANS_REG?: Array<ICOR_BEFT_TRANS_REG>;
}