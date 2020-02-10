var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: null,
    passWord: null,
    dropDownMenuTitle:["+86","+90","+00"],
    changePwd:false
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

  },
  changeInput:function(){
    this.setData({changePwd:!this.data.changePwd});
  },
  login: function () {
    app.appData.userInfo = { userName: this.data.userName, passWord: this.data.passWord };
    wx.switchTab({
      url: '../user/user',
    })
    //switchTab:跳转到到tabBar页面，并关闭其他非tabBar页面
  },
  nameInput: function (event) {
    this.setData({ userName: event.detail.value })
  },
  pwdInput: function (event) {
    this.setData({ passWord: event.detail.value })
  }

})