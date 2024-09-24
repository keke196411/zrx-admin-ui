---
title: TabBar 标签切换
---

# TabBar 标签切换

提供单独的标签切换功能

### 基础用法

<div class="m-example">
    <zrx-tab-bar v-model="tabObj1.current" :tabs="tabObj1.tabs"></zrx-tab-bar>
    <transition-group name="slideAsideTab" class="bar" tag="div">
        <p class="m-text" v-for="n in tabObj1.tabs" :key="n.value" v-if="tabObj1.current == n.value">{{ n.label }}</p>
    </transition-group>
</div>

::: details 示例代码

```html
<zrx-tab-bar v-model="tabObj1.current" :tabs="tabObj1.tabs"></zrx-tab-bar>
<transition-group name="slideAsideTab" class="bar" tag="div">
    <p class="m-text" v-for="n in tabObj1.tabs" :key="n.value" v-if="tabObj1.current == n.value">{{ n.label }}</p>
</transition-group>
<script>
export default {
    data() {
        return {
            tabObj1: {
                current: 1,
                tabs: [
                    {
                        label: '用户中心',
                        value: 1
                    },
                    {
                        label: '应用中心',
                        value: 2
                    },
                    {
                        label: '用户管理',
                        value: 3
                    }
                ]
            }
        }
    }
}
</script>
```

:::

### 配合zrx-tab-content

<div class="m-example">
    <zrx-tab-bar v-model="tabObj2.active" :tabs="tabObj2.menu"></zrx-tab-bar>
    <zrx-tab-content class="bar" :value="tabObj2.active">
        <span class="m-text" :key="1">标签页1</span>
        <span class="m-text" :key="2">tab2</span>
        <span class="m-text" :key="3">t</span>
    </zrx-tab-content>
</div>

::: details 示例代码

```html
<zrx-tab-bar v-model="tabObj2.active" :tabs="tabObj2.menu"></zrx-tab-bar>
<zrx-tab-content class="bar" :value="tabObj2.active">
    <span class="m-text" :key="1">标签页1</span>
    <span class="m-text" :key="2">tab2</span>
    <span class="m-text" :key="3">t</span>
</zrx-tab-content>

<script>
export default {
    data() {
        return {
            tabObj2: {
                active: 1,
                menu: [
                    {
                        label: '标签页1',
                        value: 1,
                        count: 22
                    },
                    {
                        label: 'tab2',
                        value: 2,
                        count: 0
                    },
                    {
                        label: 't',
                        value: 3,
                        count: 34
                    }
                ]
            }
        }
    }
}
</script>
```

:::

### 可滑动

标签数量较多时，转为滑动模式

<div class="m-example">
    <zrx-tab-bar v-model="tabObj3.current" :tabs="tabObj3.menu" mode="scroll" :max-tabs-show="4">
        <template slot="tab" slot-scope="{ tabData }">
            <span>{{ `${tabData.label}(${tabData.count})` }}</span>
        </template>
    </zrx-tab-bar>
    <div class="bar text">{{ tabObj3.menu[tabObj3.current].label }}</div>
</div>

::: details 示例代码

```html
<div class="m-example">
    <zrx-tab-bar v-model="tabObj3.current" :tabs="tabObj3.menu" mode="scroll" :max-tabs-show="4">
        <template slot="tab" slot-scope="{ tabData }">
            <span>{{ `${tabData.label}(${tabData.count})` }}</span>
        </template>
    </zrx-tab-bar>
    <div class="bar text">{{ tabObj3.menu[tabObj3.current].label }}</div>
</div>
<script>
export default {
    data() {
        return {
            tabObj3: {
                current: 0,
                menu: [
                    {
                        label: 'tab1',
                        value: 0,
                        count: 22
                    },
                    {
                        label: 'tab2',
                        value: 1,
                        count: 0
                    },
                    {
                        label: 'tab3',
                        value: 2,
                        count: 34
                    },
                    {
                        label: 'tab4',
                        value: 3,
                        count: 0
                    },
                    {
                        label: 'tab5',
                        value: 4,
                        count: 5
                    },
                    {
                        label: 'tab6',
                        value: 5,
                        count: 6
                    },
                    {
                        label: 'tab7',
                        value: 6,
                        count: 12
                    },
                    {
                        label: 'tab8',
                        value: 7,
                        count: 0
                    }
                ]
            }
        }
    }
}
</script>
```

:::

### 可切换

标签数量过多时，转为下拉切换模式

<div class="m-example">
    <zrx-tab-bar v-model="tabObj4.active" :tabs="tabObj4.menu" mode="toggle"></zrx-tab-bar>
    <div class="bar text">{{ tabObj4.menu[tabObj4.active-1].label }}</div>
</div>

::: details 示例代码

```html
<zrx-tab-bar v-model="tabObj4.active" :tabs="tabObj4.menu" mode="toggle"></zrx-tab-bar>
<div class="bar text">{{ tabObj4.menu[tabObj4.active-1].label }}</div>
<script>
export default {
    data() {
        return {
            tabObj4: {
                active: 1,
                menu: [
                    {
                        label: 'tab1',
                        value: 1,
                        count: 22
                    },
                    {
                        label: 'tab2',
                        value: 2,
                        count: 0
                    },
                    {
                        label: 'tab3',
                        value: 3,
                        count: 34
                    },
                    {
                        label: 'tab4',
                        value: 4,
                        count: 0
                    },
                    {
                        label: 'tab5',
                        value: 5,
                        count: 5
                    },
                    {
                        label: 'tab6',
                        value: 6,
                        count: 6
                    },
                    {
                        label: 'tab7',
                        value: 7,
                        count: 12
                    },
                    {
                        label: 'tab8',
                        value: 8,
                        count: 0
                    },
                    {
                        label: 'tab9',
                        value: 9,
                        count: 20
                    },
                    {
                        label: 'tab10',
                        value: 10,
                        count: 0
                    },
                    {
                        label: 'tab11',
                        value: 11,
                        count: 2
                    },
                    {
                        label: 'tab12',
                        value: 12,
                        count: 11
                    },
                    {
                        label: 'tab13',
                        value: 13,
                        count: 50
                    },
                    {
                        label: 'tab14',
                        value: 14,
                        count: 22
                    },
                    {
                        label: 'tab15',
                        value: 15,
                        count: 0
                    },
                    {
                        label: 'tab16',
                        value: 16,
                        count: 66
                    }
                ]
            }
        }
    }
}
</script>
```

