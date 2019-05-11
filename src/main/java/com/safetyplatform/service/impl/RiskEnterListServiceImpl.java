package com.safetyplatform.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.safetyplatform.dao.*;
import com.safetyplatform.entity.enter_info.EnterpriseOtherInfo;
import com.safetyplatform.entity.executelaw.ExecuteLaw;
import com.safetyplatform.entity.risk_index.RiskEnterGrade;
import com.safetyplatform.entity.risk_index.RiskEvaluateResult;
import com.safetyplatform.entity.risk_index.RiskIndexA;
import com.safetyplatform.risk_index.RiskIndex;
import com.safetyplatform.service.RiskEnterListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RiskEnterListServiceImpl implements RiskEnterListService {

    @Autowired
    private RiskEnterGradeDao riskEnterGradeDao;

    @Autowired
    private HRLevelNumDao hrLevelNumDao;

    @Autowired
    private EnterFatalSafeInfoDao enterFatalSafeInfoDao;

    @Autowired
    private EnterOtherInfoDao enterOtherInfoDao;

    @Autowired
    private ExecuteLawDao executeLawDao;

    public JSONObject getRiskEnterList() {
        JSONObject jsonObject = new JSONObject();

        List<Long> allEnterId = riskEnterGradeDao.queryAllEnterId();

        //todo 这里因该按账号单位所拥有的权限查询企业
        List<RiskEnterGrade> riskEnterGrades = riskEnterGradeDao.queryAllEnterRisk();

        for (RiskEnterGrade riskEnterGrade:riskEnterGrades) {

            long enterId = riskEnterGrade.getEnterId();
            EnterpriseOtherInfo enterpriseOtherInfo = enterOtherInfoDao.getEnterInfo(enterId);
            Map<Integer,RiskEvaluateResult> d2 = hrLevelNumDao.queryEHRNoCorrectNum(enterId);

            Map<Integer,RiskEvaluateResult> d = hrLevelNumDao.queryEnterHiddenRiskNum(enterId);
//            Map<Integer,Integer> d2 = new HashMap<Integer, Integer>();
//            d2.put(1,1);
            int e = riskEnterGradeDao.queryEnterMaxAccident(enterId);

            RiskIndexA riskIndexA = new RiskIndexA();
            riskIndexA.setCoverArea((int)enterpriseOtherInfo.getCoverArea());
            riskIndexA.setMaterialFireDanger(enterpriseOtherInfo.getMaterialFireDanger());
            riskIndexA.setProcessLevel((int)enterpriseOtherInfo.getProcessLevel());
            riskIndexA.setSaleIncome((int)enterpriseOtherInfo.getSaleIncome());
            riskIndexA.setStaffNum((int)enterpriseOtherInfo.getStaffNum());

            RiskIndex riskIndex = RiskIndex.getRiskIndex(riskIndexA,d,d2,e,enterpriseOtherInfo.getTypeId());

            riskEnterGrade.setRiskLevel(riskIndex.getLevel());
            //riskEnterGrade.setRiskNum();
            //隐患数，zhonda以幻术，是否一直发
            riskEnterGrade.setRiskNum(riskEnterGradeDao.queryEnterRiskNumById(enterId));
            riskEnterGrade.setMajorRiskNum(riskEnterGradeDao.queryEnterFatalRiskNumById(enterId));
            riskEnterGrade.setLastEvaluationTime(new Date(new java.util.Date().getTime()));
            for (ExecuteLaw executeLaw:executeLawDao.getEnterExecuteLaw(enterId)) {
                Date exeTime = executeLaw.getExeTime();
                if (exeTime.getTime() > new java.util.Date().getTime()){
                    riskEnterGrade.setExecute(true);
                    break;
                }
            }
            if (!enterFatalSafeInfoDao.getEnterDCTList(enterId).isEmpty() ){
                riskEnterGrade.setDangerChemicalTech(true);
            }
            if (!enterFatalSafeInfoDao.getEnterFDSList(enterId).isEmpty()){
                riskEnterGrade.setFatalDangerSource(true);
            }

            if (!enterpriseOtherInfo.getDustExplosion().isEmpty())
riskEnterGrade.setDustExplosion("1");
//            if (!enterpriseOtherInfo.getRestrictedSpace().isEmpty())
//                riskEnterGrade.setRestrictedSpace("1");
        }


        jsonObject.put("data",riskEnterGrades);

        return jsonObject;
    }
}
