package com.safetyplatform.dao;

import com.safetyplatform.entity.RiskEnterGrade;
import com.safetyplatform.entity.Test;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RiskEnterGradeDao {

    /**
     * 根据偏移量得到风险企业列表
     *
     *
     * @return
     */

    List<Test> queryAll();

    List<Test> queryTest(@Param("regionId") String regionId);
}
