package com.safetyplatform.web;

import com.alibaba.fastjson.JSONObject;
import com.safetyplatform.dao.EnterFatalSafeInfoDao;
import com.safetyplatform.dao.EnterOtherInfoDao;
import com.safetyplatform.entity.enter_info.DangerChemicalTech;
import com.safetyplatform.entity.enter_info.EnterAccInfo;
import com.safetyplatform.entity.enter_info.FatalDangerSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Controller
public class EnterFatalSafeInfoController {
    @Autowired
    private EnterFatalSafeInfoDao enterFatalSafeInfoDao;

    /**
     * 事故
     * @param enterAccInfos
     * @return
     */
    @RequestMapping(value="/Enterprise/svEnterAccList",
            method=RequestMethod.POST
    )
    @ResponseBody
    public JSONObject saveAccident(@RequestBody EnterAccInfo[] enterAccInfos){
        JSONObject jsonObject = new JSONObject();

        int result = 0;
        List<EnterAccInfo>  unExistAcc = new ArrayList<>();
        List<EnterAccInfo>  existAcc = new ArrayList<>();
        for (EnterAccInfo e:enterAccInfos
             ) {
            if (e.getAccId() == 0){
                //为空的时间附上服务器时间，mysql的Date类型是不能设置默认时间的
                e.setAccTime(new Date(new java.util.Date().getTime()));
                unExistAcc.add(e);
            }else {
                existAcc.add(e);
            }
        }
        if (!unExistAcc.isEmpty())
            result = enterFatalSafeInfoDao.insertEnterAccList(unExistAcc);
        if (!existAcc.isEmpty())
            enterFatalSafeInfoDao.updateEnterAccList(existAcc);

        jsonObject.put("resultMsg",result);
        jsonObject.put("success",true);
        return jsonObject;
    }

    @RequestMapping(value="/Enterprise/getEnterAccByEid",
            method=RequestMethod.GET
    )

    @ResponseBody
    public List<EnterAccInfo> getEnterAccListAction(@RequestParam(value ="eid")long enterId){

        return enterFatalSafeInfoDao.getEnterAccList(enterId);
    }

    @RequestMapping(value="/Enterprise/deleteEnterAccByAccId",
            method=RequestMethod.POST
    )
    @ResponseBody
    public JSONObject saveAccident(@RequestParam(value ="accId")long accId){
        JSONObject jsonObject = new JSONObject();



        //jsonObject.put("resultMsg",enterOtherInfoDao.deleteEnterAcc(accId));
        if (enterFatalSafeInfoDao.deleteEnterAcc(accId) > 0)
        jsonObject.put("success",true);
        return jsonObject;
    }

    @RequestMapping(value="/Enterprise/svEnterDCTList",
            method=RequestMethod.POST
    )
    @ResponseBody
    public JSONObject saveDCTListAction(@RequestBody DangerChemicalTech[] dangerChemicalTeches){
        JSONObject jsonObject = new JSONObject();

        int result1 = 0,result2 = 0;
        List<DangerChemicalTech>  unExistAcc = new ArrayList<>();
        List<DangerChemicalTech>  existAcc = new ArrayList<>();
        for (DangerChemicalTech e:dangerChemicalTeches
                ) {
            if (e.getTechId() == 0){
                unExistAcc.add(e);
            }else {
                existAcc.add(e);
            }
        }
        if (!unExistAcc.isEmpty())
            result1 = enterFatalSafeInfoDao.insertEnterDCTList(unExistAcc);
        if (!existAcc.isEmpty())
            result2 = enterFatalSafeInfoDao.updateEnterDCTList(existAcc);

        if (result1 > 0||result2>0)
            jsonObject.put("success",true);
        return jsonObject;
    }

    @RequestMapping(value="/Enterprise/getDCTByEid",
            method=RequestMethod.GET
    )

    @ResponseBody
    public List<DangerChemicalTech> getEnterDCTListAction(@RequestParam(value ="eid")long enterId){

        return enterFatalSafeInfoDao.getEnterDCTList(enterId);
    }

    @RequestMapping(value="/Enterprise/deleteEnterDCTByTechId",
            method=RequestMethod.POST
    )
    @ResponseBody
    public JSONObject deleteDCTListAction(@RequestParam(value ="techId")long techId){
        JSONObject jsonObject = new JSONObject();

        if (enterFatalSafeInfoDao.deleteEnterDCT(techId) > 0)
            jsonObject.put("success",true);
        return jsonObject;
    }


    /**
     * 重大危险源
     * @param fatalDangerSources
     * @return
     */
    @RequestMapping(value="/Enterprise/svEnterFDSList",
            method=RequestMethod.POST
    )
    @ResponseBody
    public JSONObject saveFDSListAction(@RequestBody FatalDangerSource[] fatalDangerSources){
        JSONObject jsonObject = new JSONObject();

        int result1 = 0,result2 = 0;
        List<FatalDangerSource>  unExistAcc = new ArrayList<>();
        List<FatalDangerSource>  existAcc = new ArrayList<>();
        for (FatalDangerSource e:fatalDangerSources
                ) {
            if (e.getSrcId() == 0){
                unExistAcc.add(e);
            }else {
                existAcc.add(e);
            }
        }
        if (!unExistAcc.isEmpty())
            result1 = enterFatalSafeInfoDao.insertEnterFDSList(unExistAcc);
        if (!existAcc.isEmpty())
            result2 = enterFatalSafeInfoDao.updateEnterFDSList(existAcc);

        if (result1 > 0||result2>0)
            jsonObject.put("success",true);
        return jsonObject;
    }

    @RequestMapping(value="/Enterprise/getEnterFDSByEid",
            method=RequestMethod.GET
    )

    @ResponseBody
    public List<FatalDangerSource> getEnterFDSListAction(@RequestParam(value ="eid")long enterId){

        return enterFatalSafeInfoDao.getEnterFDSList(enterId);
    }

    @RequestMapping(value="/Enterprise/deleteEnterFDSBySrcId",
            method=RequestMethod.POST
    )
    @ResponseBody
    public JSONObject deleteFDSListAction(@RequestParam(value ="srcId")long srcId){
        JSONObject jsonObject = new JSONObject();



        //jsonObject.put("resultMsg",enterOtherInfoDao.deleteEnterAcc(accId));
        if (enterFatalSafeInfoDao.deleteEnterFDS(srcId) > 0)
            jsonObject.put("success",true);
        return jsonObject;
    }
}
