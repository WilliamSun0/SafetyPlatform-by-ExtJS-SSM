package com.safetyplatform.web;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.safetyplatform.dao.ManagerDao;
import com.safetyplatform.dao.RegionTreeDao;
import com.safetyplatform.entity.EnterBusiness;
import com.safetyplatform.entity.EnterpriseOtherInfo;
import com.safetyplatform.entity.RegionTree;
import com.safetyplatform.entity.ZoneBase;
import com.safetyplatform.service.EnterInfoService;
import com.safetyplatform.service.MainService;
import com.safetyplatform.service.RegionTreeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.List;

@Controller
public class EnterInfoController {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private int i = 1;

    @Autowired
    private EnterInfoService enterInfoService;

    @Autowired
    private ManagerDao managerDao;

    @RequestMapping(value="/enterInfo/getEnterpriseByEid",
            method=RequestMethod.GET
    )
    @ResponseBody
    public JSONObject getEnterInfo(@RequestParam(value ="eid") String enterId){
        JSONObject jsonObject = new JSONObject();
        EnterpriseOtherInfo enterpriseOtherInfo = enterInfoService.getEnterInfo(Long.parseLong(enterId));/*获取风险评级企业列表*/
        jsonObject.put("success", true);
        //新增enterinfo
        jsonObject.put("data",enterpriseOtherInfo);
        return jsonObject;
    }

    @RequestMapping(value="/enterInfo/saveEnterInfo",
            method=RequestMethod.POST
    )
    @ResponseBody
    public JSONObject saveEnterInfo(EnterpriseOtherInfo enterpriseOtherInfo){
        JSONObject jsonObject = new JSONObject();
        //int result = enterInfoService.insertNewEnterInfo(enterpriseOtherInfo);/*获取风险评级企业列表*/

        logger.info(String.valueOf(enterpriseOtherInfo.getEnterId()));
        String strDateFormat = "yyyy-MM-dd HH:mm:ss";
        SimpleDateFormat sdf = new SimpleDateFormat(strDateFormat);
        //logger.info(sdf.format(enterpriseOtherInfo.getBuildTime()));

        String enterId = String.valueOf(enterInfoService.insertNewEnterInfo(enterpriseOtherInfo));
        jsonObject.put("success", true);
        //新增enterinfo
        jsonObject.put("eid",enterId);
        return jsonObject;
    }

    @RequestMapping(value="/enterInfo/getZoneListByTownId",
            method=RequestMethod.GET
    )
    @ResponseBody
    public List<ZoneBase> getZoneListByTownId(@RequestParam("tid") String townId){

        return enterInfoService.getZoneListByTownId(townId);/*获取风险评级企业列表*/
    }


    @RequestMapping(value="/enterInfo/getIndustryList",
            method=RequestMethod.GET
    )
    @ResponseBody
    public List<EnterBusiness> getIndustryList(){

        //这里直接用了dao了，加service一样的
        return managerDao.getEnterBusinessList();/*获取风险评级企业列表*/
    }
}
