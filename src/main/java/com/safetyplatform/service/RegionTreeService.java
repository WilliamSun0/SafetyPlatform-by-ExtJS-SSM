package com.safetyplatform.service;


import com.safetyplatform.entity.RegionTree;

import java.util.List;

public interface RegionTreeService {

    /**
     * 根据父级菜单的id获取其下的子菜单
     */
    //List<RegionTree> getMenuByParentId(Integer pid);

//    /**
//     * 判断用户是否拥有某项权限
//     * @param sysOper 登陆的操作员
//     * @param menuId 权限对应的id
//     */
//    boolean hasPermission(Systemoper sysOper,Integer menuId);
//
//    /**
//     * 判断角色是否拥有某项权限
//     */
//    boolean hasPermission(Role role,Integer menuId);
//
    /**
     * 返回全部权限(菜单)数据给前台

     */
    List<RegionTree> getAllRegionTrees();

}