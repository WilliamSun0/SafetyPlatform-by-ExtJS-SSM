package ${target_package}.model;

import java.util.ArrayList;
import java.util.List;

public class FatalDangerSourceCriteria {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public FatalDangerSourceCriteria() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andSrcIdIsNull() {
            addCriterion("src_id is null");
            return (Criteria) this;
        }

        public Criteria andSrcIdIsNotNull() {
            addCriterion("src_id is not null");
            return (Criteria) this;
        }

        public Criteria andSrcIdEqualTo(Integer value) {
            addCriterion("src_id =", value, "srcId");
            return (Criteria) this;
        }

        public Criteria andSrcIdNotEqualTo(Integer value) {
            addCriterion("src_id <>", value, "srcId");
            return (Criteria) this;
        }

        public Criteria andSrcIdGreaterThan(Integer value) {
            addCriterion("src_id >", value, "srcId");
            return (Criteria) this;
        }

        public Criteria andSrcIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("src_id >=", value, "srcId");
            return (Criteria) this;
        }

        public Criteria andSrcIdLessThan(Integer value) {
            addCriterion("src_id <", value, "srcId");
            return (Criteria) this;
        }

        public Criteria andSrcIdLessThanOrEqualTo(Integer value) {
            addCriterion("src_id <=", value, "srcId");
            return (Criteria) this;
        }

        public Criteria andSrcIdIn(List<Integer> values) {
            addCriterion("src_id in", values, "srcId");
            return (Criteria) this;
        }

        public Criteria andSrcIdNotIn(List<Integer> values) {
            addCriterion("src_id not in", values, "srcId");
            return (Criteria) this;
        }

        public Criteria andSrcIdBetween(Integer value1, Integer value2) {
            addCriterion("src_id between", value1, value2, "srcId");
            return (Criteria) this;
        }

        public Criteria andSrcIdNotBetween(Integer value1, Integer value2) {
            addCriterion("src_id not between", value1, value2, "srcId");
            return (Criteria) this;
        }

        public Criteria andEnterIdIsNull() {
            addCriterion("enter_id is null");
            return (Criteria) this;
        }

        public Criteria andEnterIdIsNotNull() {
            addCriterion("enter_id is not null");
            return (Criteria) this;
        }

        public Criteria andEnterIdEqualTo(Integer value) {
            addCriterion("enter_id =", value, "enterId");
            return (Criteria) this;
        }

        public Criteria andEnterIdNotEqualTo(Integer value) {
            addCriterion("enter_id <>", value, "enterId");
            return (Criteria) this;
        }

        public Criteria andEnterIdGreaterThan(Integer value) {
            addCriterion("enter_id >", value, "enterId");
            return (Criteria) this;
        }

        public Criteria andEnterIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("enter_id >=", value, "enterId");
            return (Criteria) this;
        }

        public Criteria andEnterIdLessThan(Integer value) {
            addCriterion("enter_id <", value, "enterId");
            return (Criteria) this;
        }

        public Criteria andEnterIdLessThanOrEqualTo(Integer value) {
            addCriterion("enter_id <=", value, "enterId");
            return (Criteria) this;
        }

        public Criteria andEnterIdIn(List<Integer> values) {
            addCriterion("enter_id in", values, "enterId");
            return (Criteria) this;
        }

        public Criteria andEnterIdNotIn(List<Integer> values) {
            addCriterion("enter_id not in", values, "enterId");
            return (Criteria) this;
        }

        public Criteria andEnterIdBetween(Integer value1, Integer value2) {
            addCriterion("enter_id between", value1, value2, "enterId");
            return (Criteria) this;
        }

        public Criteria andEnterIdNotBetween(Integer value1, Integer value2) {
            addCriterion("enter_id not between", value1, value2, "enterId");
            return (Criteria) this;
        }

        public Criteria andSrcNameIsNull() {
            addCriterion("src_name is null");
            return (Criteria) this;
        }

        public Criteria andSrcNameIsNotNull() {
            addCriterion("src_name is not null");
            return (Criteria) this;
        }

        public Criteria andSrcNameEqualTo(String value) {
            addCriterion("src_name =", value, "srcName");
            return (Criteria) this;
        }

        public Criteria andSrcNameNotEqualTo(String value) {
            addCriterion("src_name <>", value, "srcName");
            return (Criteria) this;
        }

        public Criteria andSrcNameGreaterThan(String value) {
            addCriterion("src_name >", value, "srcName");
            return (Criteria) this;
        }

        public Criteria andSrcNameGreaterThanOrEqualTo(String value) {
            addCriterion("src_name >=", value, "srcName");
            return (Criteria) this;
        }

        public Criteria andSrcNameLessThan(String value) {
            addCriterion("src_name <", value, "srcName");
            return (Criteria) this;
        }

        public Criteria andSrcNameLessThanOrEqualTo(String value) {
            addCriterion("src_name <=", value, "srcName");
            return (Criteria) this;
        }

        public Criteria andSrcNameLike(String value) {
            addCriterion("src_name like", value, "srcName");
            return (Criteria) this;
        }

        public Criteria andSrcNameNotLike(String value) {
            addCriterion("src_name not like", value, "srcName");
            return (Criteria) this;
        }

        public Criteria andSrcNameIn(List<String> values) {
            addCriterion("src_name in", values, "srcName");
            return (Criteria) this;
        }

        public Criteria andSrcNameNotIn(List<String> values) {
            addCriterion("src_name not in", values, "srcName");
            return (Criteria) this;
        }

        public Criteria andSrcNameBetween(String value1, String value2) {
            addCriterion("src_name between", value1, value2, "srcName");
            return (Criteria) this;
        }

        public Criteria andSrcNameNotBetween(String value1, String value2) {
            addCriterion("src_name not between", value1, value2, "srcName");
            return (Criteria) this;
        }

        public Criteria andStockNumIsNull() {
            addCriterion("stock_num is null");
            return (Criteria) this;
        }

        public Criteria andStockNumIsNotNull() {
            addCriterion("stock_num is not null");
            return (Criteria) this;
        }

        public Criteria andStockNumEqualTo(Integer value) {
            addCriterion("stock_num =", value, "stockNum");
            return (Criteria) this;
        }

        public Criteria andStockNumNotEqualTo(Integer value) {
            addCriterion("stock_num <>", value, "stockNum");
            return (Criteria) this;
        }

        public Criteria andStockNumGreaterThan(Integer value) {
            addCriterion("stock_num >", value, "stockNum");
            return (Criteria) this;
        }

        public Criteria andStockNumGreaterThanOrEqualTo(Integer value) {
            addCriterion("stock_num >=", value, "stockNum");
            return (Criteria) this;
        }

        public Criteria andStockNumLessThan(Integer value) {
            addCriterion("stock_num <", value, "stockNum");
            return (Criteria) this;
        }

        public Criteria andStockNumLessThanOrEqualTo(Integer value) {
            addCriterion("stock_num <=", value, "stockNum");
            return (Criteria) this;
        }

        public Criteria andStockNumIn(List<Integer> values) {
            addCriterion("stock_num in", values, "stockNum");
            return (Criteria) this;
        }

        public Criteria andStockNumNotIn(List<Integer> values) {
            addCriterion("stock_num not in", values, "stockNum");
            return (Criteria) this;
        }

        public Criteria andStockNumBetween(Integer value1, Integer value2) {
            addCriterion("stock_num between", value1, value2, "stockNum");
            return (Criteria) this;
        }

        public Criteria andStockNumNotBetween(Integer value1, Integer value2) {
            addCriterion("stock_num not between", value1, value2, "stockNum");
            return (Criteria) this;
        }

        public Criteria andCriticalNumIsNull() {
            addCriterion("critical_num is null");
            return (Criteria) this;
        }

        public Criteria andCriticalNumIsNotNull() {
            addCriterion("critical_num is not null");
            return (Criteria) this;
        }

        public Criteria andCriticalNumEqualTo(Integer value) {
            addCriterion("critical_num =", value, "criticalNum");
            return (Criteria) this;
        }

        public Criteria andCriticalNumNotEqualTo(Integer value) {
            addCriterion("critical_num <>", value, "criticalNum");
            return (Criteria) this;
        }

        public Criteria andCriticalNumGreaterThan(Integer value) {
            addCriterion("critical_num >", value, "criticalNum");
            return (Criteria) this;
        }

        public Criteria andCriticalNumGreaterThanOrEqualTo(Integer value) {
            addCriterion("critical_num >=", value, "criticalNum");
            return (Criteria) this;
        }

        public Criteria andCriticalNumLessThan(Integer value) {
            addCriterion("critical_num <", value, "criticalNum");
            return (Criteria) this;
        }

        public Criteria andCriticalNumLessThanOrEqualTo(Integer value) {
            addCriterion("critical_num <=", value, "criticalNum");
            return (Criteria) this;
        }

        public Criteria andCriticalNumIn(List<Integer> values) {
            addCriterion("critical_num in", values, "criticalNum");
            return (Criteria) this;
        }

        public Criteria andCriticalNumNotIn(List<Integer> values) {
            addCriterion("critical_num not in", values, "criticalNum");
            return (Criteria) this;
        }

        public Criteria andCriticalNumBetween(Integer value1, Integer value2) {
            addCriterion("critical_num between", value1, value2, "criticalNum");
            return (Criteria) this;
        }

        public Criteria andCriticalNumNotBetween(Integer value1, Integer value2) {
            addCriterion("critical_num not between", value1, value2, "criticalNum");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}