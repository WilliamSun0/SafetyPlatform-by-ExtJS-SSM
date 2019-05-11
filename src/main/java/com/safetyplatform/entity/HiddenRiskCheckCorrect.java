package com.safetyplatform.entity;

import java.sql.Date;
import java.util.List;

public class HiddenRiskCheckCorrect {


    private int checkMan;//节点id
    private int correctMan;//节点名称
    private String partObject;//隐患名
    private String mainType;//节点点击的请求路径
    private String riskDescription;//节点的图标，folder还是file
    private String checkVoucher;//父级菜单
    private String correctVoucher;//区划等级
    private String dangerLevel;//父级菜单
    private String dangerLevelNum;//区划等级
    private int uid;
    private int riskId;
    private String checkImg;
    private String correctImg;
    private boolean status;
    private Date checkTime;
    private Date correctTime;

    public String getCorrectImg() {
        return correctImg;
    }

    public void setCorrectImg(String correctImg) {
        this.correctImg = correctImg;
    }

    public String getCheckImg() {
        return checkImg;
    }

    public void setCheckImg(String checkImg) {
        this.checkImg = checkImg;
    }

    public int getRiskId() {
        return riskId;
    }

    public void setRiskId(int riskId) {
        this.riskId = riskId;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public int getCheckMan() {
        return checkMan;
    }

    public void setCheckMan(int checkMan) {
        this.checkMan = checkMan;
    }

    public int getCorrectMan() {
        return correctMan;
    }

    public void setCorrectMan(int correctMan) {
        this.correctMan = correctMan;
    }

    public String getPartObject() {
        return partObject;
    }

    public void setPartObject(String partObject) {
        this.partObject = partObject;
    }

    public String getMainType() {
        return mainType;
    }

    public void setMainType(String mainType) {
        this.mainType = mainType;
    }

    public String getRiskDescription() {
        return riskDescription;
    }

    public void setRiskDescription(String riskDescription) {
        this.riskDescription = riskDescription;
    }

    public String getCheckVoucher() {
        return checkVoucher;
    }

    public void setCheckVoucher(String checkVoucher) {
        this.checkVoucher = checkVoucher;
    }

    public String getCorrectVoucher() {
        return correctVoucher;
    }

    public void setCorrectVoucher(String correctVoucher) {
        this.correctVoucher = correctVoucher;
    }

    public String getDangerLevel() {
        return dangerLevel;
    }

    public void setDangerLevel(String dangerLevel) {
        this.dangerLevel = dangerLevel;
    }

    public String getDangerLevelNum() {
        return dangerLevelNum;
    }

    public void setDangerLevelNum(String dangerLevelNum) {
        this.dangerLevelNum = dangerLevelNum;
    }


    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Date getCheckTime() {
        return checkTime;
    }

    public void setCheckTime(Date checkTime) {
        this.checkTime = checkTime;
    }

    public Date getCorrectTime() {
        return correctTime;
    }

    public void setCorrectTime(Date correctTime) {
        this.correctTime = correctTime;
    }
}
