package com.safetyplatform.service;

import com.alibaba.fastjson.JSONObject;
import com.safetyplatform.entity.RiskEnterGrade;
import com.safetyplatform.entity.Test;

import java.util.List;

public interface MainService {

    JSONObject getRiskEnterList();

    JSONObject test(String regionId);

    JSONObject getHiddenRiskCheckCorrect(String enterId,int start,int limit,String businessType);
}
