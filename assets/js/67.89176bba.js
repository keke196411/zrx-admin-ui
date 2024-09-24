(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{774:function(t,a,s){"use strict";s.r(a);var l={name:"zrxRollNumberDemo",data:function(){return{value1:0,value2:58693.1266,value3:0,value4:2968525450.1225,value5:0,value6:119953004,value7:0,value8:0,value9:4.55,value10:0}},methods:{changeValue:function(){this.value3+=3e3}}},e=s(2),i=Object(e.a)(l,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"roll-number-demo"},[s("div",{staticClass:"m-demo-row"},[s("h2",{staticClass:"title"},[t._v("基础用法")]),t._v(" "),s("p",{staticClass:"subtitle"},[t._v("基础的滚动数字")]),t._v(" "),s("p",{staticClass:"m-row"},[s("el-button",{attrs:{type:"primary"},on:{click:function(a){t.value1=1698}}},[t._v("开始")])],1),t._v(" "),s("div",{staticClass:"gallery"},[s("zrx-roll-number",{attrs:{value:t.value1}})],1)]),t._v(" "),s("div",{staticClass:"m-demo-row"},[s("h2",{staticClass:"title"},[t._v("值为负数")]),t._v(" "),s("p",{staticClass:"subtitle"},[t._v("传入负值，往负值递减")]),t._v(" "),s("p",{staticClass:"m-row"},[s("el-button",{attrs:{type:"primary"},on:{click:function(a){t.value8=-22350}}},[t._v("开始")])],1),t._v(" "),s("div",{staticClass:"gallery"},[s("zrx-roll-number",{attrs:{value:t.value8}})],1)]),t._v(" "),s("div",{staticClass:"m-demo-row"},[s("h2",{staticClass:"title"},[t._v("保留小数")]),t._v(" "),s("p",{staticClass:"subtitle"},[t._v("保留2位小数")]),t._v(" "),s("div",{staticClass:"gallery"},[s("zrx-roll-number",{attrs:{tag:"span",value:t.value2,"retain-decimals":2}})],1)]),t._v(" "),s("div",{staticClass:"m-demo-row"},[s("h2",{staticClass:"title"},[t._v("设置初始值")]),t._v(" "),s("p",{staticClass:"m-row"},[s("el-button",{attrs:{type:"primary"},on:{click:function(a){t.value9=-5.55}}},[t._v("开始")])],1),t._v(" "),s("div",{staticClass:"gallery"},[s("zrx-roll-number",{attrs:{value:t.value9,"inited-value":"","retain-decimals":"2"}})],1),t._v(" "),s("p",{staticClass:"describe"},[t._v("默认数字从0开始过渡。设置inited-value为true，数字从一开始的value值开始过渡。")])]),t._v(" "),s("div",{staticClass:"m-demo-row"},[s("h2",{staticClass:"title"},[t._v("过渡时间")]),t._v(" "),s("p",{staticClass:"m-row"},[s("el-button",{attrs:{type:"primary"},on:{click:t.changeValue}},[t._v("开始")])],1),t._v(" "),s("div",{staticClass:"gallery"},[s("p",{staticClass:"subtitle"},[t._v("默认过渡时间500ms")]),t._v(" "),s("zrx-roll-number",{attrs:{value:t.value3}})],1),t._v(" "),s("div",{staticClass:"gallery"},[s("p",{staticClass:"subtitle"},[t._v("过渡时间1500ms")]),t._v(" "),s("zrx-roll-number",{attrs:{value:t.value3,duration:1500}})],1)]),t._v(" "),s("div",{staticClass:"m-demo-row"},[s("h2",{staticClass:"title"},[t._v("分隔符")]),t._v(" "),s("p",{staticClass:"subtitle"},[t._v('每隔三位加","分隔符')]),t._v(" "),s("div",{staticClass:"gallery"},[s("zrx-roll-number",{attrs:{value:t.value4,"break-sign":"","retain-decimals":"2"}})],1)]),t._v(" "),s("div",{staticClass:"m-demo-row"},[s("h2",{staticClass:"title"},[t._v("添加单位")]),t._v(" "),s("div",{staticClass:"gallery"},[s("p",{staticClass:"subtitle"},[t._v("原值")]),t._v("\n            调用总数："),s("zrx-roll-number",{attrs:{value:t.value6}},[t._v("次")])],1),t._v(" "),s("div",{staticClass:"gallery"},[s("p",{staticClass:"subtitle"},[t._v("缩短后")]),t._v("\n            调用总数："),s("zrx-roll-number",{attrs:{value:t.value6,"add-unit":"","retain-decimals":"2"}},[t._v("次")])],1),t._v(" "),s("div",{staticClass:"describe"},[t._v("数值较大时，可开启add-unit自动为数值添加单位以缩短长度。注意设置retain-decimals。")])]),t._v(" "),s("div",{staticClass:"m-demo-row"},[s("h2",{staticClass:"title"},[t._v("单位插槽")]),t._v(" "),s("p",{staticClass:"subtitle"},[t._v("通过插槽分离数值与单位的样式")]),t._v(" "),s("div",{staticClass:"gallery"},[t._v("\n            地区生产总值："),s("zrx-roll-number",{staticStyle:{"font-size":"24px"},attrs:{value:t.value7,"add-unit":"","retain-decimals":"2",duration:2e3},scopedSlots:t._u([{key:"unit",fn:function(a){var l=a.unit;return s("span",{staticStyle:{"font-size":"14px",opacity:"0.7"}},[t._v(t._s(l+"元"))])}}])})],1),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(a){t.value7=1208806569821}}},[t._v("开始")])],1),t._v(" "),s("div",{staticClass:"m-demo-row"},[s("h2",{staticClass:"title"},[t._v("有选择地保留小数")]),t._v(" "),s("p",{staticClass:"subtitle"},[t._v("\n            roll-number在某些语境下（只能是整数）、值较小且保留小数时，带小数的数值变化可能不是想要的结果。设置always-decimal: false，当值不出现单位时，将不会出现小数。\n        ")]),t._v(" "),s("div",{staticClass:"gallery"},[t._v("今日访问次数："),s("zrx-roll-number",{attrs:{value:t.value10,"add-unit":"","retain-decimals":2,"always-decimal":!1}},[t._v("次")])],1),t._v(" "),s("el-button",{on:{click:function(a){t.value10=666}}},[t._v("较小值")]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(a){t.value10=12345}}},[t._v("较大值")]),t._v(" "),s("p",{staticClass:"describe"},[t._v("注意前提是设置了add-unit和retain-decimals。只有这种条件下，值大时保留小数，值小时取整才是有意义的。")])],1),t._v(" "),s("div",{staticClass:"m-demo-row"},[s("h2",{staticClass:"title"},[t._v("缺省值")]),t._v(" "),s("p",{staticClass:"subtitle"},[t._v("当值不是数字或字符串的数字时，roll-number显示缺省值。")]),t._v(" "),s("zrx-roll-number",{attrs:{value:void 0}})],1)])}),[],!1,null,null,null);a.default=i.exports}}]);