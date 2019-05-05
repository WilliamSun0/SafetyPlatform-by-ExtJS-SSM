package com.safetyplatform.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.safetyplatform.dao.EnterInfoDao;
import com.safetyplatform.dao.RiskEnterGradeDao;
import com.safetyplatform.entity.enter_info.EnterpriseOtherInfo;
import com.safetyplatform.entity.risk_index.RiskIndexA;
import com.safetyplatform.risk_index.RiskIndex;
import com.safetyplatform.service.RiskEnterListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class RiskEnterListServiceImpl implements RiskEnterListService {

    @Autowired
    private RiskEnterGradeDao riskEnterGradeDao;

    @Autowired
    private EnterInfoDao enterInfoDao;

    public JSONObject getRiskEnterList() {
        JSONObject jsonObject = new JSONObject();

        Long[] allEnterId = riskEnterGradeDao.queryAllEnterId();


        for (long enterId:allEnterId) {

            EnterpriseOtherInfo enterpriseOtherInfo = enterInfoDao.getEnterInfo(enterId);
            Map<Integer,Integer> d = riskEnterGradeDao.queryEnterHiddenRiskNum(enterId);
            Map<Integer,Integer> d2 = riskEnterGradeDao.queryEHRNoCorrectNum(enterId);
            int e = riskEnterGradeDao.queryEnterAccidentList(enterId);

            RiskIndexA riskIndexA = new RiskIndexA();
            riskIndexA.setCoverArea((int)enterpriseOtherInfo.getCoverArea());
            riskIndexA.setMaterialFireDanger(enterpriseOtherInfo.getMaterialFireDanger());
            riskIndexA.setProcessLevel((int)enterpriseOtherInfo.getProcessLevel());
            riskIndexA.setSaleIncome((int)enterpriseOtherInfo.getSaleIncome());
            riskIndexA.setStaffNum((int)enterpriseOtherInfo.getStaffNum());

            RiskIndex.getRiskIndex(riskIndexA,d,d2,e,enterpriseOtherInfo.getTypeId());
        }


        jsonObject.put("data",riskEnterGradeDao.queryAllEnterRisk());

        return jsonObject;
    }
}
