package com.safetyplatform.entity.enter_info;


public class DangerChemicalTech {

  private long techId;
  private long enterId;
  private String techName;
  private String involvedMaterial;
  private String mainDanger;


  public long getTechId() {
    return techId;
  }

  public void setTechId(long techId) {
    this.techId = techId;
  }


  public long getEnterId() {
    return enterId;
  }

  public void setEnterId(long enterId) {
    this.enterId = enterId;
  }


  public String getTechName() {
    return techName;
  }

  public void setTechName(String techName) {
    this.techName = techName;
  }


  public String getInvolvedMaterial() {
    return involvedMaterial;
  }

  public void setInvolvedMaterial(String involvedMaterial) {
    this.involvedMaterial = involvedMaterial;
  }


  public String getMainDanger() {
    return mainDanger;
  }

  public void setMainDanger(String mainDanger) {
    this.mainDanger = mainDanger;
  }

}
