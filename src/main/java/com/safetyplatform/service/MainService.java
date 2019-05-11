package com.safetyplatform.service;

import com.alibaba.fastjson.JSONObject;

public interface MainService {

    JSONObject getHiddenRiskCheckCorrect(int status,String enterId,int start,int limit,String businessType);
}
