import isEmail from "sane-email-validation";
import validUrl from "valid-url";


//API Url
export const API_URL = "http://127.0.0.1:8080"

//User details
export const User = {

  getString() {
    return localStorage.getItem('string');
  },

  setString(str) {
    localStorage.setItem('string', str);
  },

  getNumber() {
    return localStorage.getItem('num');
  },

  setNumber(num) {
    return localStorage.setItem('num', num);
  },

  getUserId() {
    return localStorage.getItem('userId');
  },

  setUserId(userId) {
    localStorage.setItem('userId', userId);
  },

  setName(name) {
    localStorage.setItem('name', name);
  },

  getName() {
    localStorage.getItem('name');
  },

  setMobile(mobile) {
    localStorage.setItem('mobile', mobile);
  },

  getMobile() {
    localStorage.getItem('mobile');
  },

  setEmail(email) {
    localStorage.setItem('email', email);
  },

  getEmail() {
    localStorage.getItem('email');
  },

  clear() {
    localStorage.clear();
  },

  removeUserId() {
    localStorage.removeItem('userId');
  },

  isLoggedIn(){
    return localStorage.getItem('userId') ? true : false;
  }
}
//Data validation Util goes in here.
export const Validate = {

    url(url) {
      return validUrl.isUri(url);
    },
  
    text(text) {
      if (!text || text.trim() === '') {
        return false;
      }
  
      return true;
    },
  
    email(email) {
      if (this.text(email))
        return isEmail(email);
      return false;
    },
  
    compare(text1, text2) {
      return text1 === text2;
    },
  }
  