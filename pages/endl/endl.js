Page({
data:{},
onLoad:function(options)
{
  this.setData({
    mid1:options.id_1,
    mid2:options.id_2,
    mid3:options.id_3,
    mid4:options.id_4,
    mid5:options.id_5,
  })
},
onShareAppMessage:function(){
  return{
    title:this.data.mid2+"个人信息"
  }
},
tel:function () {
  wx.makePhoneCall({
    phoneNumber: this.data.mid5,
  })
}
})