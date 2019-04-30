package com.safetyplatform.service.impl;

import com.safetyplatform.dao.EnterInfoDao;
import com.safetyplatform.entity.EnterBaseInfo;
import com.safetyplatform.entity.EnterpriseBaseInfo;
import com.safetyplatform.entity.EnterpriseOtherInfo;
import com.safetyplatform.entity.ZoneBase;
import com.safetyplatform.service.EnterInfoService;
import org.apache.ibatis.jdbc.Null;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnterInfoServiceImpl implements EnterInfoService {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private EnterInfoDao enterInfoDao;
    public EnterpriseOtherInfo getEnterInfo(long enterId){

        return enterInfoDao.getEnterInfo(enterId);
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
            enterInfoDao.insertEnterBaseInfo(enterpriseBaseInfo);
            //插入新的企业时返回自增id
            enterId = enterpriseBaseInfo.getEnterId();
            logger.info(String.valueOf(enterId));
            enterpriseOtherInfo.setEnterId(enterId);
            enterInfoDao.insertEnterOtherInfo(enterpriseOtherInfo);

            enterInfoDao.insertEnterIndustry(enterId,enterpriseOtherInfo.getTypeId());

            logger.info("mynew");
        }else{
            logger.info("myupdate");
            enterInfoDao.updateEnterBaseInfo(enterpriseBaseInfo);
            enterInfoDao.updateEnterOtherInfo(enterpriseOtherInfo);
            enterInfoDao.updateEnterIndustry(enterId,enterpriseOtherInfo.getTypeId());
        }

        return enterId;
    }

    public List<ZoneBase> getZoneListByTownId(String townId){
        return enterInfoDao.getZoneListByTownId(townId);
    }

//    public int updateEnterImg(String enterId,String type){
//        EnterpriseOtherInfo enterpriseOtherInfo = new EnterpriseOtherInfo();
//        if (type.equals("plane"))
//        enterpriseOtherInfo.setPlaneImg();
//    }
}
