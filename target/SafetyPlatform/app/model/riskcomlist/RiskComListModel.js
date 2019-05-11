Ext.define("SafetyPlatform.model.riskcomlist.RiskComListModel", {
  extend: "Ext.data.Model",
  fields: [
      { name: 'enterId'},
      { name: 'enterName'},
      { name: 'enterIndustry' },
      { name: 'enterCommunity'},
      { name: 'riskLevel'},
      { name: 'potentialRiskNum' },
      { name: 'majorRiskNum'},
      { name: 'fatalDangerSource'},
      { name: 'highRiskEnterprise' },
      { name: 'dangerChemicalTech'},
      { name: 'isExecute'},
      { name: 'restrictedSpace' },
      { name: 'enterCommunity'},
      { name: 'dustExplosion'},
      //{ name: 'evaluationNum'},
      { name: 'lastEvaluationTime'},
  ]
});