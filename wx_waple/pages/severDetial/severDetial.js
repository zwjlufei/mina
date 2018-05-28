const app = getApp()
var URL = app.globalData.URL
var request = require('../common/request')
Page({
  data: {
    hasMargin: app.globalData.hasMargin,
    serverState:"",
    top:{},
    center:{},
    foot:{}
  },

  onLoad: function (options) {
    console.log('id', options.id)
    var url = `${URL}/users/45126?action_type=detail&action=myserverdetail&object_id=` + options.id;
    request.request(url, 'GET', {})
      .then((res) => {
        console.log('服务详情', res)
        var center = res.data.data.center;
        center.birday=center.birday.substr(0, 10)
        this.setData({
          top: res.data.data.top,
          center: center,
          foot: res.data.data.foot
        })
      })
      .catch((error) => {
        console.log(error)
      })
  },
  goPsact:function(){
    console.log(555)
    wx.navigateTo({
      url: 'http://400.youfumama.com/contract/electronic/51',
    })
  },
  // 拨打电话
  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.foot.manager.phone
    })
  },
  //底部跳转 
  goIndex: function () {
    wx.switchTab({
      url: '../index/index',
    })
  },
  goWaiter: function () {
    wx.switchTab({
      url: '../waiter/waiter',
    })
  }
})