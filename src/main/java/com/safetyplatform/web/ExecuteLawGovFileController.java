package com.safetyplatform.web;

import com.alibaba.fastjson.JSONObject;
import com.safetyplatform.dao.ExecuteLawGovFileDao;
import com.safetyplatform.entity.executelaw.ExecuteLaw;
import com.safetyplatform.service.ExecuteLawGovFielService;
import com.safetyplatform.service.ExecuteLawService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@Controller
public class ExecuteLawGovFileController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    ExecuteLawGovFileDao executeLawGovFileDao;

    @Autowired
    ExecuteLawGovFielService executeLawGovFielService;

    @RequestMapping(value="/executeLaw/getExeGovList",
            method=RequestMethod.GET
    )
    @ResponseBody
    public JSONObject getExeGovList(@RequestParam(value ="exeId") long exeId){
        JSONObject jsonObject = new JSONObject();

        jsonObject.put("root",executeLawGovFileDao.getExeGovList(exeId));
        return jsonObject;
    }
    @RequestMapping(value="/executeLaw/getExeFiles",
            method=RequestMethod.GET
    )
    @ResponseBody
    public JSONObject getExeFiles(@RequestParam(value ="exeId") long exeId){
        JSONObject jsonObject = new JSONObject();

        jsonObject.put("root",executeLawGovFileDao.getExeFiles(exeId));
        return jsonObject;
    }

    @RequestMapping(value="/executeLaw/svAddZfbm",
            method=RequestMethod.POST
    )
    @ResponseBody
    public JSONObject savezfbm(@RequestParam(required = false) long rid,@RequestParam long exeId,@RequestParam long govId){
        JSONObject jsonObject = new JSONObject();

        if (executeLawGovFielService.insertOrDeleteExecuteLawGov(rid,exeId,govId) == 1)
            jsonObject.put("success",true);

        return jsonObject;
    }
}
