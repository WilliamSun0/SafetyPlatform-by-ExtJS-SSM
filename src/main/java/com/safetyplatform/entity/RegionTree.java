package com.safetyplatform.entity;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class RegionTree {
    private String id;//节点id
    private String text;//节点名称
    private boolean leaf;//是否为子节点
    private String regionUrl;//节点点击的请求路径
    private String cls;//节点的图标，folder还是file
    private String fatherId;//父级菜单
    private List<RegionTree> children;//子菜单
    //getter...setter


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public boolean isLeaf() {
        return leaf;
    }

    public void setLeaf(boolean leaf) {
        this.leaf = leaf;
    }

    public String getRegionUrl() {
        return regionUrl;
    }

    public void setRegionUrl(String regionUrl) {
        this.regionUrl = regionUrl;
    }

    public String getCls() {
        return cls;
    }

    public void setCls(String cls) {
        this.cls = cls;
    }

    public String getFatherId() {
        return fatherId;
    }

    public void setFatherId(String fatherId) {
        this.fatherId = fatherId;
    }

    public List<RegionTree> getChildren() {
        return children;
    }

    public void setChildren(List<RegionTree> children) {
        this.children = children;
    }
}
