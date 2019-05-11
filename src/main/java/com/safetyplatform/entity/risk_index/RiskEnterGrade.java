package com.safetyplatform.entity.risk_index;

import java.util.Date;

public class RiskEnterGrade {

    private long enterId;

    private String enterName;
    private int enterIndustryId;

    private String enterIndustry;//所属行业

    private String enterCommunityUrl;

    private String enterCommunity;//社区

    private int riskLevel;//风险级别

    private int riskNum;//隐患数

    private int majorRiskNum;//重大隐患数

    private boolean fatalDangerSource;//重大危险源

    private boolean highRiskEnterprise;//高危企业

    private boolean dangerChemicalTech;//危险化学工艺

    private boolean isExecute;//已经执行？

    private String restrictedSpace;

    private String dustExplosion;

    private int evaluationNum;

    private java.sql.Date lastEvaluationTime;//最后评估时间


    public RiskEnterGrade() {
    }

    public long getEnterId() {
        return enterId;
    }

    public void setEnterId(long enterId) {
        this.enterId = enterId;
    }

    public String getEnterName() {
        return enterName;
    }

    public void setEnterName(String enterName) {
        this.enterName = enterName;
    }

    public int getEnterIndustryId() {
        return enterIndustryId;
    }

    public void setEnterIndustryId(int enterIndustryId) {
        this.enterIndustryId = enterIndustryId;
    }

    public String getEnterIndustry() {
        return enterIndustry;
    }

    public void setEnterIndustry(String enterIndustry) {
        this.enterIndustry = enterIndustry;
    }

    public String getEnterCommunityUrl() {
        return enterCommunityUrl;
    }

    public void setEnterCommunityUrl(String enterCommunityUrl) {
        this.enterCommunityUrl = enterCommunityUrl;
    }

    public String getEnterCommunity() {
        return enterCommunity;
    }

    public void setEnterCommunity(String enterCommunity) {
        this.enterCommunity = enterCommunity;
    }

    public int getRiskLevel() {
        return riskLevel;
    }

    public void setRiskLevel(int riskLevel) {
        this.riskLevel = riskLevel;
    }

    public int getRiskNum() {
        return riskNum;
    }

    public void setRiskNum(int riskNum) {
        this.riskNum = riskNum;
    }

    public int getMajorRiskNum() {
        return majorRiskNum;
    }

    public void setMajorRiskNum(int majorRiskNum) {
        this.majorRiskNum = majorRiskNum;
    }

    public boolean isFatalDangerSource() {
        return fatalDangerSource;
    }

    public void setFatalDangerSource(boolean fatalDangerSource) {
        this.fatalDangerSource = fatalDangerSource;
    }

//    public boolean isHighRiskEnterprise() {
//        return highRiskEnterprise;
//    }
//
//    public void setHighRiskEnterprise(boolean highRiskEnterprise) {
//        this.highRiskEnterprise = highRiskEnterprise;
//    }

    public boolean isDangerChemicalTech() {
        return dangerChemicalTech;
    }

    public void setDangerChemicalTech(boolean dangerChemicalTech) {
        this.dangerChemicalTech = dangerChemicalTech;
    }

    public boolean isExecute() {
        return isExecute;
    }

    public void setExecute(boolean execute) {
        isExecute = execute;
    }



    public int getEvaluationNum() {
        return evaluationNum;
    }

    public void setEvaluationNum(int evaluationNum) {
        this.evaluationNum = evaluationNum;
    }

    public java.sql.Date getLastEvaluationTime() {
        return lastEvaluationTime;
    }

    public void setLastEvaluationTime(java.sql.Date lastEvaluationTime) {
        this.lastEvaluationTime = lastEvaluationTime;
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
