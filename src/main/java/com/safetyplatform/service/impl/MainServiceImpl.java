package com.safetyplatform.service.impl;

import com.safetyplatform.dao.RiskEnterGradeDao;
import com.safetyplatform.entity.RiskEnterGrade;
import com.safetyplatform.entity.Test;
import com.safetyplatform.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MainServiceImpl implements MainService {

    @Autowired
    private RiskEnterGradeDao riskEnterGradeDao;

    public List<Test> getRiskEnterList() {
        return riskEnterGradeDao.queryAll(0, 1);
    }
}
