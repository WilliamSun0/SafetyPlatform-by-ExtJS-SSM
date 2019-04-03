package com.safetyplatform.dao;

import com.safetyplatform.entity.RegionTree;
import com.safetyplatform.entity.Test;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegionTreeDao {

    /**
     * 根据偏移量得到风险企业列表
     *
     * @return
     */

    List<RegionTree> getFather();

    /**
     * 根据偏移量得到风险企业列表
     *
     * @return
     */

    List<RegionTree> getChildren(@Param("noteId") String noteId);
}
