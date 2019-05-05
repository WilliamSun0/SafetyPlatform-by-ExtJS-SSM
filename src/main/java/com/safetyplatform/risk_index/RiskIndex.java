package com.safetyplatform.risk_index;

import com.safetyplatform.entity.risk_index.RiskIndexA;

import java.util.Map;

public class RiskIndex {
    public static int getRiskIndex(RiskIndexA riskIndexA, Map<Integer,Integer> d, Map<Integer,Integer> d2, int e, int industry){

        double correctionCoefficient = 1;
        switch(industry)
        {
            case 1 :
                System.out.println("餐饮");
                break;
            case 7 :
                correctionCoefficient = 1.2;
                break;

            default :
                System.out.println("未知行业");
        }
        double A = 5*correctionCoefficient*(riskIndexA.getCoverArea() + riskIndexA.getSaleIncome() + riskIndexA.getStaffNum());
int B = riskIndexA.getMaterialFireDanger();
int C = riskIndexA.getProcessLevel();

        return 1;
    }
}
