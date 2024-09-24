---
title: Rate 评分
---

# Rate 评分

评分

### 基础用法

<div class="m-example">
    <el-rate v-model="value1" allow-half></el-rate>
</div>

::: details 示例代码

```html
<el-rate v-model="value1" allow-half></el-rate>
<script>
export default {
    data() {
        return {
            value1: 0
        }
    }
}
</script>
```

:::

### 禁用

<div class="m-example">
    <el-rate v-model="value2" allow-half disabled></el-rate>
</div>

::: details 示例代码

```html
<el-rate v-model="value2" allow-half disabled></el-rate>
<script>
export default {
    data() {
        return {
            value2: 2.5
        }
    }
}
</script>
```

:::

<script>
export default {
    data() {
        return {
            value1: 0,
            value2: 2.5
        }
    }
}
</script>

### 链接

[https://element.eleme.cn/#/zh-CN/component/rate](https://element.eleme.cn/#/zh-CN/component/rate)

### Attributes

| 参数                       | 说明                                                                                                                            | 类型         | 可选值 | 默认值                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------ | -------------------------------------------------------- |
| `value / v-model`          | 绑定值                                                                                                                          | number       | —      | 0                                                        |
| `max`                      | 最大分值                                                                                                                        | number       | —      | 5                                                        |
| `disabled`                 | 是否为只读                                                                                                                      | 是否为只读   | —      | false                                                    |
| `allow-half`               | 是否允许半选                                                                                                                    |              | —      | false                                                    |
| `low-threshold`            | 低分和中等分数的界限值，值本身被划分在低分中                                                                                    | number       | —      | 2                                                        |
| `high-threshold`           | 高分和中等分数的界限值，值本身被划分在高分中                                                                                    | number       | —      | 4                                                        |
| `colors`                   | icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色 | array/object | —      | ['#F7BA2A', '#F7BA2A', '#F7BA2A']                        |
| `void-color`               | 未选中 icon 的颜色                                                                                                              | string       | —      | $--nav-text-tab                                          |
| `disabled-void-color`      | 只读时未选中 icon 的颜色                                                                                                        | string       | —      | $--btn-border-color                                      |
| `icon-classes`             | icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名 | array/object | —      | ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'] |
| `void-icon-class`          | 未选中 icon 的类名                                                                                                              | string       | —      | el-icon-star-off                                         |
| `disabled-void-icon-class` | 只读时未选中 icon 的类名                                                                                                        | string       | —      | el-icon-star-on                                          |
| `show-text`                | 是否显示辅助文字，若为真，则会从 `texts` 数组中选取当前分数对应的文字内容                                                       | boolean      | —      | false                                                    |
| `show-score`               | 是否显示当前分数，`show-score` 和 `show-text` 不能同时为真                                                                      | boolean      | —      | false                                                    |
| `text-color`               | 辅助文字的颜色                                                                                                                  | string       | —      | #1F2D3D                                                  |
| `texts`                    | 辅助文字数组                                                                                                                    | array        | —      | ['极差', '失望', '一般', '满意', '惊喜']                 |
| `score-template`           | 分数显示模板                                                                                                                    | string       | —      | {value}                                                  |

### Events

| 事件名称 | 说明           | 回调参数     |
| -------- | -------------- | ------------ |
| `change` | 分值改变时触发 | 改变后的分值 |

<div>
    <contributor :maintainer="['zxl']" :members="['zxl']"></contributor>
</div>
