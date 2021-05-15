package com.spring.model;

public class ChangePassword {
    private String oldPassword="";
    private String newPassword="";
    private String rnewPassword="";

    public ChangePassword() {
    }

    public ChangePassword(String oldPassword, String newPassword, String rnewPassword) {
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
        this.rnewPassword = rnewPassword;
    }

    public String getOldPassword() {
        return oldPassword;
    }

    public void setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

    public String getRnewPassword() {
        return rnewPassword;
    }

    public void setRnewPassword(String rnewPassword) {
        this.rnewPassword = rnewPassword;
    }
}
