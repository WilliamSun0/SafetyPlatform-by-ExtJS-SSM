package com.safetyplatform.entity.risk_index;

//查询企业人数，营业额，占地面积求得风险值中间类
public class RiskIndexA {

    private int staffNum;

    private int saleIncome;

    private int coverArea;

    private int materialFireDanger;

    private int processLevel;

    public int getStaffNum() {
        return staffNum;
    }

    public void setStaffNum(int staffNum) {
        this.staffNum = staffNum;
    }

    public int getSaleIncome() {
        return saleIncome;
    }

    public void setSaleIncome(int saleIncome) {
        this.saleIncome = saleIncome;
    }

    public int getCoverArea() {
        return coverArea;
    }

    public void setCoverArea(int coverArea) {
        this.coverArea = coverArea;
    }

    public int getMaterialFireDanger() {
        return materialFireDanger;
    }

    public void setMaterialFireDanger(int materialFireDanger) {
        this.materialFireDanger = materialFireDanger;
    }

    public int getProcessLevel() {
        return processLevel;
    }

    public void setProcessLevel(int processLevel) {
        this.processLevel = processLevel;
    }

}
