package com.safetyplatform.dao;

import com.safetyplatform.entity.executelaw.ExeGovRelation;
import com.safetyplatform.entity.executelaw.ExecuteLawFile;
import com.safetyplatform.entity.executelaw.GovDepart;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ExecuteLawGovFileDao {

    List<ExecuteLawFile> getExeFiles(@Param("exeId") long exeId);
    List<ExeGovRelation> getExeGovList(@Param("exeId") long exeId);

    int insertExeGov(@Param("exeId") long exeId,@Param("govId") long govId);
    int deleteExeGov(@Param("rid") long rid);

}
