package com.safetyplatform.risk_index;

import com.safetyplatform.entity.risk_index.RiskEvaluateResult;
import com.safetyplatform.entity.risk_index.RiskIndexA;

import java.util.Map;

public class RiskIndex {

    private int level;
    private double result;

    public RiskIndex(int level, double result) {
        this.level = level;
        this.result = result;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public double getResult() {
        return result;
    }

    public void setResult(double result) {
        this.result = result;
    }

    public static RiskIndex getRiskIndex(RiskIndexA riskIndexA, Map<Integer,RiskEvaluateResult> d, Map<Integer,RiskEvaluateResult> d2, int e, int industry){

        int level = -1;
        boolean veto = false;
        //不同行业修正系数
        double correctionCoefficient = 1;
        switch(industry)
        {
            case 1 :
                System.out.println("餐饮");
                break;
                //冶金行业修正1.2
            case 7 :
                correctionCoefficient = 1.2;
                break;

            default :
                System.out.println("未知行业");
        }
        double A = 0.05*correctionCoefficient*(riskIndexA.getCoverArea() + riskIndexA.getSaleIncome() + riskIndexA.getStaffNum());
        double B = 0.1*riskIndexA.getMaterialFireDanger();
        double C = 0.1*riskIndexA.getProcessLevel();

        int allHiddenRisk = 0;
        int allCorrectHiddenRisk = 0;
        int hiddenRisk;
        int correctHiddenRisk;
        for (Integer entry : d.keySet()) {
            hiddenRisk = 0;
            correctHiddenRisk = 0;
            if(entry == 1) {

                hiddenRisk = 2 * d.get(1).getResult();
                if (d2.get(1) != null) {
                    correctHiddenRisk = 2 * (d.get(1).getResult() - d2.get(1).getResult());
                } else {
                    correctHiddenRisk = 2 * (d.get(1).getResult());
                }
            }else if(entry == 2) {

                hiddenRisk = 4 * d.get(2).getResult();
                if (d2.get(2) != null) {
                    correctHiddenRisk = 4 * (d.get(2).getResult() - d2.get(2).getResult());
                } else {
                    correctHiddenRisk = 4 * (d.get(2).getResult());
                }
            }
            if(entry == 3) {
                hiddenRisk = 16 * d.get(3).getResult();
                if (d2.get(3) != null) {
                    correctHiddenRisk = 16 * (d.get(3).getResult() - d2.get(3).getResult());
                } else {
                    correctHiddenRisk = 16 * (d.get(3).getResult());
                }
            }else if(entry == 4) {
                hiddenRisk = 32 * d.get(4).getResult();
                if (d2.get(4) != null) {
                    correctHiddenRisk = 32 * (d.get(4).getResult() - d2.get(4).getResult());
                } else {
                    correctHiddenRisk = 32 * (d.get(4).getResult());
                }
            }else if(entry == 5){
                    veto = true;
                        System.out.println("该企业没有此项隐患");
            }
            allHiddenRisk+=hiddenRisk;
            allCorrectHiddenRisk += correctHiddenRisk;
            //System.out.println(entry+" | "+d.get(entry));
        }

        /**
         * 风险分级与评分说明：全风险分级等级从高到底分为4级：
         * 红（80~100分）、橙（60-80分）、黄（30-60分）、蓝（0-30分）
         */
        if (veto){
            level = 4;
        }
        if (allHiddenRisk+allCorrectHiddenRisk >= 80){
             level = 4;

        }else if (allHiddenRisk+allCorrectHiddenRisk < 80&&allHiddenRisk+allCorrectHiddenRisk >= 60)
            level = 3;
        else if (allHiddenRisk+allCorrectHiddenRisk < 60&&allHiddenRisk+allCorrectHiddenRisk >= 30)
            level = 2;
        else if (allHiddenRisk+allCorrectHiddenRisk < 30)
            level = 1;

        /**
         * 关于修正系数说明：1、强制修正类的情形：①有下列情形的直接升一级直至橙色级别：
         * a.发生一般及以下事故的；b.一年内收到行政部门安全处罚的；c.未按时整改或整改不到位的；
         * d.受恶劣自然条件影响的。②有下列情形的直接升一级直至红色级别：a.发生一般及以下事故的；
         * b.一年内两次发生一般及以下事故的；c.一年内两次收到行政部门安全处罚的；d.非法和违法经营的；
         * e.拒不依据整改指令整改和擅自回复生产的；f.被监管行政监管部门挂牌督办的
         */
        return new RiskIndex(level,allCorrectHiddenRisk+allHiddenRisk);
    }
}
