package com.safetyplatform.dao;

import com.safetyplatform.entity.HiddenRiskCheckCorrect;
import com.safetyplatform.entity.RegionTree;
import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Date;
import java.util.List;
import java.util.Map;

@Repository
public interface HiddenRiskCheckCorrectDao {

    /**
     * 根据偏移量得到风险企业列表
     *
     * @return
     */


    List<HiddenRiskCheckCorrect> getHiddenRiskCheckCorrectList(@Param("status") int status,@Param("enterId") String enterId,@Param("start") int start,@Param("limit") int limit,@Param("businessType") String businessType);

    int getTotalNumHRCCL(@Param("status") int status,@Param("enterId") String enterId,@Param("businessType") String businessType);

    int insertHiddenRiskCheck(@Param("enterId")int enterId,@Param("riskId")int riskId,@Param("filePath")String mypath);
    //int insertHiddenRiskCorrect();

    int updateHiddenRiskCheck(@Param("reportId") int reportId,@Param("enterId")int enterId,@Param("riskId")int riskId,@Param("filePath")String mypath);
    //int insertHiddenRiskCorrect();

    //查询企业每大类隐患main_type：环境场所，人力，物料数目
//    @MapKey("")
//    Map<Integer,Integer>  getEnterMainTypeNum(@Param("enterId") long enterId);

    int insertHiddenRiskCheckNoFile(@Param("enterId")int enterId,@Param("riskId")int riskId,@Param("checkMan")int checkMan,
                                    @Param("checkTime") Date checkTime,
                                    @Param("status") boolean status);
    int updateHiddenRiskCorrectNoFile(@Param("uid")int uid,@Param("correctMan")int correctMan,
                                      @Param("correctTime") Date correctTime,
                                      @Param("status") boolean status);
}
