package com.safetyplatform.dao;

import com.safetyplatform.entity.RiskEnterGrade;
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

    Long[] queryAllEnterId();

    List<RiskEnterGrade> queryAllEnterRisk();


    List<Test> queryTest(@Param("regionId") String regionId);
    //企业每个等级隐患总数
    @MapKey("danger_levle_num")
    Map<Integer,Integer> queryEnterHiddenRiskNum(@Param("enterId") long enterId);

    //企业每个等级隐患总数（未整改）
    @MapKey("danger_levle_num")
    Map<Integer,Integer> queryEHRNoCorrectNum(@Param("enterId") long enterId);

    //企业事故严重值
    int queryEnterAccidentList(@Param("enterId") long enterId);

    List<RiskIndexA> queryEnterOtherInfoForRisk(@Param("enterId") long enterId);
}
