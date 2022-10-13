
//自定义变量，存储用户输入的密码
let password = ''
Page({
  getPassword(e){
    console.log("用户输入的密码",e.detail.value);
    password = e.detail.value
  },
  //登录功能
  loadByAccount(){
      //校验密码是否等于数据库中的密码
      if(password=="032002216"){
        console.log("登录成功");
        //显示登录成功提示
        wx.showToast({
          title: '登录成功',
          icon:"success",
          duration:2000,
          //提示2秒后自动跳转到首页
          success:function(){
            setTimeout(function(){
              wx.navigateTo({
              url: '/first/first',
              })
            },2000)
          }
        })
      }else{
        console.log("密码不正确，登录失败");
        wx.showToast({
          title: '密码不正确',
          icon:"none"
        })
      }
    }
  },)