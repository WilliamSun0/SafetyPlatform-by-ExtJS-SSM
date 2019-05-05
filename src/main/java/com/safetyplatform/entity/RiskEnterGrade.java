package com.safetyplatform.entity;

import java.util.Date;

public class RiskEnterGrade {

    private long enterId;

    private String enterName;
    private int enterIndustryId;

    private String enterIndustry;//所属行业

    private String enterCommunityUrl;

    private String enterCommunity;//社区

    private int riskLevel;

    private int riskNum;//隐患数

    private int majorRiskNum;//重大隐患数

    private boolean fatalDangerSource;//重大危险源

    private boolean highRiskEnterprise;//高危企业

    private boolean dangerChemicalTech;

    private boolean isExecute;//已经执行？

    private boolean restrictedSpace;

    private boolean dustExplosion;

    private int evaluationNum;

    private java.sql.Date lastEvaluationTime;//最后评估时间


    public RiskEnterGrade() {
    }




}
