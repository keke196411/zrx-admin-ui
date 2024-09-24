---
title: TimePicker 时间选择器
---

# TimePicker 时间选择器

重置elementUi样式，用于选择或输入时间

### 时间点选择

<div class="m-example">
    <el-time-picker
        v-model="value1"
        value-format="HH:mm:ss"
        :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
        placeholder="请选择时间"
        class="zrx-el-date-time"
        popper-class="zrx-el-date-time-popper"
    ></el-time-picker>
</div>

::: details 示例代码

```html
<el-time-picker
    v-model="value1"
    value-format="HH:mm:ss"
    :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
    placeholder="请选择时间"
    class="zrx-el-date-time"
    popper-class="zrx-el-date-time-popper"
></el-time-picker>
<script>
export default {
    data() {
        return {
            value1: '11:22:00',
        }
    }
}
</script>
```

:::

### 时间范围选择

<div class="m-example">
    <el-time-picker
        value-format="HH:mm:ss"
        format="HH:mm:ss"
        is-range
        v-model="value2"
        range-separator="-"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
        class="zrx-el-date-time"
        popper-class="zrx-el-date-time-popper"
    ></el-time-picker>
</div>

::: details 示例代码

```html
<el-time-picker
    value-format="HH:mm:ss"
    format="HH:mm:ss"
    is-range
    v-model="value2"
    range-separator="-"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围"
    class="zrx-el-date-time"
    popper-class="zrx-el-date-time-popper"
></el-time-picker>
<script>
export default {
    data() {
        return {
            value2: ['11:22:00', '16:00:00'],
        }
    }
}
</script>
```

:::

### 禁用

<div class="m-example">
    <el-time-picker
        v-model="value1"
        value-format="HH:mm:ss"
        :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
        placeholder="请选择时间"
        class="zrx-el-date-time"
        popper-class="zrx-el-date-time-popper"
        disabled
    >
    </el-time-picker>
    <el-time-picker
        value-format="HH:mm:ss"
        format="HH:mm:ss"
        is-range
        v-model="value2"
        range-separator="-"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
        class="zrx-el-date-time"
        popper-class="zrx-el-date-time-popper"
        disabled
    >
    </el-time-picker>
</div>

::: details 示例代码

```html
<el-time-picker
    v-model="value1"
    value-format="HH:mm:ss"
    :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
    placeholder="请选择时间"
    class="zrx-el-date-time"
    popper-class="zrx-el-date-time-popper"
    disabled
>
</el-time-picker>
<el-time-picker
    value-format="HH:mm:ss"
    format="HH:mm:ss"
    is-range
    v-model="value2"
    range-separator="-"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围"
    class="zrx-el-date-time"
    popper-class="zrx-el-date-time-popper"
    disabled
>
</el-time-picker>
<script>
export default {
    data() {
        return {
            value1: '11:22:00',
            value2: ['11:22:00', '16:00:00'],
        }
    }
}
</script>
```

:::

### 链接

[https://element.eleme.cn/#/zh-CN/component/time-picker](https://element.eleme.cn/#/zh-CN/component/time-picker)

### 样式变量

| 变量名             |                默认值 | 说明 |
| ------------------ | --------------------: | ---: |
| $border-3            |              --border-3  |      |
| $primary           |             --primary |      |
| $primary-3           |             --primary-3 |      |
| $primary-4           |             --primary-4 |      |
| $background        |          --background |      |
| $--text-color   |            --font |      |
| $--text-dim   |            --font/0.7 |      |
| $--text-disabled   |            --font/0.3 |      |
| $gray-1   |            --gray-1 |      |
| $gray-2   |            --gray-2 |      |


### Attributes

| 参数              | 说明                     | 类型    | 可选值       | 默认值    |
| ----------------- | ------------------------ | ------- | ------------ | --------- |
| `value / v-model` | 绑定值   | date(TimePicker) / string(TimeSelect)  | —            |  —        |
| `readonly`  | 完全只读   | boolean  | —            | false |
| `disabled`               | 禁用   | boolean  | —            | false  |
| `editable`              | 文本框可输入               | boolean  | —            | true         |
| `clearable`     | 是否显示清除按钮 | boolean | —            | true     |
| `placeholder`         | 非范围选择时的占位内容                 | string  | —            | —         |
| `start-placeholder`              | 范围选择时开始日期的占位内容               | string  | — | —         |
| `end-placeholder`          | 范围选择时开始日期的占位内容           | string | —            | —     |
| `is-range`          | 是否为时间范围选择，仅对`<el-time-picker>`有效         | boolean | —            | false      |
| `align` | 对齐方式             | string  | left / center / right        | left         |
| `popper-class`              | TimePicker 下拉框的类名                 | string  | —            | —         |
| `picker-options`              | 当前时间日期选择器特有的选项参考下表                 | object  | —            | {}         |
| `range-separator`             | 选择范围时的分隔符 | string  | -            | '-'         |
| `value-format`             | 可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象 | string  | 见日期格式   | —        |
| `default-value`| 可选，选择器打开时默认显示的时间 | Date(TimePicker) / string(TimeSelect)  | 可被new Date()解析(TimePicker) / 可选值(TimeSelect)            | —         |

### Time Select Options

| 参数              | 说明                     | 类型    | 可选值       | 默认值    |
| ----------------- | ------------------------ | ------- | ------------ | --------- |
| `start` | 开始时间   | string  | —            |  09:00        |
| `end` | 结束时间   | string  | —            |  18:00        |
| `step` | 间隔时间   | string  | —            |  00:30        |
| `minTime` | 最小时间，小于该时间的时间段将被禁用   | string  | —            |  00:00        |
| `maxTime` | 最大时间，大于该时间的时间段将被禁用   | string  | —            |  —         |

### Events

| 事件名              | 说明                     | 参数    |
| ----------------- | ------------------------ | ------- |
| `change` | 用户确认选定的值时触发   | 组件绑定值  |
| `blur` | 当 input 失去焦点时触发   | 组件实例  |
| `focus` | 当 input 获得焦点时触发   | 组件实例  |

### Methods

| 方法名              | 说明                     | 参数    |
| ----------------- | ------------------------ | ------- |
| `focus` | 使 input 获取焦点   | —  |

<div>
    <contributor :maintainer="['wt']" :members="['wt']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            value1: '11:22:00',
            value2: ['11:22:00', '16:00:00']
        }
    }
}
</script>