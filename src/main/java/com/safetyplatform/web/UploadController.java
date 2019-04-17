package com.safetyplatform.web;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.safetyplatform.dao.HiddenRiskCheckCorrectDao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.util.Map;

@Controller
public class UploadController {

    @Autowired
    private HiddenRiskCheckCorrectDao hiddenRiskCheckCorrectDao;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    //上传文件会自动绑定到MultipartFile中
    @RequestMapping(value="/upload",method=RequestMethod.POST,produces = {"application/Json;charset=UTF-8"})
    @ResponseBody
    public JSON upload(HttpServletRequest request,
                       @RequestParam("file") MultipartFile file,
                       @RequestParam("useType") String useType,
                       @RequestParam("enterId") String enterId,
                       @RequestParam("riskId") int riskId,
                       @RequestParam("uid") int uid
                       ) throws Exception {

        JSONObject jsonObject = new JSONObject();

        if (request.getCharacterEncoding() == null) {
            request.setCharacterEncoding("UTF-8");
        }

        String filename = file.getOriginalFilename();

        String mypath = "/images/"+enterId+"/"+String.valueOf(riskId)+"/";
        if (useType.equals("check")) {

            //还没有这个隐患记录就新增一个
            if (uid == 0) {
                hiddenRiskCheckCorrectDao.insertHiddenRiskCheck(Integer.parseInt(enterId), riskId, mypath+filename);
            }else{
                hiddenRiskCheckCorrectDao.updateHiddenRiskCheck(uid,Integer.parseInt(enterId), riskId, mypath+filename);
            }

        }

//        if (useType.equals("correct")) {
//
//
//            //还没有这个隐患记录就新增一个
//            if (uid == 0) {
//                hiddenRiskCheckCorrectDao.insertHiddenRiskCheck(Integer.parseInt(enterId), riskId, mypath);
//            }else{
//                hiddenRiskCheckCorrectDao.updateHiddenRiskCheck(uid,Integer.parseInt(enterId), riskId, mypath);
//            }
//
//        }
//如果文件不为空，写入上传路径
        if (!file.isEmpty()) {

            //自定义分企业时间对应的目录下

            //上传文件路径
            String path = request.getServletContext().getRealPath(mypath);
            //上传文件名
            File filepath = new File(path, filename);
            //判断路径是否存在，如果不存在就创建一个
            if (!filepath.getParentFile().exists()) {
                filepath.getParentFile().mkdirs();
            }
            //将上传文件保存到一个目标文件当中
            file.transferTo(new File(path + File.separator + filename));

            jsonObject.put("success", true);
            jsonObject.put("fileName",mypath+filename);
            System.out.println(filename);
        } else {
            jsonObject.put("failure", true);
        }


        return  jsonObject;
    }


//    @RequestMapping(value="/hcc/saveHiddenCheckImg",method=RequestMethod.POST)
//    @ResponseBody
//    public Map<String,Object> saveHiddenCheckImg(@RequestParam("file") MultipartFile file) throws Exception {
//
//
//
//
//    }

}