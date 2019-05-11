package com.safetyplatform.dao;

import com.safetyplatform.entity.risk_index.RiskEvaluateResult;
import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Param;

import java.util.Map;

public interface HRLevelNumDao {

    //企业每个等级隐患总数
     //https://blog.csdn.net/codejas/article/details/79520246
    @MapKey("dangerLevelNum")
    Map<Integer,RiskEvaluateResult> queryEnterHiddenRiskNum(@Param("enterId") long enterId);

    //企业每个等级隐患总数（未整改）
    @MapKey("dangerLevelNum")
    Map<Integer,RiskEvaluateResult> queryEHRNoCorrectNum(@Param("enterId") long enterId);
}
