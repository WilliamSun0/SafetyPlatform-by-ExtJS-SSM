package com.safetyplatform.web;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.safetyplatform.entity.LoginInfo;
import com.safetyplatform.service.LoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
//@RequestMapping("/SafetyPlatform")
public class LoginController {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private LoginService loginService;
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    @ResponseBody
    public JSONObject login(LoginInfo loginInfo){

        JSONObject jsonObject = new JSONObject();
        //JSONObject menus = new JSONObject();
        int[] menus = new int[2];
        menus[0] =3;
        menus[1] = 4;

        jsonObject.put("success", true);
        jsonObject.put("restMsg", loginInfo.getUserName());
        //jsonObject.put("userInfo", );

        logger.info(loginInfo.getUserName());

        jsonObject.put("exclusiveMenus",JSON.toJSONString(menus));
        //还应返回登录信息（部门姓名等等）
        return jsonObject;

    }
}
