package com.safetyplatform.service.impl;


import com.safetyplatform.dao.RegionTreeDao;
import com.safetyplatform.entity.EnterBaseInfo;
import com.safetyplatform.entity.EnterBusiness;
import com.safetyplatform.entity.RegionTree;
import com.safetyplatform.service.RegionTreeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RegionTreeServiceImpl implements RegionTreeService {

    @Autowired
    private RegionTreeDao regionTreeDao;


    public List getAllRegionTrees() {
        List<RegionTree> pris = regionTreeDao.getFather();
        //存放返回的数据集

        String regionURl = "";
        List<RegionTree> menus = diguiInitTree(pris);

        //diguiInitTree(pris);


        System.out.println(menus);

        if (menus != null || menus.size() > 0) {
            return menus;
        } else {
            return null;
        }
    }




    private List<RegionTree> diguiInitTree(List<RegionTree> list){//递归的加载树状图
        List<RegionTree> menus = new ArrayList<RegionTree>();
        List<RegionTree> tempList = new ArrayList<RegionTree>();
        RegionTree temp = new RegionTree();
        List<RegionTree> businessList = new ArrayList<RegionTree>();
        RegionTree business = new RegionTree();
        List<RegionTree> children = new ArrayList<RegionTree>();
        RegionTree object = new RegionTree();
        RegionTree object2 = new RegionTree();
        RegionTree object3 = new RegionTree();
        RegionTree object4 = new RegionTree();
        RegionTree object5 = new RegionTree();

        List<RegionTree> objectList = new ArrayList<RegionTree>();
        //int x = 0;
        for(RegionTree pri:list) {
            children = regionTreeDao.getChildren(pri.getId());
//            x++;
//            if(x  == 1 ){
//                regionUrl = regionUrl.concat(pri.getRegionUrl());
//            }
            //regionUrl = regionUrl.concat(pri.getRegionUrl());
            if (children.isEmpty()) {

                //List<EnterBaseInfo> ebiList =
                for(EnterBaseInfo ebi:regionTreeDao.getEnterListByZoneId(pri.getRegionUrl())){
                    temp.setRegionUrl(String.valueOf(ebi.getEnterId()));
                    temp.setText(ebi.getName());
                    temp.setType(5);


                    for(EnterBusiness eb:regionTreeDao.getEnterBusinessByEnterId(ebi.getEnterId())) {
                        business.setRegionUrl(String.valueOf(eb.getTypeId()));
                        business.setText(eb.getTypeName());
                        business.setType(6);
                        business.setLeaf(false);

                        if(eb.getTypeName().equals("餐饮")){
                            object.setRegionUrl("zyjk");
                            object.setText("职业健康");
                            object.setType(7);
                            object.setLeaf(true);
                            objectList.add(object);
                            object2.setRegionUrl("aqgl");
                            object2.setText("安全管理");
                            object2.setType(7);
                            object2.setLeaf(true);
                            objectList.add(object2);
                            object3.setRegionUrl("tzsb");
                            object3.setText("特种设备");
                            object3.setType(7);
                            object3.setLeaf(true);
                            objectList.add(object3);
                            object4.setRegionUrl("dqaq");
                            object4.setText("电气安全");
                            object4.setType(7);
                            object4.setLeaf(true);
                            objectList.add(object4);
                            object5.setRegionUrl("xfaq");
                            object5.setText("消防安全");
                            object5.setType(7);
                            object5.setLeaf(true);
                            objectList.add(object5);


                            business.setChildren(objectList);
                        }
                        businessList.add(business);

                    }
                    temp.setChildren(businessList);
                    tempList.add(temp);
                }

                pri.setLeaf(false);
                pri.setChildren(tempList);
                return list;
            }
            else {
                List<RegionTree> prisNode = children;//

                pri.setChildren(diguiInitTree(prisNode));
                menus.add(pri);
            }
        }
        return menus;

    }


}
