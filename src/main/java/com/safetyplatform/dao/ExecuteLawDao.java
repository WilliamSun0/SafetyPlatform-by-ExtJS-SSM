package com.safetyplatform.dao;

import com.safetyplatform.entity.executelaw.ExecuteLaw;

import com.safetyplatform.entity.executelaw.ExecuteLawFile;
import com.safetyplatform.entity.executelaw.GovDepart;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ExecuteLawDao {


     int insertExeLawList(@Param("list") List<ExecuteLaw> executeLaws);
     int updateExeLawList(@Param("list")List<ExecuteLaw> executeLaws);

     List<ExecuteLaw> getEnterExecuteLaw(@Param("enterId") long enterId);


}
