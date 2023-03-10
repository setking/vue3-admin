<template>
  <div class="header">
    <el-row :gutter="20">
      <el-col :span="2">
      </el-col>
    <el-col :span="20"></el-col>
    <el-col :span="2">
      <div class="block">
      <el-dropdown>
        <div class="el-dropdown-link">
          <el-avatar :size="50" :src="circleUrl" ><arrow-down /></el-avatar>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>个人设置</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
      </div>
      </el-col>
  </el-row>
  </div>
</template>
<script setup>
</script>
<style lang="scss">
.header {
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .block {
    .el-dropdown-link{
      border: none;
    }
  }
}
</style>
