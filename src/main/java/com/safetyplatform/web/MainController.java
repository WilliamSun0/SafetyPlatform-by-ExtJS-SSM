package com.safetyplatform.web;

import com.alibaba.fastjson.JSONObject;
import com.safetyplatform.dao.HiddenRiskCheckCorrectDao;
import com.safetyplatform.entity.RegionTree;
import com.safetyplatform.service.MainService;
import com.safetyplatform.service.OverviewTreeService.OverviewTreeService;
import com.safetyplatform.service.RegionTreeService;
import com.safetyplatform.service.RiskEnterListService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Date;
import java.util.List;

@Controller
public class MainController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private MainService mainService;

    @Autowired
    private RegionTreeService regionTreeService;

    @Autowired
    private OverviewTreeService overviewTreeService;

    @Autowired
    private RiskEnterListService riskEnterListService;

    @Autowired
    private HiddenRiskCheckCorrectDao hiddenRiskCheckCorrectDao;

    @RequestMapping(value="/getRiskEnterList",
            method=RequestMethod.GET
            )
    @ResponseBody
    public JSONObject getRiskEnterList(){

        return riskEnterListService.getRiskEnterList();/*获取风险评级企业列表*/
    }

    @RequestMapping(value="/test/testtree",
            method=RequestMethod.GET,produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public List<RegionTree> testtree(){

        return regionTreeService.getAllRegionTrees();/*获取风险评级企业列表*/
    }


    @RequestMapping(value="/tree/RegionChartTree",
            method=RequestMethod.GET,produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public List<RegionTree> regionCharttree(){

        return overviewTreeService.getOverviewTrees();/*获取风险评级企业列表*/
    }

    @RequestMapping(value="/HiddenRiskCheckCorrect",
            method=RequestMethod.GET
    )
    @ResponseBody
    public JSONObject hiddenRiskCheckCorrect
            (@RequestParam String enterId,
             @RequestParam int start,
             @RequestParam int limit,
             @RequestParam(required = false,defaultValue="other") String businessType){

        return mainService.getHiddenRiskCheckCorrect(1,enterId,start,limit,businessType);/*获取风险评级企业列表*/
    }

    @RequestMapping(value="/HiddenRiskCheckCorrect2",
            method=RequestMethod.GET
    )
    @ResponseBody
    public JSONObject hiddenRiskCheckCorrect2
            (@RequestParam String enterId,
             @RequestParam int start,
             @RequestParam int limit,
             @RequestParam(required = false,defaultValue="other") String businessType){

        return mainService.getHiddenRiskCheckCorrect(0,enterId,start,limit,businessType);/*获取风险评级企业列表*/
    }

    @RequestMapping(value="/hrcc/svHRCC2",
            method=RequestMethod.POST
    )
    @ResponseBody
    public JSONObject insertCheck(@RequestParam int riskId,@RequestParam int checkMan,@RequestParam long enterId){
        JSONObject jsonObject = new JSONObject();
        hiddenRiskCheckCorrectDao.insertHiddenRiskCheckNoFile((int)enterId,riskId,checkMan,new Date(new java.util.Date().getTime()),false);

        jsonObject.put("success",true);

        return jsonObject;
    }

    @RequestMapping(value="/hrcc/svHRCC",
            method=RequestMethod.POST
    )
    @ResponseBody
    public JSONObject updateCorrect(@RequestParam int uid,@RequestParam int correctMan){
        JSONObject jsonObject = new JSONObject();

        hiddenRiskCheckCorrectDao.updateHiddenRiskCorrectNoFile(uid,correctMan,new Date(new java.util.Date().getTime()),true);
        jsonObject.put("success",true);
        return jsonObject;
    }
}
