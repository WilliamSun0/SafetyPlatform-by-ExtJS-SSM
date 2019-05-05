package com.safetyplatform.service;

import com.alibaba.fastjson.JSONObject;
import com.safetyplatform.entity.executelaw.ExecuteLaw;

import java.util.List;

public interface ExecuteLawService {

    int insertOrUpdateExecuteLaw(List<ExecuteLaw> executeLaws);

    JSONObject getExecuteLawList(long enterId);
}
