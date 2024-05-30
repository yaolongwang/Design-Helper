<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" router="true" background-color="#f4f4f5">

    <el-menu-item index="siweituozhan">
      <el-icon>
        <Opportunity />
      </el-icon>
      <span>思维拓展</span>
    </el-menu-item>
    <el-menu-item index="fanganshengcheng">
      <el-icon>
        <List />
      </el-icon>
      <span>调研方案生成</span>
    </el-menu-item>
    <el-menu-item index="shujufenxi">
      <el-icon>
        <Histogram />
      </el-icon>
      <span>调研数据分析</span>
    </el-menu-item>
    <el-menu-item index="yaosuchaijie">
      <el-icon>
        <HelpFilled />
      </el-icon>
      <span>设计要素拆解</span>
    </el-menu-item>
    <el-menu-item index="caotufuzhu">
      <el-icon>
        <PictureFilled />
      </el-icon>
      <span>草图辅助</span>
    </el-menu-item>

  </el-menu>
</template>

<script lang="ts" setup>
  //导入图标
  import {
    Opportunity,
    List,
    Histogram,
    HelpFilled,
    PictureFilled,
  } from '@element-plus/icons-vue'
</script>

<style scoped></style>