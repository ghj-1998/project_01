<template>
  <div class="main">
    <!-- <el-form ref="form" v-model="form">
            <el-form-item label="账号">
                <el-input type="text" placeholder="请输入用户名" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-buttom type="primary" @click="onSubmimt">登录</el-buttom>
            </el-form-item>
        </el-form> -->

    <!-- <img src="../img/background.jpg" alt=""> -->

    <!-- 背景 -->
    <div>
      <!-- 登录框 -->
      <div class="loginFrame">
        <!-- 标题 -->
        <p class="loginTitle">南昌高新区美术馆智能线上展览平台</p>
        <!-- 用户名 -->
        <div class="user">
          <label for="">
            <!-- 用于占位，后续添加图标 -->
            <span>
              <svg
                t="1645494767096"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2012"
                width="20"
                height="20"
              >
                <path
                  d="M642.8 531.8c64.3-42.6 106.9-115.4 106.9-198.1C749.7 202.6 643.1 96 512 96S274.3 202.6 274.3 333.7c0 82.7 42.6 155.6 106.9 198.1C215.8 582.9 96 727.7 96 898.3c0 16.4 13.3 29.7 29.7 29.7s29.7-13.3 29.7-29.7c0-180.2 159.9-326.9 356.6-326.9 196.6 0 356.6 146.6 356.6 326.9 0 16.4 13.3 29.7 29.7 29.7s29.7-13.3 29.7-29.7c0-170.6-119.8-315.4-285.2-366.5zM333.7 333.7c0-98.3 80-178.3 178.3-178.3s178.3 80 178.3 178.3S610.3 512 512 512s-178.3-80-178.3-178.3z"
                  fill="#ffffff"
                  p-id="2013"
                ></path>
              </svg>
            </span>
            <span>用户名</span>
            <!-- 输入框 -->
            <input type="text" placeholder="UserName" />
          </label>
        </div>
        <!-- 密码 -->
        <div class="password">
          <label for="">
            <!-- 用于占位，后续添加图标 -->
            <span>
              <svg
                t="1645494999559"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3471"
                width="20"
                height="20"
              >
                <path
                  d="M760.171097 415.494703 346.927843 415.494703l0-67.441135c0-91.90006 74.809514-166.709574 166.811913-166.709574 92.002399 0 166.811913 74.911853 166.811913 166.914251 0 12.485309 10.029182 22.514491 22.514491 22.514491s22.514491-10.029182 22.514491-22.514491c0-116.870678-95.072556-211.943234-211.840895-211.943234-56.593244 0-109.809314 22.002798-149.823706 62.01719-40.014391 40.014391-62.01719 93.128123-62.01719 149.721367L301.898861 415.494703l-47.485109 0c-27.631421 0-49.736558 22.105137-49.736558 49.634219l0 341.913252c0 27.631421 22.207476 50.452928 49.736558 50.452928l505.655007 0c27.631421 0 50.35059-22.821507 50.35059-50.452928L810.419348 465.128923C810.521687 437.59984 787.802518 415.494703 760.171097 415.494703zM765.492704 807.553868c0 2.763142-2.251449 5.014591-5.014591 5.014591L254.720768 812.568459c-2.763142 0-5.014591-2.251449-5.014591-5.014591L249.706176 465.538277c0-2.763142 2.251449-5.014591 5.014591-5.014591l505.655007 0c2.763142 0 5.014591 2.251449 5.014591 5.014591L765.390366 807.553868zM503.505896 532.160704c-25.482311 0-46.052369 20.570058-46.052369 46.052369 0 16.78353 9.005797 31.520288 22.514491 39.605037L479.968019 707.159704c0 12.38297 10.131521 22.514491 22.514491 22.514491s22.514491-10.131521 22.514491-22.514491l0-88.21587c14.634419-7.675395 24.561263-23.026184 24.561263-40.730762C549.558265 552.730762 528.988207 532.160704 503.505896 532.160704z"
                  p-id="3472"
                  fill="#ffffff"
                ></path>
              </svg>
            </span>
            <span>密码</span>
            <!-- 输入框 -->
            <input type="password" placeholder="PassWord" />
          </label>
        </div>
        <div class="button">
          <!-- 登录按钮 -->
          <div class="enterBut">
            <span>登录</span>
          </div>
          <!-- 注册按钮 -->
          <div class="registerBut">
            <span>注册</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    onsubmit() {
      alert("Hello");
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}
/* 添加背景图片 */
.main {
  width: 100%;
  height: 900px;
  background: url("../img/background.jpg") no-repeat;
  background-size: 100% 100%;
  /* border: 2px red solid; */
}
/* 让输入框居中 */
.loginFrame {
  width: 700px;
  height: 400px;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  /* 添加边框圆角 */
  /* border: 5px red solid; */
  border-radius: 10px;

  /* 添加边距挤下去 */
  padding: 50px;
  /* border: 2px red solid; */
  box-sizing: border-box;
  /* 添加阴影 */
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.4);
}

/* 改变盒子下方的输入框位置 */
.loginFrame > div {
  width: 350px;
  height: 50px;
  margin: 40px auto;
  /* 改变字体颜色 */
  color: white;
}

/* 改变标题居中，并且改变颜色 */
.loginFrame > p {
  text-align: center;
  color: white;
  font-size: 25px;
}

/* 改变输入框文字 */
.loginFrame > div span {
  display: inline-block;
  cursor: pointer;
  font-size: 20px;
}

/* 改变输入框样式 */
.loginFrame > div input {
  width: 100%;
  height: 30px;
  /* font-size: 20px; */
  /* 透明色 */
  background: transparent;
  /* 清除默认边框 */
  border: none;
  /* 添加底部边框 */
  border-bottom: 1px solid white;
  /* 清除蓝色点击框 */
  outline: none;
  /* 改变文字颜色 */
  color: white;
}
/* 改变点击按钮登录样式 */
.loginFrame .enterBut,
.loginFrame .registerBut {
  /* border: 5px blue solid; */
  width: 200px;
  height: 50px;
  /* 添加圆角 */
  border-radius: 50px;
  /* 设置背景颜色，渐变 */
  background-image: linear-gradient(to right, #c979d4, #fa719d);
  text-align: center;
  padding-top: 10px;
  margin-right: 5px;
  box-sizing: border-box;
  font-size: 20px;
  /* 光标指在按钮处显示为一只小手 */
  cursor: pointer;
  /* display:inline; */
  float: left;
}

/* 给两个按钮设置左浮动 */
.loginFrame .button {
  /* border: 5px red solid; */
  width: 410px;
  /* text-align: center; */
  /* float: left; */
  /* display:flex; */
  /* just-content:center; */
}
/* 给登录按钮添加，鼠标放上效果 */
.loginFrame .enterBut:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) inset;
}
/* 给注册按钮添加，鼠标放上效果 */
.loginFrame .registerBut:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) inset;
}

/* 给输入框提醒文字改变颜色 */
/* 适配容器 */
input::-webkit-input-placeholder{
  color: #bdcada;
}

svg{
  vertical-align: middle;
}
</style>