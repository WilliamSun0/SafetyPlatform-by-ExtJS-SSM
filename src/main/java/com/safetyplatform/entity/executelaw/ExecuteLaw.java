package com.safetyplatform.entity.executelaw;


import java.sql.Date;

public class ExecuteLaw {

  private int exeId;
  private java.sql.Date exeTime;
  private String exeRemark;
  private boolean exeResult;

  private int enterId;
  private int exeType;

  public ExecuteLaw() {
  }

  public Date getExeTime() {
    return exeTime;
  }

  public void setExeTime(Date exeTime) {
    this.exeTime = exeTime;
  }

  public boolean isExeResult() {
    return exeResult;
  }

  public void setExeResult(boolean exeResult) {
    this.exeResult = exeResult;
  }

  public int getExeId() {
    return exeId;
  }

  public void setExeId(int exeId) {
    this.exeId = exeId;
  }

  public String getExeRemark() {
    return exeRemark;
  }

  public void setExeRemark(String exeRemark) {
    this.exeRemark = exeRemark;
  }

  public int getEnterId() {
    return enterId;
  }

  public void setEnterId(int enterId) {
    this.enterId = enterId;
  }

  public int getExeType() {
    return exeType;
  }

  public void setExeType(int exeType) {
    this.exeType = exeType;
  }
}