:::

### Attributes

| 参数             | 说明                            | 类型           | 可选值                      | 默认值 |
| ---------------- | ------------------------------- | -------------- | --------------------------- | ------ |
| `tabs`           | 标签栏数据                      | Array          | —                           | —      |
| `value/v-model`  | 选中项数据                      | String, Number | —                           | —      |
| `mouseFeedback`  | 标签栏是否派发鼠标移入/移出事件 | Boolean        | true, false                 | false  |
| `manuallyInit`   | 是否手动初始化                  | Boolean        | true, false                 | false  |
| `props`          | 字段配置                        | Object         | 字段配置参见[Props](#props) | —      |
| `maxTabsShow`    | 以扁平形式显示的最多标签数量    | Number         | —                           | 5      |
| `mode`           | 标签切换形式                    | String         | static, scroll, toggle      | static |
| `maxScrollTabs`  | 以滚动形式显示的最多标签数量    | Number         | —                           | 15     |
| `staticTabWidth` | 静态形式时最大标签长度          | Number         | —                           | 192    |
| `scrollTabWidth` | 滚动形式时最大标签长度          | Number         | —                           | 100    |

### Props

| 参数    | 说明           | 类型   | 可选值 | 默认值 |
| ------- | -------------- | ------ | ------ | ------ |
| `label` | 标签名称字段   | String | —      | label  |
| `key`   | 标签唯一标识符 | String | —      | value  |

### Methods

| 方法名称 | 说明         | 参数 |
| -------- | ------------ | ---- |
| `init`   | 初始化标签栏 | —    |

### Events

| 事件名称 | 说明               | 回调参数            |
| -------- | ------------------ | ------------------- |
| `change` | 选中标签变化的回调 | tab: 选中的数据对象 |

### Scoped Slots

| 插槽名称 | 说明           | 参数                      |
| -------- | -------------- | ------------------------- |
| `tab`    | 标签页内部内容 | tabData: 标签页对应的数据 |

<div>
    <contributor :maintainer="['agua']" :members="['agua']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            tabObj1: {
                current: 1,
                tabs: [
                    {
                        label: '用户中心',
                        value: 1
                    },
                    {
                        label: '应用中心',
                        value: 2
                    },
                    {
                        label: '用户管理',
                        value: 3
                    }
                ]
            },
            tabObj2: {
                active: 1,
                menu: [
                    {
                        label: '标签页1',
                        value: 1,
                        count: 22
                    },
                    {
                        label: 'tab2',
                        value: 2,
                        count: 0
                    },
                    {
                        label: 't',
                        value: 3,
                        count: 34
                    }
                ]
            },
            tabObj3: {
                current: 1,
                menu: [
                    {
                        label: 'tab1',
                        value: 1,
                        count: 22
                    },
                    {
                        label: 'tab2',
                        value: 2,
                        count: 0
                    },
                    {
                        label: 'tab3',
                        value: 3,
                        count: 34
                    },
                    {
                        label: 'tab4',
                        value: 4,
                        count: 0
                    },
                    {
                        label: 'tab5',
                        value: 5,
                        count: 5
                    },
                    {
                        label: 'tab6',
                        value: 6,
                        count: 6
                    },
                    {
                        label: 'tab7',
                        value: 7,
                        count: 12
                    },
                    {
                        label: 'tab8',
                        value: 8,
                        count: 0
                    }
                ]
            },
            tabObj4: {
                active: 1,
                menu: [
                    {
                        label: 'tab1',
                        value: 1,
                        count: 22
                    },
                    {
                        label: 'tab2',
                        value: 2,
                        count: 0
                    },
                    {
                        label: 'tab3',
                        value: 3,
                        count: 34
                    },
                    {
                        label: 'tab4',
                        value: 4,
                        count: 0
                    },
                    {
                        label: 'tab5',
                        value: 5,
                        count: 5
                    },
                    {
                        label: 'tab6',
                        value: 6,
                        count: 6
                    },
                    {
                        label: 'tab7',
                        value: 7,
                        count: 12
                    },
                    {
                        label: 'tab8',
                        value: 8,
                        count: 0
                    },
                    {
                        label: 'tab9',
                        value: 9,
                        count: 20
                    },
                    {
                        label: 'tab10',
                        value: 10,
                        count: 0
                    },
                    {
                        label: 'tab11',
                        value: 11,
                        count: 2
                    },
                    {
                        label: 'tab12',
                        value: 12,
                        count: 11
                    },
                    {
                        label: 'tab13',
                        value: 13,
                        count: 50
                    },
                    {
                        label: 'tab14',
                        value: 14,
                        count: 22
                    },
                    {
                        label: 'tab15',
                        value: 15,
                        count: 0
                    },
                    {
                        label: 'tab16',
                        value: 16,
                        count: 66
                    }
                ]
            }
        }
    }
}
</script>
