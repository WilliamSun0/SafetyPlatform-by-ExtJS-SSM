package com.safetyplatform.service.OverviewTreeService;

import com.safetyplatform.dao.RegionTreeDao;
import com.safetyplatform.entity.EnterBaseInfo;
import com.safetyplatform.entity.RegionTree;
import com.safetyplatform.entity.enter_info.EnterBusiness;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OverviewTreeServiceImpl implements OverviewTreeService{
    @Autowired
    private RegionTreeDao regionTreeDao;

    public List<RegionTree> getOverviewTrees(){
        //根据登陆者的信息找到组织管辖的区域
        //todo 根据区域id查询tree

        String regionId = "360";

        List<RegionTree> pris = regionTreeDao.getChildren(regionId);
        //存放返回的数据集

        if (pris.isEmpty()){
            return regionTreeDao.getRegionById(regionId);
        }
        String regionURl = "";
        List<RegionTree> menus = diguiInitTree(pris);

        if (menus != null) {
            return menus;
        } else {
            return null;
        }
    }


    private List<RegionTree> diguiInitTree(List<RegionTree> list) {//递归的加载树状图
        List<RegionTree> menus = new ArrayList<RegionTree>();

        List<RegionTree> children = new ArrayList<RegionTree>();


        for (RegionTree pri : list) {

            children = regionTreeDao.getChildren(pri.getId());
            if (children.isEmpty()) {
                pri.setLeaf(true);
                menus.add(pri);
            }
            else {
                pri.setChildren(diguiInitTree(children));
                menus.add(pri);
            }

        }
        return menus;
    }
}
