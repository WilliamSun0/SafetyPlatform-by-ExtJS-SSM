package com.safetyplatform.entity;

import java.util.Date;

public class RiskEnterGrade {

    private String enterName;

    private String enterIndustry;//所属行业

    private String enterCommunity;//社区

    //private int riskLevel;

    private int riskNum;//隐患数

    //private int majorRiskNum;//重大隐患数

    private int fatalDangerSource;//重大危险源

    private int highRiskEnterprise;//高危企业

    private int dangerChemicalTech;

    //private int isExecute;//已经执行？

    private int restrictedSpace;

    private int dustExplosion;

//    private int evaluationNum;
//
//    private Date lastEvaluationTime;//最后评估时间


    public String getEnterName() {
        return enterName;
    }

    public void setEnterName(String enterName) {
        this.enterName = enterName;
    }

    public String getEnterIndustry() {
        return enterIndustry;
    }

    public void setEnterIndustry(String enterIndustry) {
        this.enterIndustry = enterIndustry;
    }

    public String getEnterCommunity() {
        return enterCommunity;
    }

    public void setEnterCommunity(String enterCommunity) {
        this.enterCommunity = enterCommunity;
    }

    public int getRiskNum() {
        return riskNum;
    }

    public void setRiskNum(int riskNum) {
        this.riskNum = riskNum;
    }

    public int getFatalDangerSource() {
        return fatalDangerSource;
    }

    public void setFatalDangerSource(int fatalDangerSource) {
        this.fatalDangerSource = fatalDangerSource;
    }

    public int getHighRiskEnterprise() {
        return highRiskEnterprise;
    }

    public void setHighRiskEnterprise(int highRiskEnterprise) {
        this.highRiskEnterprise = highRiskEnterprise;
    }

    public int getDangerChemicalTech() {
        return dangerChemicalTech;
    }

    public void setDangerChemicalTech(int dangerChemicalTech) {
        this.dangerChemicalTech = dangerChemicalTech;
    }

    public int getRestrictedSpace() {
        return restrictedSpace;
    }

    public void setRestrictedSpace(int restrictedSpace) {
        this.restrictedSpace = restrictedSpace;
    }

    public int getDustExplosion() {
        return dustExplosion;
    }

    public void setDustExplosion(int dustExplosion) {
        this.dustExplosion = dustExplosion;
    }
}
