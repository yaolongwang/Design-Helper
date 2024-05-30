<template>
  <el-container>
    <el-header>
      <h2>调研方案生成</h2>
    </el-header>
    <el-main>
      <!-- 标签页 -->
      <div class="centered-tabs">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <!-- 一号标签页 -->
          <el-tab-pane label="问卷" name="first">

            <div class="juzhong">
              <!-- 问卷的表单！ -->
              <el-form :model="wenjuanform" label-width="auto" style="max-width: 600px" size="large">
                <!-- 调研主题 -->
                <el-form-item label="调研主题" size="large">
                  <el-input v-model="wenjuanform.subject" />
                </el-form-item>
                <!-- 问卷题数   -->
                <el-form-item label="问卷题数" size="large">
                  <el-input-number v-model="wenjuanform.number" :min="6" :max="40" @change="handleChange" />
                </el-form-item>
                <!-- 调研目的 -->
                <el-form-item label="调研目的" size="large">
                  <el-input v-model="wenjuanform.aim" placeholder="选填" clearable />
                </el-form-item>

                <!-- 按钮 -->
                <el-form-item size="large">
                  <div class="anniu">
                    <el-button type="primary" @click="createWenjuan">生成</el-button>
                    <el-button @click="copyWenjuan">复制</el-button>
                  </div>
                </el-form-item>
              </el-form>

              <!-- 返回问卷的框 -->
              <div style="margin: 32px 0" />
              <el-input v-model="wenjuan" style="width: 600px" :autosize="{ minRows: 6, maxRows: 18 }" type="textarea"
                placeholder="这里会显示生成的调研问卷" />

            </div>


          </el-tab-pane>
          <!-- 二号标签页 -->
          <el-tab-pane label="大纲" name="second">

            <div class="juzhong">
              <!-- 大纲的表单！ -->
              <el-form :model="fangtanform" label-width="auto" style="max-width: 600px">
                <!-- 访谈主题 -->
                <el-form-item label="访谈主题" size="large">
                  <el-input v-model="fangtanform.subject" />
                </el-form-item>
                <!-- 访谈类型 -->
                <el-form-item label="访谈类型" size="large">
                  <el-select v-model="fangtanform.type" placeholder="请选择访谈类型">
                    <el-option label="封闭式访谈" value="封闭式访谈" />
                    <el-option label="半开放式访谈" value="半开放式访谈" />
                    <el-option label="开放式访谈" value="开放式访谈" />
                  </el-select>
                </el-form-item>
                <!-- 问题数量 -->
                <el-form-item label="问题数量" size="large">
                  <el-input-number v-model="fangtanform.number" :min="3" :max="30" @change="handleChange" />
                </el-form-item>

                <!-- 按钮 -->
                <el-form-item size="large">
                  <div class="anniu">
                    <el-button type="primary" @click="createFangtan">生成</el-button>
                    <el-button @click="copyFangtan">复制</el-button>
                  </div>
                </el-form-item>
              </el-form>

              <!-- 返回访谈大纲的框 -->
              <div style="margin: 32px 0" />
              <el-input v-model="fangtan" style="width: 600px" :autosize="{ minRows: 6, maxRows: 18 }" type="textarea"
                placeholder="这里会显示生成的访谈大纲" />

            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import type { TabsPaneContext } from 'element-plus'

  //hooks
  import useWenjuan from '@/hooks/useWenjuan';
  import useDagang from '@/hooks/useDagang';
  const { wenjuanform, createWenjuan, wenjuan } = useWenjuan();
  const { fangtanform, createFangtan, fangtan } = useDagang();

  // 控制标签页
  const activeName = ref('first')
  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
  }

  // 控制问卷题数和问题数量的变化
  const num = ref(1)
  const handleChange = (value: number) => {
    console.log(value)
  }

  //！！！问卷页面数据
  //按钮点击事件：复制问卷
  const copyWenjuan = () => {
    let resultwenjuan = wenjuan.value
    // 把resultwenjuan复制到剪贴板,并保留换行
    const el = document.createElement('textarea')
    el.value = resultwenjuan
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)

    console.log('已复制生成的调研问卷！')
  }

  //！！！访谈页面数据
  //按钮点击事件：复制访谈
  const copyFangtan = () => {
    let resultfangtan = fangtan.value
    // 把resultfangtan复制到剪贴板,并保留换行
    const el = document.createElement('textarea')
    el.value = resultfangtan
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)

    console.log('已复制生成的访谈大纲！')
  }

</script>

<style scoped>
  h2 {
    text-align: center;
  }

  .demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }

  .juzhong {
    /* 上、左右、下 */
    margin: 10px auto auto;
  }

  .el-tab-pane {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .anniu {
    margin: auto;
  }

  .centered-tabs {
    justify-content: center;
    display: flex;
  }
</style>