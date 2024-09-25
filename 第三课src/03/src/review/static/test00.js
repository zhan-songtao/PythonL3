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
var username = "大雨";
// 已知密码
var password = "dayu123";

// 请在下方书写你的代码


        //判断用户名是否为空，为空就弹出提示框"请输入用户名"，否则正常执行下面的代码。


        //判断密码是否为空，为空就弹出提示框"请输入密码"，否则正常执行下面的代码。


        //如果用户名、密码都正常输入，则提交表单，浏览器经打开新的（主页）窗口。


