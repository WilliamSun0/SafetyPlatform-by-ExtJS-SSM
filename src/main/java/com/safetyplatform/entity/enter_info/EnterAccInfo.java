package com.safetyplatform.entity.enter_info;


public class EnterAccInfo {

  private long accId;
  private long enterId;
  private long accType;
  private java.sql.Date accTime;


  public long getAccId() {
    return accId;
  }

  public void setAccId(long accId) {
    this.accId = accId;
  }


  public long getEnterId() {
    return enterId;
  }

  public void setEnterId(long enterId) {
    this.enterId = enterId;
  }


  public long getAccType() {
    return accType;
  }

  public void setAccType(long accType) {
    this.accType = accType;
  }


  public java.sql.Date getAccTime() {
    return accTime;
  }

  public void setAccTime(java.sql.Date accTime) {
    this.accTime = accTime;
  }

}
