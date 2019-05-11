package com.safetyplatform.dao;

import com.safetyplatform.entity.risk_index.RiskEnterGrade;
import com.safetyplatform.entity.Test;
import com.safetyplatform.entity.risk_index.RiskIndexA;
import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface RiskEnterGradeDao {

    /**
     * 根据偏移量得到风险企业列表
     *
     *
     * @return
     */

    List<Long> queryAllEnterId();

    List<RiskEnterGrade> queryAllEnterRisk();

    //企业总隐患数
    int queryEnterRiskNumById(@Param("enterId") long enterId);
    //企业重大隐患书
    int queryEnterFatalRiskNumById(@Param("enterId") long enterId);

    List<Test> queryTest(@Param("regionId") String regionId);


    //企业事故严重值
    int queryEnterMaxAccident(@Param("enterId") long enterId);

    List<RiskIndexA> queryEnterOtherInfoForRisk(@Param("enterId") long enterId);
}
