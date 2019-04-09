(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{288:function(t,n,a){"use strict";a.r(n);var s=a(3),e=Object(s.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"dialog-对话框"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dialog-对话框","aria-hidden":"true"}},[t._v("#")]),t._v(" Dialog 对话框")]),t._v(" "),a("p",[t._v("模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和自定义对话框。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("Dialog 可用于美化系统自带的"),a("code",[t._v("alert")]),t._v("、"),a("code",[t._v("confirm")]),t._v(" 和"),a("code",[t._v("prompt")]),t._v("，也可用于自定义复杂的对话框。")])]),t._v(" "),a("h3",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),a("p",[t._v("基础的对话框用法。")]),t._v(" "),a("base-demo",[a("div",{attrs:{slot:"source"},slot:"source"},[a("button",{staticClass:"el-button",attrs:{onclick:"dialog1()"}},[t._v("提示框Alert")]),t._v(" "),a("button",{staticClass:"el-button",attrs:{onclick:"dialog2()"}},[t._v("对话框Confirm")]),t._v(" "),a("button",{staticClass:"el-button",attrs:{onclick:"dialog3()"}},[t._v("输入弹框Prompt")]),t._v(" "),a("script",[t._v("\nfunction dialog1() {\n  $.dialog({\n    title: 'Tip',\n    content: 'Hello World!',\n    showCancel: false\n  });\n}\nfunction dialog2() {\n  $.dialog({\n    title: 'Tip',\n    content: 'Hello World!',\n    confirm: function(){\n      console.log('Dialog confirm');\n      return true;\n    }\n  });\n}\nfunction dialog3() {\n  $.dialog({\n    title: 'Tip',\n    content: '请输入：<input type=\"text\" id=\"dialog3-input\">',\n    confirm: function(){\n      console.log($('#dialog3-input').val());\n      return true;\n    }\n  });\n}\n")])]),a("p",[t._v("调用"),a("code",[t._v("$.dialog();")]),t._v("方法，设置标题和内容。")]),t._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dialog1()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("el-button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("提示框Alert"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dialog2()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("el-button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("对话框Confirm"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dialog3()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("el-button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("输入弹框Prompt"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dialog1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dialog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tip'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    showCancel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dialog2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dialog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tip'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    confirm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Dialog confirm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dialog3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dialog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tip'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'请输入：<input type="text" id="dialog3-input">\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    confirm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#dialog3-input'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"自定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义")]),t._v(" "),a("p",[t._v("自定义对话框样式或内容。")]),t._v(" "),a("base-demo",[a("div",{attrs:{slot:"source"},slot:"source"},[a("button",{staticClass:"el-button",attrs:{onclick:"dialog4()"}},[t._v("自定义样式对话框")]),t._v(" "),a("button",{staticClass:"el-button",attrs:{onclick:"dialog5()"}},[t._v("多层对话框")]),t._v(" "),a("script",[t._v("\nfunction dialog4() {\n  $.dialog({\n    content: 'Hello World!',\n    showHeader: false,\n    showCancel: false,\n    coverBGColor: '#000000aa',\n    coverClick: true,\n    top: '40vh',\n    width: '50%',\n    footer: '<span>请点击=></span>',\n    footerCenter: true\n  });\n}\nfunction dialog5() {\n  $.dialog({\n    title: 'Tip',\n    content: '<button onclick=\"dialog6()\" class=\"el-button\">打开新对话框</button>',\n  });\n}\nfunction dialog6() {\n  $.dialog({\n    id: 'u-dialog-1',\n    top: '40vh',\n    content: 'Hello World!',\n  });\n}\n")])]),a("p",[t._v("支持设置"),a("code",[t._v("coverBGColor")]),t._v("、"),a("code",[t._v("showHeader")]),t._v("、"),a("code",[t._v("width")]),t._v("等配置对话框样式。也支持丰富的自定义内容。")]),t._v(" "),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dialog4()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("el-button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("自定义样式对话框"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dialog5()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("el-button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("多层对话框"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dialog4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dialog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    showHeader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    showCancel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    coverBGColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#000000aa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    coverClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'40vh'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'50%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    footer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<span>请点击=></span>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    footerCenter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dialog5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dialog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tip'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'<button onclick="dialog6()" class="el-button">打开新对话框</button>\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dialog6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dialog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'u-dialog-1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'40vh'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("p",[t._v("你可以通过修改"),a("code",[t._v("$.dialogDefaults")]),t._v("来修改全局默认配置，也可以在初始化时传入指定配置"),a("code",[t._v("$.dialog({xx: xx})")]),t._v("。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("对话框id（你可以再次调用对话框函数，设置一个新id值，来弹出一个新的对话框）")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("'u-confirm-0'")])])]),t._v(" "),a("tr",[a("td",[t._v("coverBGColor")]),t._v(" "),a("td",[t._v("遮罩背景色")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("'rgba(0, 0, 0, .5)'")])])]),t._v(" "),a("tr",[a("td",[t._v("coverClick")]),t._v(" "),a("td",[t._v("遮罩是否可点击，以隐藏对话框")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[t._v("zIndex")]),t._v(" "),a("td",[t._v("弹窗z-index样式")]),t._v(" "),a("td",[t._v("string / number")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("'100'")])])]),t._v(" "),a("tr",[a("td",[t._v("top")]),t._v(" "),a("td",[t._v("对话框"),a("code",[t._v("margin-top")]),t._v("值")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("'15vh'")])])]),t._v(" "),a("tr",[a("td",[t._v("width")]),t._v(" "),a("td",[t._v("对话框宽度")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("'420px'")])])]),t._v(" "),a("tr",[a("td",[t._v("headerCenter")]),t._v(" "),a("td",[t._v("头部居中")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[t._v("footerCenter")]),t._v(" "),a("td",[t._v("底部居中")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[t._v("content")]),t._v(" "),a("td",[t._v("对话框内容，支持html")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("''")])])]),t._v(" "),a("tr",[a("td",[t._v("confirm")]),t._v(" "),a("td",[t._v("点击“确定”按钮触发的事件，返回"),a("code",[t._v("true")]),t._v("将关闭对话框，否则不会关闭。你可以设置某元素的属性为"),a("code",[t._v('u-type="confirm"')]),t._v("来绑定这个事件")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("function () {return true}")])])]),t._v(" "),a("tr",[a("td",[t._v("cancel")]),t._v(" "),a("td",[t._v('点击"遮罩"关闭对话框/"取消"按钮/右上角“关闭”按钮触发的事件，返回'),a("code",[t._v("true")]),t._v("将关闭对话框，否则不会关闭。你可以设置某元素的属性为"),a("code",[t._v('u-type="cancel"')]),t._v("来绑定这个事件")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("function () {return true}")])])]),t._v(" "),a("tr",[a("td",[t._v("beforeHide")]),t._v(" "),a("td",[t._v("关闭对话框前触发的函数，返回"),a("code",[t._v("true")]),t._v("将关闭对话框，否则不会关闭")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("function () {return true}")])])]),t._v(" "),a("tr",[a("td",[t._v("afterHide")]),t._v(" "),a("td",[t._v("关闭对话框后触发的函数")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("function () {}")])])]),t._v(" "),a("tr",[a("td",[t._v("showHeader")]),t._v(" "),a("td",[t._v("是否显示头部布局（标题和关闭按钮）")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",[t._v("showClose")]),t._v(" "),a("td",[t._v("是否显示“关闭”按钮")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",[t._v("showCancel")]),t._v(" "),a("td",[t._v("是否显示“取消”按钮")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",[t._v("showConfirm")]),t._v(" "),a("td",[t._v("是否显示“确定”按钮")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",[t._v("footer")]),t._v(" "),a("td",[t._v("底部额外扩展插入的html（位于“取消”按钮前）")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("''")])])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("标题文字，支持函数返回字符串（国际化时可使用）")]),t._v(" "),a("td",[t._v("string / function")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("由国际化组件获取的"),a("code",[t._v("i18n.title")]),t._v("值对应的文本或"),a("code",[t._v("'提示'")])])]),t._v(" "),a("tr",[a("td",[t._v("labelConfirm")]),t._v(" "),a("td",[t._v("“确定”按钮文本，支持函数返回字符串（国际化时可使用）")]),t._v(" "),a("td",[t._v("string / function")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("由国际化组件获取的"),a("code",[t._v("i18n.confirm")]),t._v("值对应的文本或"),a("code",[t._v("'确定'")])])]),t._v(" "),a("tr",[a("td",[t._v("labelCancel")]),t._v(" "),a("td",[t._v("“取消”按钮文本，支持函数返回字符串（国际化时可使用）")]),t._v(" "),a("td",[t._v("string / function")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("由国际化组件获取的"),a("code",[t._v("i18n.cancel")]),t._v("值对应的文本或"),a("code",[t._v("'取消'")])])]),t._v(" "),a("tr",[a("td",[t._v("i18n.title")]),t._v(" "),a("td",[t._v("国际化时"),a("code",[t._v("title")]),t._v("标题文本对应的key值")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("'uConfirmTitle'")])])]),t._v(" "),a("tr",[a("td",[t._v("i18n.confirm")]),t._v(" "),a("td",[t._v("国际化时"),a("code",[t._v("labelConfirm")]),t._v("“确定”按钮文本对应的key值")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("'uConfirmConfirm'")])])]),t._v(" "),a("tr",[a("td",[t._v("i18n.cancel")]),t._v(" "),a("td",[t._v("国际化时"),a("code",[t._v("labelCancel")]),t._v("“取消”按钮文本对应的key值")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("'uConfirmCancel'")])])])])])],1)},[],!1,null,null,null);n.default=e.exports}}]);