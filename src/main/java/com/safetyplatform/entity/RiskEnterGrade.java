package com.safetyplatform.entity;

import java.util.Date;

public class RiskEnterGrade {

    private String enterName;

    private String enterIndustry;//所属行业

    private int enterCommunity;//社区

    private int riskLevel;

    private int potentialRiskNum;//潜在风险数

    private int majorRiskNum;//重大隐患数

    private int fatalDangerSource;//重大危险源

    private int highRiskEnterprise;//高危企业

    private int dangerChemicalTech;

    private int isExecute;//已经执行？

    private int restrictedSpace;

    private  int dustExplosion;

    private int evaluationNum;

    private Date lastEvaluationTime;//最后评估时间

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

    public int getEnterCommunity() {
        return enterCommunity;
    }

    public void setEnterCommunity(int enterCommunity) {
        this.enterCommunity = enterCommunity;
    }

    public int getRiskLevel() {
        return riskLevel;
    }

    public void setRiskLevel(int riskLevel) {
        this.riskLevel = riskLevel;
    }

    public int getPotentialRiskNum() {
        return potentialRiskNum;
    }

    public void setPotentialRiskNum(int potentialRiskNum) {
        this.potentialRiskNum = potentialRiskNum;
    }

    public int getMajorRiskNum() {
        return majorRiskNum;
    }

    public void setMajorRiskNum(int majorRiskNum) {
        this.majorRiskNum = majorRiskNum;
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

    public int getIsExecute() {
        return isExecute;
    }

    public void setIsExecute(int isExecute) {
        this.isExecute = isExecute;
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

    public int getEvaluationNum() {
        return evaluationNum;
    }

    public void setEvaluationNum(int evaluationNum) {
        this.evaluationNum = evaluationNum;
    }

    public Date getLastEvaluationTime() {
        return lastEvaluationTime;
    }

    public void setLastEvaluationTime(Date lastEvaluationTime) {
        this.lastEvaluationTime = lastEvaluationTime;
    }
}
