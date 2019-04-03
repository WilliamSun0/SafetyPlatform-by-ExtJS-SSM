package com.safetyplatform.service.impl;


import com.safetyplatform.dao.RegionTreeDao;
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

        for(RegionTree pri:list) {
            if (pri.isLeaf()) {
                return list;
            }
            else {
                List<RegionTree> prisNode = regionTreeDao.getChildren(pri.getId());//

                pri.setChildren(diguiInitTree(prisNode));
                menus.add(pri);

            }
        }
        return menus;

    }


}
