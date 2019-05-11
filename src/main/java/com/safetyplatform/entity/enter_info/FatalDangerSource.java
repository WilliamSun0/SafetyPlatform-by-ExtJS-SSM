package com.safetyplatform.entity.enter_info;


public class FatalDangerSource {

  private long srcId;
  private long enterId;
  private String srcName;
  private long stockNum;
  private long criticalNum;


  public long getSrcId() {
    return srcId;
  }

  public void setSrcId(long srcId) {
    this.srcId = srcId;
  }


  public long getEnterId() {
    return enterId;
  }

  public void setEnterId(long enterId) {
    this.enterId = enterId;
  }


  public String getSrcName() {
    return srcName;
  }

  public void setSrcName(String srcName) {
    this.srcName = srcName;
  }


  public long getStockNum() {
    return stockNum;
  }

  public void setStockNum(long stockNum) {
    this.stockNum = stockNum;
  }


  public long getCriticalNum() {
    return criticalNum;
  }

  public void setCriticalNum(long criticalNum) {
    this.criticalNum = criticalNum;
  }

}
