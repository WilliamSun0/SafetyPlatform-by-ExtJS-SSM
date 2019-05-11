package com.safetyplatform.web;

import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RiskChartController {



    @RequestMapping(value="/riskChart/getRiskPartPropChart",
            method=RequestMethod.GET
    )
    @ResponseBody
    public JSONObject getRiskEnterList(@RequestParam String regionId){

        JSONObject jsonObject = new JSONObject();

        return jsonObject;/*获取风险评级企业列表*/
    }
}
