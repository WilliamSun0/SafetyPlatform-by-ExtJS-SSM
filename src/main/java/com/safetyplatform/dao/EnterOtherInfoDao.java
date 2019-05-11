package com.safetyplatform.dao;

import com.safetyplatform.entity.enter_info.EnterAccInfo;
import com.safetyplatform.entity.enter_info.EnterpriseBaseInfo;
import com.safetyplatform.entity.enter_info.EnterpriseOtherInfo;
import com.safetyplatform.entity.enter_info.ZoneBase;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface EnterOtherInfoDao {

    int insertEnterOtherInfo(EnterpriseOtherInfo enterpriseOtherInfo);
    int insertEnterBaseInfo(EnterpriseBaseInfo enterpriseBaseInfo);

    EnterpriseOtherInfo getEnterInfo(@Param("enterId") long enterId);

    List<ZoneBase> getZoneListByTownId(String townId);
    int updateEnterOtherInfo(EnterpriseOtherInfo enterpriseOtherInfo);
    int updateEnterBaseInfo(EnterpriseBaseInfo enterpriseBaseInfo);

    int insertEnterIndustry(@Param("enterId") long enterId, @Param("typeId")int typeId);
    int updateEnterIndustry(@Param("enterId") long enterId, @Param("typeId")int typeId,@Param("ebrId")int ebrId);


}