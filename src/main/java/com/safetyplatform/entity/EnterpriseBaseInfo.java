package com.safetyplatform.entity;


public class EnterpriseBaseInfo {

  private long enterId;
  private String govId;
  private long thirdpartyId;
  private String enterName;
  private double longitude;
  private double latitude;
  private long fatalDangerSource;
  private long highRiskEnterprise;
  private long dangerChemicalTech;
  private String restrictedSpace;
  private String dustExplosion;

  public EnterpriseBaseInfo() {
  }

  public long getEnterId() {
    return enterId;
  }

  public void setEnterId(long enterId) {
    this.enterId = enterId;
  }


  public String getGovId() {
    return govId;
  }

  public void setGovId(String govId) {
    this.govId = govId;
  }


  public long getThirdpartyId() {
    return thirdpartyId;
  }

  public void setThirdpartyId(long thirdpartyId) {
    this.thirdpartyId = thirdpartyId;
  }

  public String getEnterName() {
    return enterName;
  }

  public void setEnterName(String enterName) {
    this.enterName = enterName;
  }

  public double getLongitude() {
    return longitude;
  }

  public void setLongitude(double longitude) {
    this.longitude = longitude;
  }


  public double getLatitude() {
    return latitude;
  }

  public void setLatitude(double latitude) {
    this.latitude = latitude;
  }


  public long getFatalDangerSource() {
    return fatalDangerSource;
  }

  public void setFatalDangerSource(long fatalDangerSource) {
    this.fatalDangerSource = fatalDangerSource;
  }


  public long getHighRiskEnterprise() {
    return highRiskEnterprise;
  }

  public void setHighRiskEnterprise(long highRiskEnterprise) {
    this.highRiskEnterprise = highRiskEnterprise;
  }


  public long getDangerChemicalTech() {
    return dangerChemicalTech;
  }

  public void setDangerChemicalTech(long dangerChemicalTech) {
    this.dangerChemicalTech = dangerChemicalTech;
  }


  public String getRestrictedSpace() {
    return restrictedSpace;
  }

  public void setRestrictedSpace(String restrictedSpace) {
    this.restrictedSpace = restrictedSpace;
  }

  public String getDustExplosion() {
    return dustExplosion;
  }

  public void setDustExplosion(String dustExplosion) {
    this.dustExplosion = dustExplosion;
  }
}
