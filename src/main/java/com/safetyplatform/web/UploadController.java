package com.safetyplatform.web;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.safetyplatform.dao.EnterOtherInfoDao;
import com.safetyplatform.dao.HiddenRiskCheckCorrectDao;
import com.safetyplatform.entity.enter_info.EnterpriseOtherInfo;
import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;

@Controller
public class UploadController {

    @Autowired
    private HiddenRiskCheckCorrectDao hiddenRiskCheckCorrectDao;
    @Autowired
    private EnterOtherInfoDao enterOtherInfoDao;
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

        EnterpriseOtherInfo enterpriseOtherInfo = new EnterpriseOtherInfo();
        enterpriseOtherInfo.setEnterId(Long.parseLong(enterId));
        System.out.println(enterId);
        enterpriseOtherInfo.setPlaneImg(mypath+filename);
        enterOtherInfoDao.updateEnterOtherInfo(enterpriseOtherInfo);

        if (useType.equals("check")) {

            //还没有这个隐患记录就新增一个
            if (uid == 0) {
                hiddenRiskCheckCorrectDao.insertHiddenRiskCheck(Integer.parseInt(enterId), riskId, mypath+filename);
            }else{
                hiddenRiskCheckCorrectDao.updateHiddenRiskCheck(uid,Integer.parseInt(enterId), riskId, mypath+filename);
            }

        }
        else if (useType.equals("plane")){

            mypath = "/images/"+enterId+"/";
            filename ="平面图像.jpg";
            enterpriseOtherInfo.setPlaneImg(mypath+filename);
            enterOtherInfoDao.updateEnterOtherInfo(enterpriseOtherInfo);
        }else if (useType.equals("fire")){
            mypath = "/images/"+enterId+"/";
            filename ="消防图像.jpg";
            enterpriseOtherInfo.setFireImg(mypath+filename);
            enterOtherInfoDao.updateEnterOtherInfo(enterpriseOtherInfo);
        }

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


    @RequestMapping(value="/img/download")
    public ResponseEntity<byte[]> download(HttpServletRequest request,
                                           @RequestParam("enterId") String enterId,
                                           @RequestParam("imgType") int imgType

                                           )throws Exception {
        //下载文件路径
        String path = request.getServletContext().getRealPath("/images/"+enterId);
        String filename = "";
        if (imgType == 0){
            filename = "平面图像.jpg";
        }else if (imgType == 1){
            filename = "消防图像.jpg";
        }

        File file = new File(path + File.separator + filename);
        HttpHeaders headers = new HttpHeaders();
        //下载显示的文件名，解决中文名称乱码问题
        String downloadFielName = new String(filename.getBytes("UTF-8"),"iso-8859-1");
        //通知浏览器以attachment（下载方式）打开图片
        headers.setContentDispositionFormData("attachment", downloadFielName);
        //application/octet-stream ： 二进制流数据（最常见的文件下载）。
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        return new ResponseEntity<byte[]>(FileUtils.readFileToByteArray(file),
                headers, HttpStatus.CREATED);
    }





    //上传文件会自动绑定到MultipartFile中
    @RequestMapping(value="/File/multiUpload",method=RequestMethod.POST,produces = {"application/Json;charset=UTF-8"})
    @ResponseBody
    public JSON multipload(HttpServletRequest request,
                       @RequestParam("file") MultipartFile file,
                       @RequestParam("exeId") long exeId,
                           @RequestParam("enterId") long enterId
    ) throws Exception {

        JSONObject jsonObject = new JSONObject();

        if (request.getCharacterEncoding() == null) {
            request.setCharacterEncoding("UTF-8");
        }

        String filename = file.getOriginalFilename();

        String mypath = "/upLoadFile/"+enterId+"/"+exeId+"/";

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


}
