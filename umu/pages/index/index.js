// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [{
      url: '/assert/images/lunbo1.jpg'
    },
    {
      url: '/assert/images/lunbo2.jpg'
    },
    {
      url: '/assert/images/lunbo3.jpg'
    }
  ]
  },
  toClass:function(e){
    wx.navigateTo({
      url: '/pages/my_class/my_class',
    })
  },
  toTesting:function(e){
    wx.navigateTo({
      url: '/pages/testing/testing',
    })
  },
  
  toSpeech:function(e){
    wx.navigateTo({
      url: '/pages',
    })
  },
  
  toStudyGroup:function(e){
    wx.navigateTo({
      url: '/pages',
    })
  },
  
  toRegisteredCourse:function(e){
    wx.navigateTo({
      url: '/pages',
    })
  },
  
  toStudyHistory:function(e){
    wx.navigateTo({
      url: '/pages',
    })
  },
  
  toPersonalHomepage:function(e){
    wx.navigateTo({
      url: '/pages',
    })
  },
  
  toMyPrivilege:function(e){
    wx.navigateTo({
      url: '/pages',
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