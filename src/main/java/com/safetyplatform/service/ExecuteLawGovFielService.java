package com.safetyplatform.service;

import com.alibaba.fastjson.JSONObject;
import com.safetyplatform.entity.executelaw.ExecuteLaw;

import java.util.List;

public interface ExecuteLawGovFielService {

    int insertOrDeleteExecuteLawGov(long rid,long exeId,long govId);


}
