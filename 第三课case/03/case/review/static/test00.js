$(function () {
    $(".name input").focus(function () {
        $(this).prev("i").css({"background-image": "url(static/img/user2.png)"});
    });
    $(".name input").blur(function () {
        $(this).prev("i").css({"background-image": "url(static/img/user1.png)"});
    });
    $(".password input").focus(function () {
        $(this).prev("i").css({"background-image": "url(static/img/password2.png)"});
    });
    $(".password input").blur(function () {
        $(this).prev("i").css({"background-image": "url(static/img/password1.png)"});
    });
});

// 已知用户名
var username = "大雨"
// 已知密码
var password = "dayu123"

// 请在下方书写你的代码
$(document).ready(function(){
    $("#image_sub").click(function(){
        var name = $("#userName").val();
        var pwd = $("#password").val();
        //判断用户名是否为空，为空就弹出提示框"请输入用户名"，否则正常执行下面的代码。
        if (name == ""){
            alert("请输入用户名！");
            form1.userName.focus();
        //判断密码是否为空，为空就弹出提示框"请输入密码"，否则正常执行下面的代码。
        } else if (pwd == ""){
            alert("请输入密码！");
            form1.pwd.focus();
        //如果用户名、密码都正常输入，则提交表单，浏览器经打开新的（主页）窗口。
        } else {
            if (name == username){
                if (pwd == password){
                    alert("登录成功!");
                }
                else{
                    alert("密码错误！");
                }
            }
            else{
                alert("用户名错误！")
            }
        }
    })
})

