// pages/subject/subject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [
     //上课长度全部默认为两节课
      { "xqj": 1, "sksj": 1, "skcd":2, "kcxx": "导论 N318"},
      { "xqj": 1, "sksj": 3, "skcd": 2, "kcxx": ""},
      { "xqj": 1, "sksj": 6, "skcd": 2, "kcxx": "听说英语 N411"},
      { "xqj": 1, "sksj": 8, "skcd": 2, "kcxx":"形政 N111"},
      { "xqj": 1, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 1, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 2, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 2, "sksj": 3, "skcd": 3, "kcxx": "数分 N105" },
      { "xqj": 2, "sksj": 6, "skcd": 2, "kcxx": " " },
      { "xqj": 2, "sksj": 8, "skcd": 1, "kcxx": "" },
      { "xqj": 2, "sksj": 9, "skcd": 2, "kcxx": "" },
      { "xqj": 2, "sksj": 11, "skcd": 3, "kcxx": "线代 N108" },
      { "xqj": 3, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 3, "skcd": 2, "kcxx": "综合英语 N214" },
      { "xqj": 3, "sksj": 6, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 8, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 3, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 4, "sksj": 1, "skcd": 2, "kcxx": "导论 N318" },
      { "xqj": 4, "sksj": 3, "skcd": 2, "kcxx": "" },
      { "xqj": 4, "sksj": 6, "skcd": 3, "kcxx": "数分 N105" },
      { "xqj": 4, "sksj": 9, "skcd": 1, "kcxx": " " },
      { "xqj": 4, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 4, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 5, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 5, "sksj": 3, "skcd": 3, "kcxx": "C++ N207" },
      { "xqj": 5, "sksj": 6, "skcd": 2, "kcxx": "" },
      { "xqj": 5, "sksj": 8, "skcd": 1, "kcxx": "" },
      { "xqj": 5, "sksj": 9, "skcd": 3, "kcxx": "思修 N307" },
      { "xqj": 5, "sksj": 12, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 1, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 3, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 6, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 8, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 6, "sksj": 12, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 1, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 3, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 6, "skcd": 2, "kcxx": " " },
      { "xqj": 7, "sksj": 8, "skcd": 2, "kcxx": "  " },
      { "xqj": 7, "sksj": 10, "skcd": 2, "kcxx": "" },
      { "xqj": 7, "sksj": 12, "skcd": 2, "kcxx": " " }
    ]
  },
  showCardView: function (e) {
    wx.navigateTo({
      url: '../set/set?id=' + e.currentTarget.id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var ukcxx = wx.getStorageSync('kcxx');
    var skcd = wx.getStorageSync('skcd');
    this.setData({ kcxx: kcxx });
    this.setData({ skcd: skcd});
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
