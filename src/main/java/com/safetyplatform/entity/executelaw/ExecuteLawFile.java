package com.safetyplatform.entity.executelaw;


public class ExecuteLawFile {

  private long fileId;
  private long exeId;
  private String fileName;
  private String fileLocation;

  public ExecuteLawFile() {
  }

  public long getFileId() {
    return fileId;
  }

  public void setFileId(long fileId) {
    this.fileId = fileId;
  }


  public long getExeId() {
    return exeId;
  }

  public void setExeId(long exeId) {
    this.exeId = exeId;
  }


  public String getFileName() {
    return fileName;
  }

  public void setFileName(String fileName) {
    this.fileName = fileName;
  }


  public String getFileLocation() {
    return fileLocation;
  }

  public void setFileLocation(String fileLocation) {
    this.fileLocation = fileLocation;
  }

}
