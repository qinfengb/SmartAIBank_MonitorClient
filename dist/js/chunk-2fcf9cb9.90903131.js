(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fcf9cb9"],{"0bd1":function(e,t,a){var n=a("f76c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("499e").default;i("5aa0e8ea",n,!0,{sourceMap:!1,shadowMode:!1})},"0f89":function(e,t,a){"use strict";var n=a("556f"),i=a.n(n);i.a},"140b":function(e,t,a){var n=a("7e81");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("499e").default;i("0d92f03c",n,!0,{sourceMap:!1,shadowMode:!1})},"195b":function(e,t,a){var n=a("d45b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("499e").default;i("e6cc9666",n,!0,{sourceMap:!1,shadowMode:!1})},"2bd2":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"\n.visit-resource-content[data-v-e7b4db2a]{position:relative;display:inline-block;margin:0 auto;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.3);box-shadow:0 1px 3px rgba(0,0,0,.3);-webkit-box-sizing:border-box;box-sizing:border-box;width:50%;background-color:#fff;height:100%;z-index:2002;vertical-align:top;-webkit-box-shadow:-8px 0 5px 0 rgba(165,164,164,.5);box-shadow:-8px 0 5px 0 rgba(165,164,164,.5);padding:15px\n}\n.visit-resource-content .footer-bottom[data-v-e7b4db2a]{position:absolute;bottom:15px;right:15px;left:15px;border-top:1px solid #e5e5e5;padding-top:10px;display:inline-block;text-align:right\n}\n.visit-resource-content .heade-content[data-v-e7b4db2a]{width:100%;position:relative;font-size:18px;color:#333;padding:5px 0;border-bottom:1px solid #e5e5e5\n}\n.visit-resource-content .heade-content .new-editor-close[data-v-e7b4db2a]{position:absolute;width:26px;height:26px;padding:4px;right:-4px;color:#666;cursor:pointer\n}\n.visit-resource-content .middle-content[data-v-e7b4db2a]{padding-top:15px;height:90%\n}\n.visit-resource-content .middle-content .left-resource-content[data-v-e7b4db2a]{display:inline-block;width:44%;height:90%;border:1px solid #e5e5e5;vertical-align:top\n}\n.visit-resource-content .middle-content .left-resource-content .heade-content[data-v-e7b4db2a]{width:100%;padding:5px;font-size:14px;color:#333;border-bottom:1px solid #e5e5e5\n}\n.visit-resource-content .middle-content .left-resource-content .tree-content[data-v-e7b4db2a]{height:93.5%;overflow-y:auto\n}\n.visit-resource-content .middle-content .middle-transform-content[data-v-e7b4db2a]{display:inline-block;width:12%;height:90%;vertical-align:top;padding-top:45%\n}\n.visit-resource-content .middle-content .middle-transform-content .to-left-btn[data-v-e7b4db2a],.visit-resource-content .middle-content .middle-transform-content .to-right-btn[data-v-e7b4db2a]{outline:none;width:80%;margin-left:10%;border:1px solid #e5e5e5;background:#f6f6f6;cursor:pointer\n}\n.visit-resource-content .middle-content .middle-transform-content .to-left-btn[data-v-e7b4db2a]{margin-top:10px\n}\n.visit-resource-content .middle-content .right-resource-content[data-v-e7b4db2a]{display:inline-block;width:44%;height:90%;border:1px solid #e5e5e5;vertical-align:top\n}\n.visit-resource-content .middle-content .right-resource-content .heade-content[data-v-e7b4db2a]{width:100%;padding:5px;font-size:14px;color:#333;border-bottom:1px solid #e5e5e5\n}\n.visit-resource-content .middle-content .right-resource-content .tree-content[data-v-e7b4db2a]{height:93.5%;overflow-y:auto\n}",""])},4067:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"role-manage-content"},[a("div",{staticClass:"role-manage-heade-content"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"role-manage-title"},[e._v("角色信息维护")])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"role-manage-btn"},[a("el-button",{staticClass:"query-btn",attrs:{size:"mini",type:"primary"},on:{click:e.onQueryClick}},[e._v("查询")]),a("el-button",{staticClass:"reset-btn",attrs:{size:"mini"},on:{click:e.onResetClick}},[e._v("重置")])],1)])],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"input-query-info"},[a("font",[e._v("角色代号")]),a("el-input",{attrs:{maxlength:"10",size:"mini",placeholder:"请输入"},model:{value:e.codeValue,callback:function(t){e.codeValue=t},expression:"codeValue"}})],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"input-query-info"},[a("font",[e._v("角色名称")]),a("el-input",{attrs:{maxlength:"40",size:"mini",placeholder:"请输入"},model:{value:e.nameValue,callback:function(t){e.nameValue=t},expression:"nameValue"}})],1)]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"input-query-info"},[a("font",[e._v("所属系统")]),a("el-input",{attrs:{maxlength:"10",size:"mini",placeholder:"请输入"},model:{value:e.systemValue,callback:function(t){e.systemValue=t},expression:"systemValue"}})],1)])],1)],1),a("div",{staticClass:"role-manage-bottom-content"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("div",[a("el-button",{staticClass:"new-btn",attrs:{size:"mini",type:"primary",icon:"el-icon-document"},on:{click:e.onNewClick}},[e._v("新建")])],1)])],1),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%","margin-top":"20px","font-size":"14px","margin-bottom":"45px"},attrs:{data:e.roleList,"tooltip-effect":"dark",stripe:"",border:"","header-row-style":{color:"#333333"}}},[a("el-table-column",{attrs:{prop:"id",label:"角色代号"}}),a("el-table-column",{attrs:{prop:"name",label:"角色名称"}}),a("el-table-column",{attrs:{prop:"systemId",label:"所属系统"}}),a("el-table-column",{attrs:{label:"操作","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("button",{staticClass:"operation-btn compile-color",on:{click:function(a){e.onCompileClick(t.row)}}},[e._v("编辑")]),a("button",{staticClass:"operation-btn details-color",on:{click:function(a){e.onDetailsClick(t.row)}}},[e._v("详情")]),a("button",{staticClass:"operation-btn detele-color",on:{click:function(a){e.onDeleteClick(t.row.id,t.row.systemId)}}},[e._v("删除")])]}}])})],1),a("pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,total:e.totalSize,position:"absolute"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("new-editor-dialog",{attrs:{visible:e.newEditorVisible,"is-compile":e.isCompile,"details-data":e.detailsData},on:{"hidden-dialog":e.hiddenDialog}}),a("role-details",{attrs:{visible:e.detailsVisible,"details-data":e.detailsData},on:{"hidden-dialog":e.hiddenDetails}})],1)},i=[],o=(a("96cf"),a("1da1")),s=a("6e1b"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.visible?a("div",{staticClass:"role-modal"},[a("div",{staticClass:"role-dialog-wrapper",style:{left:e.isSetResource?"40%":"70%"}},[a("transition",{attrs:{name:"move"}},[e.visible?a("new-editor",{ref:"newEditorResource",attrs:{width:e.isSetResource?"50%":"100%","is-compile":e.isCompile,"details-data":e.detailsData,"resource-list":e.resourceList},on:{"hidden-dialog":function(t){e.$emit("hidden-dialog")},"handle-resoure":e.handleSetResourceClick}}):e._e()],1),a("transition",{attrs:{name:"move"}},[a("visit-resource",{directives:[{name:"show",rawName:"v-show",value:e.isSetResource,expression:"isSetResource"}],ref:"visitResource",attrs:{"is-compile":e.isCompile,"details-data":e.detailsData},on:{"hidden-dialog":function(t){e.$emit("hidden-dialog")},"handle-resoure":e.handleSetResourceClick}})],1)],1)]):e._e()},l=[],d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"new-editor-content",style:{width:e.width}},[a("div",{staticClass:"heade-content"},[a("font",[e._v("编辑角色信息")]),a("i",{staticClass:"new-editor-close el-icon-close",on:{click:function(t){e.$emit("hidden-dialog")}}})],1),a("div",{staticClass:"middle-content"},[a("div",{staticClass:"input-item"},[a("font",{staticClass:"level"},[e._v("*")]),a("font",{staticClass:"input-explain"},[e._v("角色代号")]),a("el-input",{attrs:{maxlength:"10",size:"mini",readOnly:e.isCompile,placeholder:"请输入"},model:{value:e.codeValue,callback:function(t){e.codeValue=t},expression:"codeValue"}})],1),a("div",{staticClass:"input-item"},[a("font",{staticClass:"level"},[e._v("*")]),a("font",{staticClass:"input-explain"},[e._v("角色名称")]),a("el-input",{attrs:{maxlength:"40",size:"mini",placeholder:"请输入"},model:{value:e.nameValue,callback:function(t){e.nameValue=t},expression:"nameValue"}})],1),a("div",{staticClass:"input-item"},[a("font",{staticClass:"level"},[e._v("*")]),a("font",{staticClass:"input-explain"},[e._v("所属系统")]),a("el-select",{attrs:{placeholder:"请选择",maxlength:"10",size:"mini"},model:{value:e.systemValue,callback:function(t){e.systemValue=t},expression:"systemValue"}},e._l(e.systemList,function(e){return a("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})}))],1),a("div",{staticClass:"input-item"},[a("font",{staticClass:"level"},[e._v("*")]),a("font",{staticClass:"input-explain"},[e._v("角色描述")]),a("div",{staticClass:"describe-input-content"},[a("el-input",{attrs:{maxlength:"100",type:"textarea",autosize:{minRows:2,maxRows:9},placeholder:"请输入"},model:{value:e.describeValue,callback:function(t){e.describeValue=t},expression:"describeValue"}}),a("div",{staticClass:"word-hint"},[e._v(e._s(e.describeValue.length)+"/100")])],1)],1),a("div",{staticClass:"setting-resource"},[a("font",[e._v("可访问资源")]),a("el-button",{staticClass:"setting",attrs:{type:"primary",plain:"",size:"mini"},on:{click:e.onSettingClick}},[e._v("设置")]),e.resourceList.length>0?a("span",{staticClass:"setting-succ"},[a("i",{staticClass:"el-icon-success"}),e._v(" 设置成功\n        ")]):e._e()],1)]),a("div",{staticClass:"footer-bottom"},[a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.$emit("hidden-dialog")}}},[e._v("取消")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.onAffirmClick}},[e._v("确定")])],1),"100%"!=e.width?a("div",{staticClass:"new-editor-modal"}):e._e()])},c=[],p=(a("7f7f"),a("dde5")),u={name:"NewEditor",props:{width:{type:String,default:"100%"},isCompile:{type:Boolean,default:!1},detailsData:{type:Object,default:null},resourceList:{type:Array,default:null}},data:function(){return{codeValue:"",nameValue:"",systemValue:"",systemList:[],describeValue:""}},mounted:function(){this.getSystemId(),this.initView(),this.setTextareaStyle()},updated:function(){this.setTextareaStyle()},methods:{onSettingClick:function(){this.$emit("handle-resoure",!0)},initView:function(){this.$nextTick(function(){this.isCompile?(this.codeValue=this.detailsData.id,this.nameValue=this.detailsData.name,this.systemValue=this.detailsData.systemId,this.describeValue=this.detailsData.desc,this.resourceList=this.detailsData.resources):(this.codeValue="",this.nameValue="",this.systemValue="",this.describeValue="")})},getSystemId:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this,e.next=4,p["a"].api.base.role.selectAccessSystemByUserId(base.getStore({key:"userName"}));case 4:a=e.sent,t.systemList=a.systems||[],e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$message({message:e.t0.message,type:"error"});case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}(),setTextareaStyle:function(){this.$nextTick(function(){var e=document.getElementsByClassName("el-textarea__inner");e[0].style.fontSize="14px",e[0].style.color="#666666",e[0].style.fontFamily="Avenir, Helvetica, Arial, sans-serif"})},onAffirmClick:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this,e.prev=1,!(t.resourceList&&t.resourceList.length>0)){e.next=17;break}if(a=new p["a"].bean.base.Role({resources:t.resourceList,desc:t.describeValue,name:t.nameValue,id:t.codeValue,systemId:t.systemValue}),t.isCompile){e.next=11;break}return e.next=7,p["a"].api.base.role.add(a);case 7:t.$message({message:"新建成功",type:"success"}),t.$emit("hidden-dialog",!0),e.next=15;break;case 11:return e.next=13,p["a"].api.base.role.update(a,t.codeValue,t.systemValue);case 13:t.$message({message:"更新成功",type:"success"}),t.$emit("hidden-dialog",!0);case 15:e.next=18;break;case 17:t.$message({message:"请选择可操作资源",type:"warning"});case 18:e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](1),t.$message({message:e.t0.message,type:"error"});case 23:case"end":return e.stop()}},e,this,[[1,20]])}));return function(){return e.apply(this,arguments)}}()},watch:{resourceList:{handler:function(e){this.$nextTick(function(){})},deep:!0}}},m=u,h=(a("c22e"),a("2877")),f=Object(h["a"])(m,d,c,!1,null,"25fdec32",null);f.options.__file="newEditor.vue";var g=f.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"visit-resource-content",style:{width:e.width}},[a("div",{staticClass:"heade-content"},[a("font",[e._v("设置可访问资源及访问方式")]),a("i",{staticClass:"new-editor-close el-icon-close",on:{click:function(t){e.$emit("handle-resoure")}}})],1),a("div",{staticClass:"middle-content"},[a("div",{staticClass:"left-resource-content"},[a("div",{staticClass:"heade-content"},[a("el-checkbox",{attrs:{disabled:!e.primevalResourceList.length>0},on:{change:e.onLeftAllChange},model:{value:e.leftAllChecked,callback:function(t){e.leftAllChecked=t},expression:"leftAllChecked"}},[e._v("资源树")])],1),a("div",{staticClass:"tree-content"},[a("el-tree",{ref:"leftResource",attrs:{data:e.leftTrees.resourceList,"show-checkbox":"","node-key":"id","default-expanded-keys":e.leftTrees.defaultExpandedKeys,"expand-on-click-node":!1,"render-content":e.leftRenderContent},on:{check:e.onLeftCheck}})],1)]),a("div",{staticClass:"middle-transform-content"},[a("button",{staticClass:"to-right-btn",attrs:{disabled:!e.usableResource.length>0},on:{click:e.onToRightClick}},[a("i",{staticClass:"el-icon-arrow-right"})]),a("button",{staticClass:"to-left-btn",attrs:{disabled:!e.removeResource.length>0},on:{click:e.onToLeftClick}},[a("i",{staticClass:"el-icon-arrow-left"})])]),a("div",{staticClass:"right-resource-content"},[a("div",{staticClass:"heade-content"},[a("el-checkbox",{attrs:{disabled:!e.usableResource.length>0},on:{change:e.onRightAllChange},model:{value:e.rightAllChecked,callback:function(t){e.rightAllChecked=t},expression:"rightAllChecked"}},[e._v("可操作资源列表")])],1),a("div",{staticClass:"tree-content"},[a("el-tree",{ref:"rightResource",attrs:{data:e.rightTrees.resourceList,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1,"render-content":e.leftRenderContent},on:{check:e.onRightCheck}})],1)])]),a("div",{staticClass:"footer-bottom"},[a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.$emit("handle-resoure",!1)}}},[e._v("取消")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.onAffirmClick}},[e._v("确定")])],1)])},v=[],x=(a("f751"),[{id:"queuedashboard",parent:"smartOperation",name:"排队看板",operationMode:[{id:"add",name:"新增"},{id:"mod",name:"修改"},{id:"del",name:"删除"}]},{id:"smartOperation",name:"智能运营",operationMode:[{id:"add",name:"新增"},{id:"mod",name:"修改"},{id:"del",name:"删除"}]},{id:"0101",parent:"YHGL",name:"用户信息维护",operationMode:[{id:"add",name:"新增"}]},{id:"0201",parent:"JGGL",name:"机构信息维护",operationMode:[{id:"add",name:"新增"}]},{id:"0301",parent:"QXGL",name:"角色信息维护",operationMode:[{id:"add",name:"新增"}]},{id:"0703",parent:"YHGL",name:"密码重置",operationMode:[{id:"add",name:"新增"}]},{id:"0803",parent:"DEVMANG",name:"终端外设绑定信息维护",operationMode:[{id:"add",name:"新增"}]},{id:"30201",parent:"DEVMANG",name:"终端机具管理",operationMode:[{id:"add",name:"新增"}]},{id:"30303",parent:"JGGL",name:"网点布局参数维护",operationMode:[{id:"add",name:"新增"}]},{id:"DEVMANG",parent:"publicArguManage",name:"终端管理",operationMode:[{id:"add",name:"新增"}]},{id:"JGGL",parent:"publicArguManage",name:"机构管理",operationMode:[{id:"add",name:"新增"}]},{id:"Q101",parent:"queueManage",name:"队列管理",operationMode:[{id:"add",name:"新增"}]},{id:"Q103",parent:"queueManage",name:"排队策略管理",operationMode:[{id:"add",name:"新增"}]},{id:"Q104",parent:"queueManage",name:"号票信息维护",operationMode:[{id:"add",name:"新增"}]},{id:"Q110",parent:"queueManage",name:"工作日期类型维护",operationMode:[{id:"add",name:"新增"}]},{id:"Q120",parent:"queueManage",name:"预约参数维护",operationMode:[{id:"add",name:"新增"}]},{id:"Q121",parent:"queueManage",name:"大额取现预约确认",operationMode:[{id:"add",name:"新增"}]},{id:"Q122",parent:"queueManage",name:"机构队列管理",operationMode:[{id:"add",name:"新增"}]},{id:"Q132",parent:"queueManage",name:"网点营业信息维护",operationMode:[{id:"add",name:"新增"}]},{id:"Q312",parent:"queueManage",name:"客户语言管理",operationMode:[{id:"add",name:"新增"}]},{id:"QR01",parent:"queueManage",name:"报表信息查询",operationMode:[{id:"add",name:"新增"}]},{id:"QXGL",parent:"publicArguManage",name:"权限管理",operationMode:[{id:"add",name:"新增"}]},{id:"YHGL",parent:"publicArguManage",name:"用户管理",operationMode:[{id:"add",name:"新增"}]},{id:"operatorManagerStage",name:"网点管理系统",operationMode:[{id:"add",name:"新增"}]},{id:"publicArguManage",parent:"operatorManagerStage",name:"公共参数管理",operationMode:[{id:"add",name:"新增"}]},{id:"queueManage",parent:"operatorManagerStage",name:"排队参数管理",operationMode:[{id:"add",name:"新增"}]},{id:"T00003",parent:"TS02",name:"余额及明细查询",operationMode:[{id:"add",name:"新增"}]},{id:"TS01",parent:"selfService",name:"账户管理",operationMode:[{id:"add",name:"新增"}]},{id:"TS02",parent:"selfService",name:"查询转账",operationMode:[{id:"add",name:"新增"}]},{id:"TS03",parent:"selfService",name:"签约管理",operationMode:[{id:"add",name:"新增"}]},{id:"TS04",parent:"selfService",name:"其他业务",operationMode:[{id:"add",name:"新增"}]},{id:"receipt",name:"回单业务",operationMode:[{id:"add",name:"新增"}]},{id:"selfService",name:"自助业务",operationMode:[{id:"add",name:"新增"}]}]),w=function(e,t){if(!t)return[];var a=t,n=[];return a.length>0&&a.map(function(t){n.push({id:e+"-"+t.id,name:t.name,operationModeType:"operationMode",parent:e})}),JSON.parse(JSON.stringify(n))},y=function(e){e=e||x,e=JSON.parse(JSON.stringify(e));var t={},a=[];return e.map(function(e,a){t[e.parent]?t[e.parent].push(Object.assign(e,{children:[]})):(t[e.parent]=[],t[e.parent].push(Object.assign(e,{children:[]})))}),a=t.undefined,a&&0!==a.length?(a.map(function(e,n){a[n].children=t[e.id]||w(e.id,e.operationMode),a[n].children.map(function(e,i){e.operationModeType||(a[n].children[i].children=t[e.id]||w(e.id,e.operationMode),a[n].children[i].children.map(function(e,o){e.operationModeType||(a[n].children[i].children[o].children=t[e.id]||w(e.id,e.operationMode),a[n].children[i].children[o].children.map(function(e,s){e.operationModeType||(a[n].children[i].children[o].children[s].children=t[e.id]||w(e.id,e.operationMode))}))}))})}),a):[]},k=function(e){e=JSON.parse(JSON.stringify(e));var t={},a={},n=[];for(var i in e.map(function(e,n){if("operationMode"===e.operationModeType){var i=e.id.substring(e.id.indexOf("-")+1,e.id.length),o={id:i,name:e.name};a[e.parent]?a[e.parent].push(o):(a[e.parent]=[],a[e.parent].push(o))}else t[e.parent]?t[e.parent].push(Object.assign(e,{children:[]})):(t[e.parent]=[],t[e.parent].push(Object.assign(e,{children:[]})))}),t)n=n.concat(t[i]);return n.map(function(e,t){a[e.id]&&(n[t].operationMode=a[e.id])}),n},C={defaultResource:x,combination:y,usableCombination:k},R={name:"VisitResource",props:{width:{type:String,default:"50%"},isCompile:{type:Boolean,default:!1},detailsData:{type:Object,default:null}},data:function(){return{primevalResourceList:[],leftTrees:{resourceList:[],defaultExpandedKeys:[],checkedKeys:[]},rightTrees:{resourceList:[],defaultExpandedKeys:[],checkedKeys:[]},usableResource:[],removeResource:[],leftAllChecked:!1,rightAllChecked:!1}},mounted:function(){this.isCompile&&this.setCompileData()},methods:{getResourceTree:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,a){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=this,e.t0=n,e.next=5,p["a"].api.base.resource.selectAccessResourceByUserIdAndSystemId(t,a);case 5:e.t1=e.sent,e.t0.leftResourceTreeData.call(e.t0,e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e["catch"](0),n.$message({message:e.t2.message,type:"error"});case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t,a){return e.apply(this,arguments)}}(),leftResourceTreeData:function(e){this.primevalResourceList=e;var t=C.combination(e),a=[];t[0].id&&a.push(t[0].id),t[0].children[0].id&&a.push(t[0].children[0].id),this.leftTrees.resourceList=t,this.leftTrees.defaultExpandedKeys=a},setCompileData:function(){if(this.detailsData&&this.detailsData.resources){var e=[];this.detailsData.resources.map(function(t,a){if(t.operationMode){var n=t.operationMode;n.map(function(a){e.push(t.id+"-"+a.id)})}}),this.usableResource=JSON.parse(JSON.stringify(this.detailsData.resources)),this.leftTrees.checkedKeys=e,this.onToRightClick(),this.$refs.leftResource.setCheckedKeys(e)}},leftRenderContent:function(e,t){t.node;var a=t.data;t.store;return e("el-tooltip",{attrs:{content:a.name,placement:"bottom",disabled:a.name.length<5}},[e("span",{class:"tree-item"},[a.name])])},onLeftAllChange:function(e){if(e){var t=[];this.primevalResourceList.map(function(e){t.push(e.id)}),this.leftTrees.checkedKeys=t,this.usableResource=JSON.parse(JSON.stringify(this.primevalResourceList)),this.$refs.leftResource.setCheckedKeys(t)}else this.$refs.leftResource.setCheckedKeys([])},onRightAllChange:function(e){if(e){var t=[];this.usableResource.map(function(e){t.push(e.id)}),this.rightTrees.checkedKeys=t,this.removeResource=JSON.parse(JSON.stringify(this.usableResource)),this.$refs.rightResource.setCheckedKeys(t)}else this.$refs.rightResource.setCheckedKeys([])},onLeftCheck:function(e,t){var a=t.checkedNodes,n=t.checkedKeys,i=t.halfCheckedNodes;t.halfCheckedKeys;this.usableResource=a.concat(i),this.leftTrees.checkedKeys=n,this.leftAllChecked=!1},onRightCheck:function(e,t){var a=t.checkedNodes,n=t.checkedKeys,i=(t.halfCheckedNodes,t.halfCheckedKeys);this.removeResource=a,this.rightTrees.checkedKeys=n.concat(i),this.rightAllChecked=!1},onToRightClick:function(){var e=C.usableCombination(this.usableResource);e=C.combination(e),this.rightTrees.resourceList=e,this.$refs.rightResource.setCheckedKeys([])},onToLeftClick:function(){var e=this,t=this.usableResource;this.removeResource.map(function(a,n){e.usableResource.map(function(e,n){a.id===e.id&&t.splice(n,1)})});var a=this.leftTrees.checkedKeys;this.rightTrees.checkedKeys.map(function(t,n){var i=a.indexOf(t);i>-1&&(e.leftAllChecked=!1,e.rightAllChecked=!1,a.splice(i,1))}),this.usableResource=t,this.onToRightClick(),this.$refs.leftResource.setCheckedKeys(a),this.removeResource=[],this.rightTrees.checkedKeys=[]},onAffirmClick:function(){var e=C.usableCombination(this.usableResource);e&&e.length>0?this.$emit("handle-resoure",!1,e):this.$message({showClose:!0,message:"请选择可操作资源",type:"warning"})}}},M=R,_=(a("0f89"),Object(h["a"])(M,b,v,!1,null,"e7b4db2a",null));_.options.__file="visitResource.vue";var z=_.exports,S={name:"NewEditorDialog",components:{newEditor:g,visitResource:z},props:{visible:{type:Boolean,default:!1},isCompile:{type:Boolean,default:!1},detailsData:{type:Object,default:null}},data:function(){return{isSetResource:!1,resourceList:[]}},mounted:function(){this.isCompile&&(this.resourceList=this.detailsData&&this.detailsData.resources?this.detailsData.resources:[])},methods:{stop:function(){var e=function(e){e.preventDefault()};document.body.style.overflow="hidden",document.addEventListener("touchmove",e,!1)},move:function(){var e=function(e){e.preventDefault()};document.body.style.overflow="",document.removeEventListener("touchmove",e,!1)},handleSetResourceClick:function(e,t){if(e){if(!this.$refs.newEditorResource.systemValue)return void this.$message({message:"请先选择所属系统",type:"warning"});this.$refs.visitResource.getResourceTree(this.$refs.newEditorResource.systemValue,base.getStore({key:"userName"})),this.isSetResource=!0}else this.isSetResource=!1;t&&(this.resourceList=t)}},watch:{visible:function(e){e?this.stop():this.move()},detailsData:{handler:function(e){this.$nextTick(function(){this.isCompile?this.resourceList=this.detailsData&&this.detailsData.resources?this.detailsData.resources:[]:this.resourceList=[]})},deep:!0}}},V=S,D=(a("bc4c"),Object(h["a"])(V,r,l,!1,null,"2b0f0694",null));D.options.__file="newEditorDialog.vue";var L=D.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.visible?a("div",{staticClass:"role-details"},[a("div",{staticClass:"role-dialog-wrapper"},[a("div",{staticClass:"role-details-content"},[a("div",{staticClass:"heade-content"},[a("font",[e._v("角色信息详情")]),a("i",{staticClass:"new-editor-close el-icon-close",on:{click:function(t){e.$emit("hidden-dialog")}}})],1),a("div",{staticClass:"middle-content"},[a("div",{staticClass:"details-item"},[a("div",{staticClass:"item-key"},[e._v(" 角色代号")]),a("div",{staticClass:"item-value"},[e._v(e._s(e.detailsData.id))])]),a("div",{staticClass:"details-item"},[a("div",{staticClass:"item-key"},[e._v(" 角色名称")]),a("div",{staticClass:"item-value"},[e._v(e._s(e.detailsData.name))])]),a("div",{staticClass:"details-item"},[a("div",{staticClass:"item-key"},[e._v(" 所属系统")]),a("div",{staticClass:"item-value"},[e._v(e._s(e.detailsData.systemId))])]),a("div",{staticClass:"details-item"},[a("div",{staticClass:"item-key"},[e._v(" 角色描述")]),a("div",{staticClass:"item-value"},[e._v(e._s(e.detailsData.desc))])]),a("div",{staticClass:"details-item"},[a("div",{staticClass:"item-key"},[e._v(" 可访问资源")]),a("div",{staticClass:"item-value resource-list"},[a("el-tree",{attrs:{data:e.resList,props:e.defaultProps,"node-key":"id"}})],1)])]),a("div",{staticClass:"footer-bottom"},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){e.$emit("hidden-dialog")}}},[e._v("关闭")])],1)])])]):e._e()},$=[],O={name:"roleDetails",props:{visible:{type:Boolean,default:!1},detailsData:{type:Object,default:null}},data:function(){return{resList:[],defaultProps:{children:"children",label:"name"}}},mounted:function(){},methods:{stop:function(){var e=function(e){e.preventDefault()};document.body.style.overflow="hidden",document.addEventListener("touchmove",e,!1)},move:function(){var e=function(e){e.preventDefault()};document.body.style.overflow="",document.removeEventListener("touchmove",e,!1)}},watch:{visible:function(e){e?this.stop():this.move()},detailsData:{handler:function(e){this.$nextTick(function(){if(e){var t=C.combination(e.resources);this.resList=t}})},deep:!0}}},A=O,E=(a("5c77"),Object(h["a"])(A,T,$,!1,null,"148f909a",null));E.options.__file="roleDetails.vue";var N=E.exports,K={name:"RoleManage",components:{pagination:s["a"],newEditorDialog:L,roleDetails:N},data:function(){return{codeValue:"",nameValue:"",systemValue:"",roleList:[],totalSize:0,pageSize:10,currentPage:1,newEditorVisible:!1,detailsVisible:!1,isCompile:!1,detailsData:null}},mounted:function(){this.getRoleInfo()},methods:{onQueryClick:function(){this.currentPage=1,this.getRoleInfo()},onResetClick:function(){this.codeValue="",this.nameValue="",this.systemValue="",this.currentPage=1,this.getRoleInfo()},onNewClick:function(){window.scrollTo(0,0),this.detailsData=null,this.newEditorVisible=!0,this.isCompile=!1},hiddenDialog:function(e){this.newEditorVisible=!1,e&&this.getRoleInfo()},hiddenDetails:function(){this.detailsVisible=!1},onCompileClick:function(e){window.scrollTo(0,0),this.detailsData=e,this.newEditorVisible=!0,this.isCompile=!0},onDetailsClick:function(e){window.scrollTo(0,0),this.detailsVisible=!0,this.detailsData=e},onDeleteClick:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,a){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=this,e.next=4,p["a"].api.base.role.deleteById(t,a);case 4:n.$message({message:"删除成功",type:"success"}),n.getRoleInfo(),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),n.$message({message:e.t0.message,type:"error"});case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t,a){return e.apply(this,arguments)}}(),handleSizeChange:function(e){this.pageSize=e,this.getRoleInfo()},handleCurrentChange:function(e){this.currentPage=e,this.getRoleInfo()},getRoleInfo:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this,a={id:t.codeValue,name:t.nameValue,systemId:t.systemValue},e.next=5,p["a"].api.base.role.selectByPage(this.currentPage,this.pageSize,a);case 5:n=e.sent,t.roleList=n.list||[],t.totalSize=n.total||0,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.$message({message:e.t0.message,type:"error"});case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()}},j=K,I=(a("9db0"),Object(h["a"])(j,n,i,!1,null,"e4f678ba",null));I.options.__file="roleManage.vue";t["default"]=I.exports},"556f":function(e,t,a){var n=a("2bd2");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("499e").default;i("13c2e7da",n,!0,{sourceMap:!1,shadowMode:!1})},"5c77":function(e,t,a){"use strict";var n=a("8f4a"),i=a.n(n);i.a},"6e1b":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-content",style:{position:e.position}},[a("el-pagination",{attrs:{background:e.background,"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:e.layout,total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},[a("div",{staticClass:"slot-span"})])],1)},i=[],o=(a("c5f6"),{name:"Pagination",props:{background:{type:Boolean,default:!0},total:{type:Number,default:0},pageSize:{type:Number,default:10},currentPage:{type:Number,default:1},pageSizes:{type:Array,default:function(){return[10,30,50,100]}},layout:{type:String,default:"prev, pager, next, jumper, slot, sizes"},position:{type:String,default:"relative"}},data:function(){return{}},mounted:function(){},methods:{handleSizeChange:function(e){this.$emit("size-change",e)},handleCurrentChange:function(e){this.$emit("current-change",e)}}}),s=o,r=(a("e455"),a("2877")),l=Object(r["a"])(s,n,i,!1,null,"0b4f32a8",null);l.options.__file="pagination.vue";t["a"]=l.exports},7250:function(e,t,a){var n=a("7430");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("499e").default;i("3bd4d2d5",n,!0,{sourceMap:!1,shadowMode:!1})},7430:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"\n.new-editor-content[data-v-25fdec32]{position:relative;display:inline-block;margin:0 auto;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.3);box-shadow:0 1px 3px rgba(0,0,0,.3);-webkit-box-sizing:border-box;box-sizing:border-box;width:50%;background-color:#fff;height:100%;z-index:2002;vertical-align:top;-webkit-box-shadow:-8px 0 5px 0 rgba(144,142,142,.5);box-shadow:-8px 0 5px 0 rgba(144,142,142,.5);padding:15px\n}\n.new-editor-content .footer-bottom[data-v-25fdec32]{position:absolute;bottom:15px;right:15px;left:15px;border-top:1px solid #e5e5e5;padding-top:10px;display:inline-block;text-align:right\n}\n.new-editor-content .new-editor-modal[data-v-25fdec32]{position:absolute;top:0;right:0;bottom:0;left:0;margin:0;background:rgba(0,0,0,.2);z-index:2003\n}\n.new-editor-content .heade-content[data-v-25fdec32]{width:100%;position:relative;font-size:18px;color:#333;padding:5px 0;border-bottom:1px solid #e5e5e5\n}\n.new-editor-content .heade-content .new-editor-close[data-v-25fdec32]{position:absolute;width:26px;height:26px;padding:4px;right:-4px;color:#666;cursor:pointer\n}\n.new-editor-content .middle-content[data-v-25fdec32]{margin-top:15px\n}\n.new-editor-content .middle-content .input-item[data-v-25fdec32]{font-size:14px;color:#666;margin-top:10px\n}\n.new-editor-content .middle-content .input-item .level[data-v-25fdec32]{color:#ed5013\n}\n.new-editor-content .middle-content .input-item .input-explain[data-v-25fdec32]{margin:0 5px\n}\n.new-editor-content .middle-content .input-item .el-input[data-v-25fdec32]{width:75%;font-size:14px\n}\n.new-editor-content .middle-content .input-item .describe-input-content[data-v-25fdec32]{position:relative;display:inline-block;width:75%;font-size:14px;color:#666;vertical-align:top\n}\n.new-editor-content .middle-content .input-item .describe-input-content .word-hint[data-v-25fdec32]{position:absolute;font-size:14px;color:#999;bottom:2px;right:7px\n}\n.new-editor-content .middle-content .setting-resource[data-v-25fdec32]{margin-top:15px;font-size:14px;color:#666\n}\n.new-editor-content .middle-content .setting-resource .setting[data-v-25fdec32]{margin-left:10px\n}\n.new-editor-content .middle-content .setting-resource .setting-succ[data-v-25fdec32]{color:#5db664;font-size:14px;margin-left:10px\n}",""])},"7e81":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"\n.role-modal[data-v-2b0f0694]{position:fixed;left:0;top:75px;width:100%;height:100%;background:rgba(0,0,0,.4);z-index:2000\n}\n.role-modal .role-dialog-wrapper[data-v-2b0f0694]{position:fixed;top:75px;right:0;bottom:0;overflow:auto;margin:0;z-index:2001\n}\n.role-modal .role-dialog-wrapper .move-enter-active[data-v-2b0f0694],.role-modal .role-dialog-wrapper .move-leave-active[data-v-2b0f0694]{-webkit-transition:all .3s linear;transition:all .3s linear;-webkit-transform:translateZ(0);transform:translateZ(0)\n}\n.role-modal .role-dialog-wrapper .move-enter[data-v-2b0f0694],.role-modal .role-dialog-wrapper .move-leave[data-v-2b0f0694]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)\n}",""])},"8f4a":function(e,t,a){var n=a("ec5a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("499e").default;i("6b7c0821",n,!0,{sourceMap:!1,shadowMode:!1})},"9db0":function(e,t,a){"use strict";var n=a("195b"),i=a.n(n);i.a},bc4c:function(e,t,a){"use strict";var n=a("140b"),i=a.n(n);i.a},c22e:function(e,t,a){"use strict";var n=a("7250"),i=a.n(n);i.a},d45b:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"\n.role-manage-content[data-v-e4f678ba]{width:100%;min-height:calc(100vh - 120px);background:transparent\n}\n.role-manage-content .role-manage-heade-content[data-v-e4f678ba]{width:100%;background:#fff;padding:15px;border-top-right-radius:5px;border-top-left-radius:5px\n}\n.role-manage-content .role-manage-heade-content .role-manage-title[data-v-e4f678ba]{font-size:16px;color:#333;font-weight:600;height:100%;padding:4px 0\n}\n.role-manage-content .role-manage-heade-content .role-manage-btn[data-v-e4f678ba]{text-align:right\n}\n.role-manage-content .role-manage-heade-content .role-manage-btn .query-btn[data-v-e4f678ba],.role-manage-content .role-manage-heade-content .role-manage-btn .reset-btn[data-v-e4f678ba]{font-size:14px\n}\n.role-manage-content .role-manage-heade-content .input-query-info[data-v-e4f678ba]{font-size:14px;color:#666;padding:15px 10px\n}\n.role-manage-content .role-manage-heade-content .input-query-info .el-input[data-v-e4f678ba]{width:65%;margin-left:10px\n}\n.role-manage-content .role-manage-bottom-content[data-v-e4f678ba]{width:100%;background:#fff;margin-top:5px;padding:15px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;min-height:60vh;position:relative\n}\n.role-manage-content .role-manage-bottom-content .new-btn[data-v-e4f678ba]{font-size:14px\n}\n.role-manage-content .role-manage-bottom-content .delete-btn[data-v-e4f678ba]{outline:none;background:#ed5013;border-radius:5px;border:none;cursor:pointer;font-size:14px;color:#fff;padding:5px 15px;margin-left:10px\n}\n.role-manage-content .role-manage-bottom-content .operation-btn[data-v-e4f678ba]{outline:none;border-radius:3px;background:#fff;cursor:pointer;font-size:14px;margin-left:15px;padding:2px 10px\n}\n.role-manage-content .role-manage-bottom-content .compile-color[data-v-e4f678ba]{border:1px solid #1977e4;color:#1977e4\n}\n.role-manage-content .role-manage-bottom-content .details-color[data-v-e4f678ba]{border:1px solid #2ed0c3;color:#2ed0c3;margin-left:10px\n}\n.role-manage-content .role-manage-bottom-content .detele-color[data-v-e4f678ba]{border:1px solid #ed5013;color:#ed5013;margin-left:10px\n}",""])},e455:function(e,t,a){"use strict";var n=a("0bd1"),i=a.n(n);i.a},ec5a:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"\n.role-details[data-v-148f909a]{position:fixed;left:0;top:75px;width:100%;height:100%;background:rgba(0,0,0,.4);z-index:2000\n}\n.role-details .role-dialog-wrapper[data-v-148f909a]{position:fixed;top:75px;right:0;bottom:0;overflow:auto;margin:0;z-index:2001;left:70%\n}\n.role-details .role-dialog-wrapper .role-details-content[data-v-148f909a]{position:relative;display:inline-block;margin:0 auto;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.3);box-shadow:0 1px 3px rgba(0,0,0,.3);-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;background-color:#fff;height:100%;z-index:2002;vertical-align:top;-webkit-box-shadow:-8px 0 5px 0 rgba(144,142,142,.5);box-shadow:-8px 0 5px 0 rgba(144,142,142,.5);padding:15px\n}\n.role-details .role-dialog-wrapper .role-details-content .heade-content[data-v-148f909a]{width:100%;position:relative;font-size:18px;color:#333;padding:5px 0;border-bottom:1px solid #e5e5e5\n}\n.role-details .role-dialog-wrapper .role-details-content .heade-content .new-editor-close[data-v-148f909a]{position:absolute;width:26px;height:26px;padding:4px;right:-4px;color:#666;cursor:pointer\n}\n.role-details .role-dialog-wrapper .role-details-content .middle-content[data-v-148f909a]{margin-top:15px;font-size:14px;height:83%;overflow-y:auto\n}\n.role-details .role-dialog-wrapper .role-details-content .middle-content .details-item[data-v-148f909a]{padding:10px 0\n}\n.role-details .role-dialog-wrapper .role-details-content .middle-content .details-item .item-key[data-v-148f909a]{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:25%;color:#666;text-align:right;vertical-align:top\n}\n.role-details .role-dialog-wrapper .role-details-content .middle-content .details-item .item-value[data-v-148f909a]{display:inline-block;width:75%;color:#333;text-align:left;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:10px;vertical-align:top\n}\n.role-details .role-dialog-wrapper .role-details-content .middle-content .details-item .resource-list[data-v-148f909a]{padding-left:0\n}\n.role-details .role-dialog-wrapper .role-details-content .footer-bottom[data-v-148f909a]{position:absolute;bottom:15px;right:15px;left:15px;border-top:1px solid #e5e5e5;padding-top:10px;display:inline-block;text-align:right\n}",""])},f76c:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"\n.pagination-content[data-v-0b4f32a8]{width:100%;text-align:right;margin-top:15px;bottom:10px;right:0\n}\n.pagination-content .el-pagination[data-v-0b4f32a8]{padding:2px 0 2px 5px\n}\n.pagination-content .slot-span[data-v-0b4f32a8]{display:inline-block;width:20px\n}",""])}}]);