package ${target_package}.model;

import java.io.Serializable;

public class FatalDangerSource implements Serializable {
    private Integer srcId;

    private Integer enterId;

    private String srcName;

    private Integer stockNum;

    private Integer criticalNum;

    private static final long serialVersionUID = 1L;

    public Integer getSrcId() {
        return srcId;
    }

    public void setSrcId(Integer srcId) {
        this.srcId = srcId;
    }

    public Integer getEnterId() {
        return enterId;
    }

    public void setEnterId(Integer enterId) {
        this.enterId = enterId;
    }

    public String getSrcName() {
        return srcName;
    }

    public void setSrcName(String srcName) {
        this.srcName = srcName == null ? null : srcName.trim();
    }

    public Integer getStockNum() {
        return stockNum;
    }

    public void setStockNum(Integer stockNum) {
        this.stockNum = stockNum;
    }

    public Integer getCriticalNum() {
        return criticalNum;
    }

    public void setCriticalNum(Integer criticalNum) {
        this.criticalNum = criticalNum;
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        FatalDangerSource other = (FatalDangerSource) that;
        return (this.getSrcId() == null ? other.getSrcId() == null : this.getSrcId().equals(other.getSrcId()))
            && (this.getEnterId() == null ? other.getEnterId() == null : this.getEnterId().equals(other.getEnterId()))
            && (this.getSrcName() == null ? other.getSrcName() == null : this.getSrcName().equals(other.getSrcName()))
            && (this.getStockNum() == null ? other.getStockNum() == null : this.getStockNum().equals(other.getStockNum()))
            && (this.getCriticalNum() == null ? other.getCriticalNum() == null : this.getCriticalNum().equals(other.getCriticalNum()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getSrcId() == null) ? 0 : getSrcId().hashCode());
        result = prime * result + ((getEnterId() == null) ? 0 : getEnterId().hashCode());
        result = prime * result + ((getSrcName() == null) ? 0 : getSrcName().hashCode());
        result = prime * result + ((getStockNum() == null) ? 0 : getStockNum().hashCode());
        result = prime * result + ((getCriticalNum() == null) ? 0 : getCriticalNum().hashCode());
        return result;
    }
}