package com.safetyplatform.web;

import com.alibaba.fastjson.JSONObject;
import com.safetyplatform.dao.ExecuteLawDao;
import com.safetyplatform.entity.executelaw.ExecuteLaw;
import com.safetyplatform.service.ExecuteLawService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@Controller
public class ExecuteLawController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private int i = 1;


    @Autowired
    private ExecuteLawDao executeLawDao;

    @Autowired
    private ExecuteLawService executeLawService;

    @RequestMapping(value="/executeLaw/getEnterExecuteLawList",
            method=RequestMethod.GET
    )
    @ResponseBody
    public JSONObject getEnterInfo(@RequestParam(value ="eid")long enterId){

        return executeLawService.getExecuteLawList(enterId);
    }


    @RequestMapping(value="/executeLaw/saveExecuteLawReport",
            method=RequestMethod.POST
    )
    @ResponseBody
    public JSONObject saveExecuteLawReport(@RequestBody ExecuteLaw[] executeLaws){
        JSONObject jsonObject = new JSONObject();

        executeLawService.insertOrUpdateExecuteLaw(Arrays.asList(executeLaws));
        jsonObject.put("success",true);

        return jsonObject;
    }

}
