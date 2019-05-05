package com.safetyplatform.dao;

import com.safetyplatform.entity.enter_info.EnterBusiness;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ManagerDao {


    List<EnterBusiness> getEnterBusinessList();

}
