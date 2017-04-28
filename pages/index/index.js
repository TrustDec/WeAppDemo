Page({
  data: {
    hasLocation: false,
  },
  onLoad(){
    this.test();
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文 
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  test(){
    wx.getLocation( {
      type: 'gcj02',
      success: ( res )=> {
        console.log( res )
        this.setData( {
          hasLocation: true,
            longitude: res.longitude,
            latitude: res.latitude
        })
      },
      speed:1.5,
      accuracy:50
    })
  }
  
})