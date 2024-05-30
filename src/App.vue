<template>
  <div class="app">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="220px">
        <div class="cebian">

          <!-- 再嵌套一个容器 -->
          <el-container>
            <!-- 侧边栏的头 -->
            <el-header>
              <h3 class="mb-2">
                <el-icon>
                  <Guide />
                </el-icon>
                艺术设计辅助平台
              </h3>
            </el-header>

            <!-- 侧边栏的主体 -->
            <el-main class="daohang">
              <!-- 引入菜单导航组件 -->
              <Cebianlan />
            </el-main>

            <!-- 侧边栏的脚 -->
            <el-footer class="jiao">
              <el-icon class="wodetubiao">
                <User />
              </el-icon>
              {{ userStore.nicheng }}
              <RouterLink to="/setting">
                <el-button @click="shezhi" class="shezhi">
                  <el-icon>
                    <MoreFilled />
                  </el-icon>
                </el-button>
              </RouterLink>
            </el-footer>

          </el-container>
        </div>
      </el-aside>

      <!-- 主内容区 -->
      <el-main class="zhuneirong">
        <!-- //写东西-->
        <RouterView></RouterView>
        <!-- 下面一行是测试用的，最后注释掉 -->
        <!-- <TEST /> -->
        <!-- <Setting /> -->
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import { Guide, User } from '@element-plus/icons-vue' // 引入图标
  import { RouterView, RouterLink } from "vue-router"

  import { useUserStore } from "@/stores/user"; // 引入userStore
  const userStore = useUserStore()  //使用userStore

  import Cebianlan from './components/Cebianlan.vue'    // 引入组件
  import Setting from "./views/Setting.vue";
  import TEST from './components/Test.vue'

  //方法
  function shezhi() {
    console.log('设置')
  }
</script>

<style scoped>
  .app {
    display: flex;
  }

  .cebian {
    /* 给一个颜色 */
    background-color: #f4f4f5;
    /* 给一个圆角边框 */
    border-radius: 12px;
    /* 给圆角边框一个颜色 */
    border: 1px solid #ccc;
    /* 边框高度：视口高度*/
    height: 97vh;
    /* flex要在父元素中打开 */
    display: flex;
  }

  .daohang {
    /* 上边距 */
    margin-top: 20px;
  }

  .jiao {
    display: flex;

  }

  .wodetubiao {
    margin-right: 10px;
  }

  .shezhi {
    margin-left: 20px;
  }

  .zhuneirong {
    border-radius: 12px;
    /* 给圆角边框一个颜色 */
    border: 1px solid #ccc;
    /* 左边距为20px */
    margin-left: 10px;
  }
</style>