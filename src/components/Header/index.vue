<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <!-- 声明式导航务必要有to属性 -->
            <!-- <router-link to="/login">登录</router-link> -->
            <!-- <router-link class="register" to="/register">免费注册</router-link> -->
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <!-- <router-link class="logo" title="尚品汇" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>-->
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyWord" />
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch(keyWord)">搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      keyWord: ""
    };
  },
  methods: {
    //搜索按钮的回调函数
    goSearch(keyWord) {
      //路由跳转【编程式导航】
      /* this.$router.push("/search"); */
      /*  this.$router.push({name:"search",params:{keyWord:this.keyWord}}) */
      /* this.$router.push({
        name: "search",
        params: {
          keyword: keyWord
        }
      }); */
      /* if (this.$route.query) {
        //本身点击搜索按钮，当年只是携带params，如果路径当中存在query参数，是需要把query参数页携带给search
        let location = {
          name: "search",
          params: { keyword: keyWord  }
        };
        location.query = this.$route.query;
        console.log(location);
        
        this.$router.push(location);
        console.log(222);
      } */
      if (this.$route.query) {
        //本身点击搜索按钮，当年只是携带params，如果路径当中存在query参数，是需要把query参数页携带给search
        let location = { name: "search", params: { keyword: keyWord } };
        location.query = this.$route.query;
        this.$router.push(location);
      } else {
        let location = { name: "search", params: { keyword: keyWord } };
        this.$router.push(location);
      }
    }
  },
  mounted() {
    //监听自定义事件
    this.$bus.$on("changeKeyword", () => {
      //关键字置空
      this.keyword = "";
    });
  }
};
</script>

<style scoped lang="less">
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
