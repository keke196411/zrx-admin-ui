---
title: Switch 开关
---

# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」

### 基础用法
default: 48 * 24;
middle: 40 * 20;
small: 32 * 16
<div class="m-example">
    <el-switch v-model="value1"></el-switch>
    <el-switch v-model="value1" size="middle"></el-switch>
    <el-switch v-model="value1" size="small"></el-switch>
    <el-switch v-model="value2" active-text="开启" inactive-text="关闭"></el-switch>
</div>

::: details 示例代码

```html
<el-switch v-model="value1"></el-switch>
<el-switch v-model="value1" size="middle"></el-switch>
<el-switch v-model="value1" size="small"></el-switch>
<el-switch v-model="value2" active-text="开启" inactive-text="关闭"></el-switch>
<script>
export default {
    data() {
        return {
            value1: true,
            value2: false
        }
    }
}
</script>
```

:::

### 禁用

<div class="m-example">
    <el-switch v-model="value3" disabled></el-switch>
    <el-switch v-model="value4" disabled></el-switch>
</div>

::: details 示例代码

```html
<el-switch v-model="value3" disabled></el-switch>
<el-switch v-model="value4" disabled></el-switch>
<script>
export default {
    data() {
        return {
            value3: true,
            value4: false
        }
    }
}
</script>
```

:::

### 链接

[https://element.eleme.cn/#/zh-CN/component/switch](https://element.eleme.cn/#/zh-CN/component/switch)

### 样式变量

| 变量名                    |                        默认值 |                                 说明 |
| ------------------------- | ----------------------------: | -----------------------------------: |
| --switch-height           |                          24px |                                      |
| --switch-width            |                          48px |                                      |
| --switch-border           |                    --border-3 |     未选中边框 220, 223, 232 #dcdfe8 |
| --switch-bg               |                    --border-3 |   未选中背景色 220, 223, 232 #dcdfe8 |
| --switch-bg-hover         | --radio-hover-inner-unchecked |     未选中悬停 232, 234, 240 #e8eaf0 |
| --switch-bg-disabled      |                   --primary-1 | 选中禁用背景色 236, 239, 254 #eceffe |
| --switch-disabled-border  |       --tag-blue-border-color |   选中禁用边框 167, 183, 254 #a7b7fe |
| --switch-bg-checked       |                      $primary |     选中后背景色 64, 95, 254 #405ffe |
| --switch-bg-checked-hover |          --radio-hover-border |     选中后悬停 102, 127, 254 #667ffe |

### Attributes

| 参数                | 说明                                                        | 类型                      | 可选值 | 默认值  |
| ------------------- | ----------------------------------------------------------- | ------------------------- | ------ | ------- |
| `value`               | 绑定值                                                      | boolean / string / number |        |         |
| `disabled`            | 是否禁用                                                    | boolean                   |        | false   |
| `size`               | switch尺寸大小                                       | string                    | default/middle/small       | default     |
| `width`               | switch 的宽度（像素）                                       | number                    |        | 40      |
| `active-icon-class`   | switch 打开时所显示图标的类名，设置此项会忽略 `active-text`   | string                    |        |         |
| `inactive-icon-class` | switch 关闭时所显示图标的类名，设置此项会忽略 `inactive-text` | string                    |        |         |
| `active-text`         | switch 打开时的文字描述                                     | string                    |        |         |
| `inactive-text`       | switch 关闭时的文字描述                                     | string                    |        |         |
| `active-value`        | switch 打开时的值                                           | boolean / string / number |        | true    |
| `inactive-value`      | switch 关闭时的值                                           | boolean / string / number |        | false   |
| `active-color`        | switch 打开时的背景色                                       | string                    |        | #409EFF |
| `inactive-color`      | switch 关闭时的背景色                                       | string                    |        | #C0CCDA |
| `name`                | switch 对应的 `name` 属性                                     | string                    |        |         |
| `validate-event`     | 改变 switch 状态时是否触发表单的校验                        | boolean                   |        | true    |

### Events

| 事件名称 | 说明                            | 回调参数   |
| -------- | ------------------------------- | ---------- |
| `change`   | switch 状态发生变化时的回调函数 | 新状态的值 |

### Methods

| 方法名 | 说明               | 参数 |
| ------ | ------------------ | ---- |
| `focus`  | 使 Switch 获取焦点 |      |

<div>
    <contributor :maintainer="['zxl']" :members="['zxl', 'gbb']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            value1: true,
            value2: false,
            value3: true,
            value4: false
        }
    }
}
</script>
