//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['关注', '推荐', '热榜'],
    currentTab: 0,
    cardList: [
      {
        touxiang:'/assert/images/ribao.jpg',
        name1: '知乎日报',
        description:'17分钟前·赞同了回答',
        name2:'《上错花轿嫁对郎》是部怎样的电视剧？',
        name3:'草莓霸王:',
        content:'abchdjiasfbilafbibj;dbvjdbcjdklbjdbcjlbajlbfcabhlbvhblvdlhbvdhlbfalfhalfnaovnbcojabneoubf...',
        content1: '/assert/images/ribao.jpg'
      }, {
        name: 'bb',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      },
    ]
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  toDetailPage:function(e){
    wx.navigateTo({
      url: '../index_detail/index_detail',
      complete: (res) => {},
      events: events,
      fail: (res) => {},
      success: (result) => {},
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