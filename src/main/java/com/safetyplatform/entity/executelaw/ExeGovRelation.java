package com.safetyplatform.entity.executelaw;


public class ExeGovRelation {

  private long rid;
  private long exeId;
  private long govDepartId;
  private String govDepartName;

  public String getGovDepartName() {
    return govDepartName;
  }

  public void setGovDepartName(String govDepartName) {
    this.govDepartName = govDepartName;
  }

  public long getRid() {
    return rid;
  }

  public void setRid(long rid) {
    this.rid = rid;
  }


  public long getExeId() {
    return exeId;
  }

  public void setExeId(long exeId) {
    this.exeId = exeId;
  }


  public long getGovDepartId() {
    return govDepartId;
  }

  public void setGovDepartId(long govDepartId) {
    this.govDepartId = govDepartId;
  }

}
