package com.safetyplatform.service;

import com.safetyplatform.entity.enter_info.EnterpriseOtherInfo;
import com.safetyplatform.entity.enter_info.ZoneBase;

import java.util.List;

public interface EnterInfoService {
    EnterpriseOtherInfo getEnterInfo(long enterId);
    long insertNewEnterInfo(EnterpriseOtherInfo enterpriseOtherInfo);
    List<ZoneBase> getZoneListByTownId(String townId);
}
