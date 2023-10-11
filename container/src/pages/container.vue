<template>
  <el-container style="height:100vh; border: 1px solid #eee">
    <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :router='true'>
        <el-menu-item index="/app-people">
          <i class="el-icon-document"></i>
          <span slot="title">微应用A-人员管理</span>
        </el-menu-item>
        <el-submenu >
          <template slot="title">
            <i class="el-icon-setting"></i>微应用B-权限管理</template>
          <el-menu-item index="/app-permission/test1">
            <span slot="title">角色权限</span>
          </el-menu-item>
          <el-menu-item index="/app-permission/test2">
            <span slot="title">人员权限</span>
          </el-menu-item>
        </el-submenu>
       
      </el-menu>
    </el-aside>

      <el-main>
        <router-view></router-view>
        <div id="micro-app"></div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { registerMicroApps, start } from "qiankun";

export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
  mounted() {
    registerMicroApps([
      {
        name: "people", // app name registered
        entry: "//localhost:8001",
        container: "#micro-app",
        activeRule: "/app-people",
      },
      {
        name: "permission",
        entry: "//localhost:8002",
        container: "#micro-app",
        activeRule: "/app-permission",
      },
    ]);

    start();
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
