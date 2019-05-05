package com.safetyplatform.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.safetyplatform.dao.ExecuteLawDao;
import com.safetyplatform.entity.executelaw.ExecuteLaw;
import com.safetyplatform.service.ExecuteLawService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Service
public class ExecuteLawServiceImpl implements ExecuteLawService {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private ExecuteLawDao executeLawDao;
    public int insertOrUpdateExecuteLaw(List<ExecuteLaw> executeLaws){
        List<ExecuteLaw> notExistEL = new ArrayList<>();
        List<ExecuteLaw> existEL = new ArrayList<>();
        for (ExecuteLaw e:executeLaws) {

            //这里一直存在的问题是，用id0来表示新的记录新的表单，但是0就不能作为真实id
            //一个方案是使用另一个值专门存放flag大表是否是新增的
            if (e.getExeId() == 0){
                ExecuteLaw executeLaw = new ExecuteLaw();
                executeLaw.setEnterId(e.getEnterId());
                executeLaw.setExeRemark(e.getExeRemark());
                executeLaw.setExeResult(e.isExeResult());
                executeLaw.setExeTime(new Date(new java.util.Date().getTime()));
                executeLaw.setExeType(e.getExeType());
                notExistEL.add(executeLaw);

            }else{
                existEL.add(e);
            }
            logger.info(e.getExeId()+e.getExeRemark()+e.isExeResult());
        }

        if (!notExistEL.isEmpty())
            executeLawDao.insertExeLawList(notExistEL);
        if (!existEL.isEmpty())
            executeLawDao.updateExeLawList(existEL);
        return 1;
    }


    public JSONObject getExecuteLawList(long enterId){
        JSONObject jsonObject = new JSONObject();
        /*获取风险评级企业列表*/

        //jsonObject.put("totalProperty",2);
        //新增enterinfo
        jsonObject.put("rows",executeLawDao.getEnterExecuteLaw(enterId));
        return jsonObject;
    }

}
