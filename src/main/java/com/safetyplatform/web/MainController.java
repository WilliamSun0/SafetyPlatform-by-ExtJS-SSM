package com.safetyplatform.web;

import com.alibaba.fastjson.JSONObject;
import com.safetyplatform.entity.RegionTree;
import com.safetyplatform.entity.RiskEnterGrade;
import com.safetyplatform.entity.Test;
import com.safetyplatform.service.LoginService;
import com.safetyplatform.service.MainService;
import com.safetyplatform.service.RegionTreeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class MainController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private MainService mainService;

    @Autowired
    private RegionTreeService regionTreeService;

    @RequestMapping(value="/getRiskEnterList",
            method=RequestMethod.GET
            )
    @ResponseBody
    public JSONObject getRiskEnterList(){

        return mainService.getRiskEnterList();/*获取风险评级企业列表*/
    }

    @RequestMapping(value="/test/testtree",
            method=RequestMethod.GET,produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public List<RegionTree> testtree(){

        return regionTreeService.getAllRegionTrees();/*获取风险评级企业列表*/
    }

    @RequestMapping(value="/HiddenRiskCheckCorrect",
            method=RequestMethod.GET
    )
    @ResponseBody
    public JSONObject hiddenRiskCheckCorrect(@RequestParam String enterId,@RequestParam int start,@RequestParam int limit,@RequestParam(required = false,defaultValue="other") String businessType){

        return mainService.getHiddenRiskCheckCorrect(enterId,start,limit,businessType);/*获取风险评级企业列表*/
    }
}
