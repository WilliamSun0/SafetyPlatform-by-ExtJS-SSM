package com.safetyplatform.dao;

import com.safetyplatform.entity.HiddenRiskCheckCorrect;
import com.safetyplatform.entity.RegionTree;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Repository
public interface HiddenRiskCheckCorrectDao {

    /**
     * 根据偏移量得到风险企业列表
     *
     * @return
     */

    List<HiddenRiskCheckCorrect> getHiddenRiskCheckCorrectList(@Param("enterId") String enterId,@Param("start") int start,@Param("limit") int limit,@Param("businessType") String businessType);

    int getTotalNumHRCCL(@Param("enterId") String enterId);

    int insertHiddenRiskCheck(@Param("enterId")int enterId,@Param("riskId")int riskId,@Param("filePath")String mypath);
    //int insertHiddenRiskCorrect();

    int updateHiddenRiskCheck(@Param("reportId")int reportId,@Param("enterId")int enterId,@Param("riskId")int riskId,@Param("filePath")String mypath);
    //int insertHiddenRiskCorrect();

}
