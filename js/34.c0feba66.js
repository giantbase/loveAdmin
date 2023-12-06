"use strict";(self["webpackChunklove_admin"]=self["webpackChunklove_admin"]||[]).push([[34],{6034:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var s=function(){var e=this,t=e._self._c;return t("el-row",[t("el-col",{attrs:{span:24}},[t("div",{staticClass:"search"},[t("el-button",{attrs:{type:"danger",disabled:e.disabled},on:{click:function(t){return e.delSelection()}}},[e._v(" 批量删除 ")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.openAddCharacter()}}},[e._v("添加")]),t("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},model:{value:e.searchName,callback:function(t){e.searchName=t},expression:"searchName"}},[t("el-button",{staticClass:"searchInput",attrs:{slot:"append",icon:"el-icon-search"},slot:"append"},[e._v("搜索")])],1)],1),t("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:"",border:""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"105",align:"center"}}),t("el-table-column",{attrs:{label:"序号",type:"index",width:"120",align:"center"}}),t("el-table-column",{attrs:{label:"角色名称"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("i",[e._v(e._s(l.row.realname))])]}}])}),t("el-table-column",{attrs:{label:"操作",width:"400",align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.alterRole(l.$index,l.row)}}},[e._v("分配权限")]),t("el-button",{attrs:{type:"danger",size:"small"},nativeOn:{click:function(t){return t.preventDefault(),e.deleteRow(l.$index,e.tableData)}}},[e._v(" 删除 ")])]}}])})],1),t("el-dialog",{attrs:{title:"添加角色",visible:e.dialogAddRoleVisible},on:{"update:visible":function(t){e.dialogAddRoleVisible=t}}},[t("el-form",{ref:"addRoleForm",attrs:{model:e.addRoleForm,rules:e.rules}},[t("el-form-item",{attrs:{label:"角色名称：","label-width":"130px",prop:"role"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.addRoleForm.role,callback:function(t){e.$set(e.addRoleForm,"role",t)},expression:"addRoleForm.role"}})],1),t("el-form-item",{attrs:{label:"服务器字段名：","label-width":"130px",prop:"fields"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.addRoleForm.fields,callback:function(t){e.$set(e.addRoleForm,"fields",t)},expression:"addRoleForm.fields"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogAddRoleVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addCharacter()}}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"添加权限",visible:e.dialogAddPermissionsFormVisible},on:{"update:visible":function(t){e.dialogAddPermissionsFormVisible=t}}},[t("el-form",[t("el-form-item",{attrs:{label:"角色名称：","label-width":"100px"}},[t("el-input",{attrs:{autocomplete:"off",disabled:""},model:{value:e.roleData.realname,callback:function(t){e.$set(e.roleData,"realname",t)},expression:"roleData.realname"}})],1),t("el-form-item",{attrs:{label:"权限列表：","label-width":"100px"}},[t("el-checkbox-group",{model:{value:e.permissions,callback:function(t){e.permissions=t},expression:"permissions"}},e._l(e.permissionsData,(function(l){return t("el-checkbox",{key:l.id,attrs:{label:l.id}},[e._v(e._s(l.remark))])})),1)],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.dialogAddPermissionsFormVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addRole()}}},[e._v("确 定")])],1)],1)],1)],1)},a=[],i={name:"Role",data(){return{rules:{role:[{required:!0,message:"请输入角色名",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}],fields:[{required:!0,message:"请输入服务器字段名",trigger:"blur"},{min:3,max:15,message:"长度在 3 到 15 个字符",trigger:"blur"}]},searchName:"",deleteData:[],disabled:!0,tableData:[],roleData:"",permissions:[],permissionsData:"",dialogAddPermissionsFormVisible:!1,dialogAddRoleVisible:!1,addRoleForm:{role:"",fields:""}}},methods:{deleteRow(e,t){this.$confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{t.splice(e,1),this.$message({type:"success",message:"删除成功!"})})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},handleSelectionChange(e){this.deleteData=e},delSelection(){this.$confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.tableData=this.tableData.filter((e=>-1===this.deleteData.findIndex((t=>t.id===e.id)))),this.$message({type:"success",message:"删除成功!"})})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},openAddCharacter(){this.dialogAddRoleVisible=!0},addCharacter(){},alterRole(e,t){this.roleData=t,this.permissions=[],this.dialogAddPermissionsFormVisible=!0},addRole(){this.updateRolePermission(this.permissions,this.roleData.id),this.dialogAddPermissionsFormVisible=!1},async getAllRoles(){let e=await this.$http.reqGetAllRoles();0==e.code?(console.log("获得所有角色",e),this.tableData=e.data):this.$message.error(e.msg)},async getAllPermissions(){let e=await this.$http.reqGetAllPermissions();0==e.code?(console.log("获得所有权限",e),this.permissionsData=e.data):this.$message.error(e.msg)},async updateRolePermission(e,t){let l=await this.$http.reqUpdateRolePermission(e,t);0==l.code?(console.log("修改权限分配",l),this.$message({type:"success",message:"修改权限分配成功!"}),this.getAllRoles()):this.$message.error(l.msg)}},mounted(){this.getAllRoles(),this.getAllPermissions()},watch:{deleteData:{immediate:!0,handler(e,t){0!=e.length?this.disabled=!1:this.disabled=!0}}}},o=i,r=l(1001),n=(0,r.Z)(o,s,a,!1,null,"f09161f6",null),d=n.exports}}]);