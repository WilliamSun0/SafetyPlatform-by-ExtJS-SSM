package com.safetyplatform.dao;

import com.safetyplatform.entity.enter_info.DangerChemicalTech;
import com.safetyplatform.entity.enter_info.EnterAccInfo;
import com.safetyplatform.entity.enter_info.FatalDangerSource;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface EnterFatalSafeInfoDao {

    List<EnterAccInfo> getEnterAccList(@Param("enterId") long enterId);
    int insertEnterAccList(List<EnterAccInfo> enterAccInfos);
    int updateEnterAccList(List<EnterAccInfo> enterAccInfos);
    int deleteEnterAcc(@Param("accId") long accId);

    List<FatalDangerSource> getEnterFDSList(@Param("enterId") long enterId);
    int insertEnterFDSList(List<FatalDangerSource> fatalDangerSources);
    int updateEnterFDSList(List<FatalDangerSource> fatalDangerSources);
    int deleteEnterFDS(@Param("srcId") long srcId);

    List<DangerChemicalTech> getEnterDCTList(@Param("enterId") long enterId);
    int insertEnterDCTList(List<DangerChemicalTech> dangerChemicalTeches);
    int updateEnterDCTList(List<DangerChemicalTech> dangerChemicalTeches);
    int deleteEnterDCT(@Param("techId") long techId);
}
