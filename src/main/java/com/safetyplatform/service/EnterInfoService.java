package com.safetyplatform.service;

import com.safetyplatform.entity.EnterpriseOtherInfo;
import com.safetyplatform.entity.ZoneBase;
import org.springframework.stereotype.Service;

import java.util.List;

public interface EnterInfoService {
    EnterpriseOtherInfo getEnterInfo(long enterId);
    long insertNewEnterInfo(EnterpriseOtherInfo enterpriseOtherInfo);
    List<ZoneBase> getZoneListByTownId(String townId);
}
