package com.safetyplatform.service.impl;

import com.safetyplatform.dao.ExecuteLawGovFileDao;
import com.safetyplatform.service.ExecuteLawGovFielService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExecuteLawGovFielServiceImpl implements ExecuteLawGovFielService {
    @Autowired
    ExecuteLawGovFileDao executeLawGovFileDao;
    public int insertOrDeleteExecuteLawGov(long rid,long exeId,long govId){

        //0代表不存在此rid，即是新增一个记录
        if (rid == 0)
            executeLawGovFileDao.insertExeGov(exeId,govId);
        else
            executeLawGovFileDao.deleteExeGov(rid);

        return 1;
    }
}
