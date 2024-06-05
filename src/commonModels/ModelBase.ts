export default interface ModelBase{
      CloneObj?:object;
      isAdd?:boolean;
      isDelete?:boolean;
      isOld?:boolean;
      CreateByLoginId?:String;
      MakeByLoginId?:String;
      AuthByLoginId?:String;
      IsRequestSuccess ?: boolean;
      ERROR_CODE?:String;
      ERROR_MSG?:String;
      ROW_ID?:String;
      NFT_LOG_MSG?:String;
}