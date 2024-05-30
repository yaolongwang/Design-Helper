<template>
  <el-container>
    <el-header>
      <h2>设计要素拆解</h2>
    </el-header>
    <el-main>

      <div class="juzhong">
        <el-form :model="yaosuform" label-width="auto" style="max-width: 600px" size="large">

          <el-form-item label="设计类别">
            <el-select v-model="yaosuform.class" placeholder="请选择设计类别">
              <el-option label="产品设计" value="产品设计" />
              <el-option label="视觉传达设计" value="视觉传达设计" />
              <el-option label="环境设计" value="环境设计" />
              <el-option label="交互设计" value="交互设计" />
            </el-select>
          </el-form-item>

          <el-form-item label="设计内容">
            <el-input v-model="yaosuform.content" />
          </el-form-item>
          <!-- 按钮 -->
          <el-form-item>
            <div class="anniu">
              <el-button type="primary" @click="chaiJie">要素拆解</el-button>
            </div>
          </el-form-item>
        </el-form>

        <!-- 返回内容的框 -->
        <div style="margin: 32px 0" />
        <el-input v-model="chaijiechude" style="width: 600px" :autosize="{ minRows: 2, maxRows: 18 }" type="textarea"
          placeholder="这里会显示设计要素的拆解" />

      </div>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  //hooks
  import useYaosuchaijie from '@/hooks/useYaosuchaijie';
  const { yaosuform, chaijiechude, chaiJie } = useYaosuchaijie()

</script>

<style scoped>
  h2 {
    text-align: center;
  }

  .juzhong {
    /* 上、左右、下 */
    margin: 10px auto auto;
  }

  .el-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .anniu {
    margin: auto;
  }
</style>