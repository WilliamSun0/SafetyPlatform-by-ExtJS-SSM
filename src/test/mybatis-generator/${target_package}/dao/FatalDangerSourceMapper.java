package ${target_package}.dao;

import ${target_package}.model.FatalDangerSource;
import ${target_package}.model.FatalDangerSourceCriteria;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface FatalDangerSourceMapper {
    long countByExample(FatalDangerSourceCriteria example);

    int deleteByExample(FatalDangerSourceCriteria example);

    int deleteByPrimaryKey(Integer srcId);

    int insert(FatalDangerSource record);

    int insertSelective(FatalDangerSource record);

    List<FatalDangerSource> selectByExample(FatalDangerSourceCriteria example);

    FatalDangerSource selectByPrimaryKey(Integer srcId);

    int updateByExampleSelective(@Param("record") FatalDangerSource record, @Param("example") FatalDangerSourceCriteria example);

    int updateByExample(@Param("record") FatalDangerSource record, @Param("example") FatalDangerSourceCriteria example);

    int updateByPrimaryKeySelective(FatalDangerSource record);

    int updateByPrimaryKey(FatalDangerSource record);
}