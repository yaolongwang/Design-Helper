<template>
  <el-container>
    <el-header>
      <h2>调研数据分析</h2>
    </el-header>
    <el-main>
      <!-- 左右双列布局 -->
      <el-row :gutter="20">
        <!-- 左侧 -->
        <el-col :span="12">
          <div class="grid-content">

            <h3>调研数据</h3>

            <!-- 输入框 -->
            <div style="margin: 4px 0" />
            <el-input v-model="diaoyanjieguo" style="width: 480px" :autosize="{ minRows: 20, maxRows: 20 }"
              type="textarea" placeholder="请复制调研结果数据到此框" />

            <!-- 按钮 -->
            <div style="margin: 8px 0" />
            <div class="anniu">
              <el-button type="primary" @click="startFenxi" size="large">开始分析</el-button>
            </div>
            <div style="margin: 8px 0" />

          </div>
        </el-col>

        <!-- 右侧 -->
        <el-col :span="12">
          <div class="grid-content">

            <h3>分析结果</h3>

            <!-- 返回内容的框 -->
            <div style="margin: 4px 0" />
            <el-input v-model="fenxijieguo" style="width: 480px" :autosize="{ minRows: 20, maxRows: 20 }"
              type="textarea" placeholder="这里会显示分析结果" />

            <!-- 按钮 -->
            <div style="margin: 8px 0" />
            <div class="anniu">
              <el-button type="success" plain @click="copyJieguo" size="large">复制分析结果</el-button>
            </div>
            <div style="margin: 8px 0" />

          </div>
        </el-col>
      </el-row>

    </el-main>
  </el-container>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  //hooks
  import useShujufenxi from '@/hooks/useShujufenxi'
  const { diaoyanjieguo, fenxijieguo, startFenxi } = useShujufenxi()

  // 按钮点击事件：复制结果
  const copyJieguo = () => {
    let result = fenxijieguo.value
    // 把result复制到剪贴板,并保留换行
    const el = document.createElement('textarea')
    el.value = result
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)

    console.log('已复制到剪贴板!')
  }
</script>

<style scoped>
  h2 {
    text-align: center;
  }

  .anniu {
    margin: auto;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .el-row:last-child {
    margin-bottom: 0;
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    display: flex;
    /* 设置主轴方向为垂直 */
    flex-direction: column;
    /* 在交叉轴方向上居中对齐 */
    align-items: center;

    /* 设置圆角边框为4像素 */
    border-radius: 4px;
    /* 设置最小高度为36像素 */
    min-height: 36px;

    /* background-color: #f4f4f5; */
  }
</style>