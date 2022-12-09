<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow">
        <h2 class="all" @mouseenter="changeShow">全部商品分类</h2>
        <div class="sort" v-show="show">
          <!-- 事件的委派更加合理一些 -->
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              @mouseenter="changeIndex(index)"
            >
              <h3 :class="{ show: currentIndex === index }">
                <!-- 自定义属性 -->
                <a
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                >{{ c1.categoryName }}</a>
              </h3>
              <!-- 自定义样式 -->
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex === index ? 'block' : 'none' }"
              >
                <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <!-- 自定义属性 -->
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                      >{{ c2.categoryName }}</a>
                    </dt>
                    <dd>
                      <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                        <!-- 自定义属性 -->
                        <a
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                        >{{ c3.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
//按需引入：只是把需要的功能引入进来
import throttle from "lodash/throttle";
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      //索引值的存储
      currentIndex: -1,
      //控制三级联动的显示与隐藏的
      show: true
    };
  },
  //删除created，TypeNav转到App.vue只发送一次请求
  /* created() {
    this.$store.dispatch("getCategory");
  }, */
  computed: {
    ...mapState({
      categoryList: state => state.home.categoryList
    })
  },
  methods: {
    //原本：changeIndex(index){
    //        this.currentIndex = index;
    //     }
    //h3的鼠标移入事件:用户行为如果过快，会出现浏览器反应不过来的现象----【用户行为太快】
    //回调函数里面业务代码很多，卡顿、业务没有完整完成。
    //节流功能
    changeIndex: throttle(function(index) {
      this.currentIndex = index;
    }, 20),
    goSearch(event) {
      //点击a标签进行路由跳转：父节点代理的子节点的类型很多 div h3 dd dt em a
      //通过event可以获取到当前触发事件的节点
      let nodeElement = event.target;
      console.log(nodeElement);
      //给a标签添加自定义属性data-categoryName，保证这个节点带data-categoryName，一定是a标签
      //可以通过节点的dataset属性获取相应节点的自定义属性，返回的是一个对象KV【自定义属性相关的】
      //如果带有categoryname字段的一定是a标签
      let {
        categoryname,
        category1id,
        category2id,
        category3id
      } = nodeElement.dataset;

      if (categoryname) {
        //准备路由跳转的参数
        let location = { name: "search" };
        //第一级分类的a标签
        let query = { y: categoryname };
        if (category1id) {
          /* query = { k: category1id, y: categoryname }; */
          query.k1= category1id
        } else if (category2id) {
          //第二级分类标签
          query.k2= category2id
          /* query = { k: category2id, y: categoryname }; */
        } else {
          //第三级分类标签
          query.k3= category3id
          /* query = { k: category3id, y: categoryname }; */
        }
        /* location.query = query;
        this.$router.push(location); */
        //路由跳转之前：看一下有没有params参数，如果有params参数需要携带给search
        /* if (this.$route.params) {
          //query参数
          location.query = query;
          //params
          location.params = this.$route.params;
          //如有有params参数也需要携带给search模块
          this.$router.push(location);
          console.log(333);
          console.log(location);
          
        } */
        if(this.$route.params){
          //query参数
          location.query = query;
          //params
          location.params=this.$route.params
          //如有有params参数也需要携带给search模块
          this.$router.push(location)
        }
      }
    },
    //修改show的属性的方法（鼠标进入）

    changeShow() {
      if (this.$route.path != "/home") {
        this.show = true;
      }
    },
    //修改show的属性的方法（鼠标离开）
    leaveShow() {
      if (this.$route.path != "/home") {
        this.show = false;
      }
    }
  },
  //进入非home界面是隐藏三级联动
  mounted() {
    if (this.$route.path != "/home") {
      this.show = false;
    }
  }
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
            //对应 <h3 :class="{show:currentIndex===index}">
            &.show {
              background: linear-gradient(
                to right,
                pink,
                yellow,
                cyan,
                blue,
                red
              );
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
