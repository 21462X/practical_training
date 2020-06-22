// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  toPersonalHomepage:function(e){
    wx.navigateTo({
      url: '/pages/personal_homePage/personal_homePage',
    })
  },
  
  toattentionPage:function(e){
    wx.navigateTo({
      url: '/pages/attention_page/attention_page',
    })
  },

  toClass:function(e){
    wx.navigateTo({
      url: '/pages/my_class/my_class',
    })
  },
  toMyPrivilege:function(e){
    wx.navigateTo({
      url: '/pages/my_privilege/my_privilege',
    })
  },
  
  tobind:function(e){
    wx.navigateTo({
      url: '/pages/bind/bind',
    })
  },
  
  tocollect:function(e){
    wx.navigateTo({
      url: '/pages/collect/collect',
    })
  },
  toquestionBook:function(e){
    wx.navigateTo({
      url: '/pages/question_book/question_book',
    })
  },
  topersonal:function(e){
    wx.navigateTo({
      url: '/pages/personal/personal',
    })
  },
  tomodel:function(e){
    wx.navigateTo({
      url: '/pages/model/model',
    })
  },
  tosecurity:function(e){
    wx.navigateTo({
      url: '/pages/security/security',
    })
  },
  tosetting:function(e){
    wx.navigateTo({
      url: '/pages/setting/setting',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})