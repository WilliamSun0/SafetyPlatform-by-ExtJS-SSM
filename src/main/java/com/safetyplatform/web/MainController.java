package com.safetyplatform.web;

import com.safetyplatform.entity.RiskEnterGrade;
import com.safetyplatform.entity.Test;
import com.safetyplatform.service.LoginService;
import com.safetyplatform.service.MainService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class MainController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private MainService mainService;

    @RequestMapping(value="/test/test",
            method=RequestMethod.GET
            )
    @ResponseBody
    public List<Test> test(){

        return mainService.getRiskEnterList();/*获取风险评级企业列表*/
    }
}
