package com.safetyplatform.service.impl;

import com.safetyplatform.dao.EnterOtherInfoDao;
import com.safetyplatform.entity.enter_info.EnterpriseBaseInfo;
import com.safetyplatform.entity.enter_info.EnterpriseOtherInfo;
import com.safetyplatform.entity.enter_info.ZoneBase;
import com.safetyplatform.service.EnterInfoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnterInfoServiceImpl implements EnterInfoService {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private EnterOtherInfoDao enterOtherInfoDao;
    public EnterpriseOtherInfo getEnterInfo(long enterId){

        return enterOtherInfoDao.getEnterInfo(enterId);
    }

    public long insertNewEnterInfo(EnterpriseOtherInfo enterpriseOtherInfo){

        EnterpriseBaseInfo enterpriseBaseInfo = new EnterpriseBaseInfo();
        enterpriseBaseInfo.setDustExplosion(enterpriseOtherInfo.getDustExplosion());
        enterpriseBaseInfo.setGovId(enterpriseOtherInfo.getZnid());
        enterpriseBaseInfo.setRestrictedSpace(enterpriseOtherInfo.getRestrictedSpace());
        enterpriseBaseInfo.setLatitude(enterpriseOtherInfo.getLatitude());
        enterpriseBaseInfo.setLongitude(enterpriseOtherInfo.getLongitude());
        enterpriseBaseInfo.setEnterName(enterpriseOtherInfo.getEnterName());

        long enterId = enterpriseOtherInfo.getEnterId();
        enterpriseBaseInfo.setEnterId(enterId);
        //新增企业
        if(enterId==0){
            enterOtherInfoDao.insertEnterBaseInfo(enterpriseBaseInfo);
            //插入新的企业时返回自增id
            enterId = enterpriseBaseInfo.getEnterId();
            logger.info(String.valueOf(enterId));
            enterpriseOtherInfo.setEnterId(enterId);
            enterOtherInfoDao.insertEnterOtherInfo(enterpriseOtherInfo);

            enterOtherInfoDao.insertEnterIndustry(enterId,enterpriseOtherInfo.getTypeId());

            logger.info("mynew");
        }else{
            logger.info("myupdate");
            enterOtherInfoDao.updateEnterBaseInfo(enterpriseBaseInfo);
            enterOtherInfoDao.updateEnterOtherInfo(enterpriseOtherInfo);
            enterOtherInfoDao.updateEnterIndustry(enterId,enterpriseOtherInfo.getTypeId(),enterpriseOtherInfo.getEbrId());
        }

        return enterId;
    }

    public List<ZoneBase> getZoneListByTownId(String townId){
        return enterOtherInfoDao.getZoneListByTownId(townId);
    }

}
