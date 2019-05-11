package com.safetyplatform.dao;

import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.session.ResultContext;
import org.apache.ibatis.session.ResultHandler;
import org.apache.ibatis.session.SqlSession;


import java.util.HashMap;
import java.util.Map;

import static javax.xml.stream.XMLStreamConstants.NAMESPACE;

public class HRLevelNumDaoImpl {
    private SqlSession sqlSession;



    public class FblMapResultHandler implements ResultHandler {
        @SuppressWarnings("rawtypes")
        private final Map mappedResults = new HashMap();

        @SuppressWarnings("unchecked")
        @Override
        public void handleResult(ResultContext context) {
            @SuppressWarnings("rawtypes")
            Map map = (Map) context.getResultObject();
            mappedResults.put(map.get("key"), map.get("value"));  // xml 配置里面的property的值，对应的列
        }
        public Map getMappedResults() {
            return mappedResults;
        }
    }
    //企业每个等级隐患总数
     //https://blog.csdn.net/codejas/article/details/79520246

    public Map<Integer,Integer> queryEnterHiddenRiskNum(@Param("enterId") long enterId){
        FblMapResultHandler fbl = new FblMapResultHandler();
        this.sqlSession.select(NAMESPACE +"queryEnterHiddenRiskNum",fbl);
        @SuppressWarnings("rawtypes")
        Map map =fbl.getMappedResults();
        return map;
    }

    //企业每个等级隐患总数（未整改）

    public Map<Integer,Integer> queryEHRNoCorrectNum(@Param("enterId") long enterId){
        FblMapResultHandler fbl = new FblMapResultHandler();
        sqlSession.select(NAMESPACE +"queryEHRNoCorrectNum",fbl);
        @SuppressWarnings("rawtypes")
        Map map =fbl.getMappedResults();
        return map;

    }
}
