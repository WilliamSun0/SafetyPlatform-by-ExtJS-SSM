package com.safetyplatform.service.impl;

import com.safetyplatform.dao.RegionTreeDao;
import com.safetyplatform.dao.RiskEnterGradeDao;
import com.safetyplatform.entity.EchartsData;
import com.safetyplatform.entity.EnterBaseInfo;
import com.safetyplatform.service.RegionRiskChartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegionRiskChartServiceImpl implements RegionRiskChartService {

    @Autowired
    RegionTreeDao regionTreeDao;

    @Autowired
    RiskEnterGradeDao riskEnterGradeDao;

//    public List<EchartsData> getRegionRiskObjectProp(String regionId){
//
//        int allRiskNum = 0;
//
//        List<EnterBaseInfo> enterBaseInfos = regionTreeDao.getEnterListByZoneId(regionId);
//
//        for (EnterBaseInfo e:enterBaseInfos) {
//
//            //每个企业的隐患总数
//            int oneRiskNum = riskEnterGradeDao.queryEnterRiskNumById(e.getEnterId());
//            allRiskNum += oneRiskNum;
//        }
//
//    }
}
