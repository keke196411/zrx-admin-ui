---
title: DatePicker 日期选择器
---

# DatePicker 日期选择器

重置elementUi样式，用于选择或输入日期

### 日期选择

<div class="m-example">
    <el-date-picker
        v-model="value3"
        type="date"
        placeholder="选择日期"
    >
    </el-date-picker>
</div>

::: details 示例代码

```html
<el-date-picker
    v-model="value3"
    type="date"
    placeholder="选择日期"
>
</el-date-picker>
<script>
export default {
    data() {
        return {
            value3: '2023-04-24'
        }
    }
}
</script>
```

:::

### 日期选择(今天快捷键 + 禁止选择今天之前的日期)

<div class="m-example">
    <el-date-picker
        v-model="value3"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions"
    >
    </el-date-picker>
</div>

::: details 示例代码

```html
<el-date-picker
    v-model="value3"
    type="date"
    placeholder="选择日期"
    :picker-options="pickerOptions"
>
</el-date-picker>
<script>
export default {
    data() {
        return {
            value3: '2023-04-24',
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() + 24 * 60 * 60 * 1000 < Date.now()
                },
                shortcuts: [
                    {
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date())
                        }
                    }
                ]
            }
        }
    }
}
</script>
```

:::

### 周选择\月选择\年选择
element月份和年份每行4个,与UI规范的不一致
<div class="m-example">
    <el-date-picker
        v-model="value4"
        type="week"
        format="yyyy-WW周"
        placeholder="请选择周"
    >
    </el-date-picker>
    <el-date-picker
        v-model="value5"
        type="month"
        format="yyyy-MM"
        placeholder="请选择月"
    >
    </el-date-picker>
    <el-date-picker
        v-model="value6"
        type="year"
        placeholder="请选择年"
    >
    </el-date-picker>
</div>

::: details 示例代码

```html
<el-date-picker
    v-model="value4"
    type="week"
    format="yyyy-WW周"
    placeholder="请选择周"
>
</el-date-picker>
<el-date-picker
    v-model="value5"
    type="month"
    format="yyyy-MM"
    placeholder="请选择月"
>
</el-date-picker>
<el-date-picker
    v-model="value6"
    type="year"
    placeholder="请选择年"
>
</el-date-picker>
<script>
export default {
    data() {
        return {
            value4: '',
            value5: '',
            value6: ''
        }
    }
}
</script>
```

:::

### 日期范围选择

<div class="m-example">
    <el-date-picker
        v-model="value7"
        format="yyyy年M月d日"
        value-format="yyyy-MM-dd"
        type="daterange"
        range-separator="-"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions2"
    >
    </el-date-picker>
</div>

::: details 示例代码

```html
<el-date-picker
    v-model="value7"
    format="yyyy年M月d日"
    value-format="yyyy-MM-dd"
    type="daterange"
    range-separator="-"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :picker-options="pickerOptions2"
>
</el-date-picker>
<script>
export default {
    data() {
        return {
            value7: ['2023-04-24', '2023-04-27']
        }
    }
}
</script>
```

:::

### 禁用

<div class="m-example">
    <el-date-picker
        v-model="value3"
        type="date"
        placeholder="选择日期"
        disabled
    ></el-date-picker>
    <el-date-picker
        v-model="value7"
        format="yyyy年M月d日"
        value-format="yyyy-MM-dd"
        type="daterange"
        range-separator="-"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions2"
        disabled
    >
    </el-date-picker>
</div>

::: details 示例代码

```html
<el-date-picker
    v-model="value3"
    type="date"
    placeholder="选择日期"
    disabled
></el-date-picker>
<el-date-picker
    v-model="value7"
    format="yyyy年M月d日"
    value-format="yyyy-MM-dd"
    type="daterange"
    range-separator="-"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    disabled
>
</el-date-picker>
<script>
export default {
    data() {
        return {
            value3: '2023-04-24',
            value7: ['2023-04-24', '2023-04-27'],
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
| `type`          | 显示类型           | string | year/month/week/date/daterange           | date     |
| `format`          | 显示在输入框中的格式         | string | 见日期格式            | yyyy-MM-dd      |
| `align` | 对齐方式             | string  | left / center / right        | left         |
| `popper-class`              | DatePicker 下拉框的类名                 | string  | —            | —         |
| `picker-options`              | 当前时间日期选择器特有的选项参考下表                 | object  | —            | {}         |
| `range-separator`             | 选择范围时的分隔符 | string  | -            | '-'         |
| `default-value`| 可选，选择器打开时默认显示的时间 | Date  | 可被new Date()解析(TimePicker) / 可选值(TimeSelect)   | —   |      —        |
| `default-time`| 范围选择时选中日期所使用的当日内具体时刻  | string[]            | 数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 00:00:00         | —        |
| `value-format`             | 可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象 | string  | 见日期格式   | —        |
| `validate-event`             | 输入时是否触发表单的校验 | boolean  | —    | true        |
| `append-to-body`             | DetePicker 自身是否插入至 body 元素上。 | boolean  | —    | true        |


### Picker Options

| 参数              | 说明                     | 类型    | 可选值       | 默认值    |
| ----------------- | ------------------------ | ------- | ------------ | --------- |
| `shortcuts` | 设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表   | Object[]  | —            |  —       |
| `disabledDate` | 设置禁用状态，参数为当前日期，要求返回 Boolean   | Function  | —            |  —        |
| `cellClassName` | 设置日期的 className   | Function(Date)  | —            |  —      |
| `firstDayOfWeek` | 周起始日   | Number  | 1 到 7            |  7        |
| `onPick` | 选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效   | Function({ maxDate, minDate })  | —            |  —         |

### Shortcuts

| 参数              | 说明                     | 类型    | 可选值       | 默认值    |
| ----------------- | ------------------------ | ------- | ------------ | --------- |
| `text` | 标题文本   | string  | —            |  —       |
| `onClick` | 选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date())   | function  | —            |  —        |

### Events

| 事件名              | 说明                     | 参数    |
| ----------------- | ------------------------ | ------- |
| `change` | 用户确认选定的值时触发   | 组件绑定值。格式与绑定值一致，可受 value-format 控制  |
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
            value3: '2023-04-24',
            value4: '',
            value5: '',
            value6: '',
            value7: ['2023-04-24', '2023-04-27'],
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() + 24 * 60 * 60 * 1000 < Date.now()
                },
                shortcuts: [
                    {
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date())
                        }
                    }
                ]
            },
            pickerOptions2: {
                disabledDate(time) {
                    return time.getTime() + 24 * 60 * 60 * 1000 < Date.now()
                }
            }
        }
    }
}
</script>