package com.safetyplatform.dao;

import com.safetyplatform.entity.EnterBaseInfo;
import com.safetyplatform.entity.EnterBusiness;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ManagerDao {


    List<EnterBusiness> getEnterBusinessList();

}
