package com.safetyplatform.service.impl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.safetyplatform.dao.HiddenRiskCheckCorrectDao;
import com.safetyplatform.dao.RiskEnterGradeDao;
import com.safetyplatform.entity.RiskEnterGrade;
import com.safetyplatform.entity.Test;
import com.safetyplatform.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MainServiceImpl implements MainService {

    @Autowired
    private RiskEnterGradeDao riskEnterGradeDao;

    @Autowired
    private HiddenRiskCheckCorrectDao hiddenRiskCheckCorrectDao;

    public JSONObject getRiskEnterList() {
        JSONObject jsonObject = new JSONObject();


        jsonObject.put("data",riskEnterGradeDao.queryAll());

        return jsonObject;
    }

    public JSONObject test(String regionId) {
        JSONObject jsonObject = new JSONObject();


        jsonObject.put("data",riskEnterGradeDao.queryTest(regionId));

        return jsonObject;
    }

    public JSONObject getHiddenRiskCheckCorrect(String enterId,int start,int limit,String businessType){
        JSONObject jsonObject = new JSONObject();


        if (!businessType.equals("other")) {
            if (businessType.equals("zyjk")){
                businessType = "职业健康";
            }
            if (businessType.equals("aqgl")){
                businessType = "安全管理";
            }
            if (businessType.equals("tzsb")){
                businessType = "特种设备";
            }
            if (businessType.equals("dqaq")){
                businessType = "电气安全";
            }
            if (businessType.equals("xfaq")){
                businessType = "消防";
            }
        }
        jsonObject.put("totalProperty",hiddenRiskCheckCorrectDao.getTotalNumHRCCL(enterId,businessType));

        jsonObject.put("data",hiddenRiskCheckCorrectDao.getHiddenRiskCheckCorrectList(enterId,start,limit,businessType));

        return jsonObject;
    }
}
