package com.safetyplatform.entity;


import java.sql.Timestamp;
import java.sql.Date;

public class EnterpriseOtherInfo {


  private long enterId;
  private String creditCode;
  private String mailAddr;
  private String postalCode;
  private Date buildTime;
  private long enterSize;
  private long coverArea;
  private long staffNum;
  private long assetsTotal;
  private long registerCapital;
  private long saleIncome;
  private long yearRevenue;
  private long economicType;
 private String legalPerson;
//  private String workTitle;
//  private long officeCall;
//  private long legalPersonMobile;


//  private long belongIndustry;
//  private String contactPerson;
//  private long contactMobile;
//  private String belongGroup;
//  private String safeManageDept;
//  private String mainProcess;
//  private long processLevel;
//  private String mainMaterial;
//  private boolean proHarmTest;
//  private String proHarm;
//  private boolean bodyHealth;

  private String enterName;
  private double longitude;
  private double latitude;
  private long fatalDangerSource;
  private long highRiskEnterprise;
  private long dangerChemicalTech;
  private String restrictedSpace;
  private String dustExplosion;

  private String safeStandLevel;//安全标准级别

  private String znid;//所属区域
  private int typeId;//所属行业

    private String planeImg;
    private String fireImg;
    private String facadeImg;//门面图像

    public EnterpriseOtherInfo() {
    }


    public long getEnterId() {
        return enterId;
    }

    public void setEnterId(long enterId) {
        this.enterId = enterId;
    }

    public String getCreditCode() {
        return creditCode;
    }

    public void setCreditCode(String creditCode) {
        this.creditCode = creditCode;
    }

    public String getMailAddr() {
        return mailAddr;
    }

    public void setMailAddr(String mailAddr) {
        this.mailAddr = mailAddr;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public Date getBuildTime() {
        return buildTime;
    }

    public void setBuildTime(Date buildTime) {
        this.buildTime = buildTime;
    }

    public long getEnterSize() {
        return enterSize;
    }

    public void setEnterSize(long enterSize) {
        this.enterSize = enterSize;
    }

    public long getCoverArea() {
        return coverArea;
    }

    public void setCoverArea(long coverArea) {
        this.coverArea = coverArea;
    }

    public long getStaffNum() {
        return staffNum;
    }

    public void setStaffNum(long staffNum) {
        this.staffNum = staffNum;
    }

    public long getAssetsTotal() {
        return assetsTotal;
    }

    public void setAssetsTotal(long assetsTotal) {
        this.assetsTotal = assetsTotal;
    }

    public long getRegisterCapital() {
        return registerCapital;
    }

    public void setRegisterCapital(long registerCapital) {
        this.registerCapital = registerCapital;
    }

    public long getSaleIncome() {
        return saleIncome;
    }

    public void setSaleIncome(long saleIncome) {
        this.saleIncome = saleIncome;
    }

    public long getYearRevenue() {
        return yearRevenue;
    }

    public void setYearRevenue(long yearRevenue) {
        this.yearRevenue = yearRevenue;
    }

    public long getEconomicType() {
        return economicType;
    }

    public void setEconomicType(long economicType) {
        this.economicType = economicType;
    }

    public String getLegalPerson() {
        return legalPerson;
    }

    public void setLegalPerson(String legalPerson) {
        this.legalPerson = legalPerson;
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

    public String getSafeStandLevel() {
        return safeStandLevel;
    }

    public void setSafeStandLevel(String safeStandLevel) {
        this.safeStandLevel = safeStandLevel;
    }

    public String getZnid() {
        return znid;
    }

    public void setZnid(String znid) {
        this.znid = znid;
    }

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }

    public String getPlaneImg() {
        return planeImg;
    }

    public void setPlaneImg(String planeImg) {
        this.planeImg = planeImg;
    }

    public String getFireImg() {
        return fireImg;
    }

    public void setFireImg(String fireImg) {
        this.fireImg = fireImg;
    }

    public String getFacadeImg() {
        return facadeImg;
    }

    public void setFacadeImg(String facadeImg) {
        this.facadeImg = facadeImg;
    }
}
