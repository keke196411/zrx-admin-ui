---
title: SpringBox 弹性盒
---

# SpringBox 弹性盒

可收缩/展开的自适应容器

### 基础用法

<div class="m-block">
    <el-button type="primary" @click="value1 = !value1">{{ value1 ? '收起' : '展开' }}</el-button>
    <ClientOnly>
        <zrx-spring-box :value="value1">
            <el-form :model="formData1" style="margin-top:24px;padding-bottom:0;">
                <el-form-item prop="name">
                    <span class="label" required>中文名称</span>
                    <el-input v-model="formData1.name" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item prop="ename">
                    <span class="label" required>英文名称</span>
                    <el-input v-model="formData1.ename" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item prop="creator">
                    <span class="label" required>创建者</span>
                    <el-input v-model="formData1.ename" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item prop="category">
                    <span class="label" required>属性类别</span>
                    <el-select v-model="formData1.category" placeholder="请选择">
                        <el-option value="标识类"></el-option>
                        <el-option value="定义类"></el-option>
                        <el-option value="关系类"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <span class="label" reqiured>更新时间</span>
                    <zrx-date-time-picker v-model="formData1.update" type="datetime"></zrx-date-time-picker>
                </el-form-item>
            </el-form>
        </zrx-spring-box>
    </ClientOnly>
</div>

::: details 示例代码

```html
<el-button @click="value1 = !value1">{{ value1 ? '收起' : '展开' }}</el-button>
<zrx-spring-box :value="value1">
    <el-form :model="formData1">
        <el-form-item prop="name">
            <span class="label" required>中文名称</span>
            <el-input v-model="formData1.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item prop="ename">
            <span class="label" required>英文名称</span>
            <el-input v-model="formData1.ename" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item prop="creator">
            <span class="label" required>创建者</span>
            <el-input v-model="formData1.ename" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item prop="category">
            <span class="label" required>属性类别</span>
            <el-select v-model="formData1.category" placeholder="请选择">
                <el-option value="标识类"></el-option>
                <el-option value="定义类"></el-option>
                <el-option value="关系类"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <span class="label" reqiured>更新时间</span>
            <zrx-date-time-picker v-model="formData1.update" type="datetime"></zrx-date-time-picker>
        </el-form-item>
    </el-form>
</zrx-spring-box>
<script>
export default {
    data() {
        return {
            value1: true,
            formData1: {
                name: '',
                ename: '',
                creator: '',
                category: ''
            }
        }
    }
}
</script>
```

:::

### 响应内容变化

<div class="m-block">
    <el-button type="primary" @click="value2 = !value2">{{ value2 ? '收起' : '展开' }}</el-button>
    <ClientOnly>
        <zrx-spring-box :value="value2" ref="springBox">
            <el-form :model="formData2" style="margin-top:24px;padding-bottom:0;">
                <el-form-item prop="name">
                    <span class="label" required>流程名称</span>
                    <el-input v-model="formData2.name" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <span class="label" required>流程编号</span>
                    <el-input v-model="formData2.code" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item prop="gross">
                    <span class="label" required>显示其他</span>
                    <el-radio v-model="formData2.gross" :label="true" @input="toggleGross">是</el-radio>
                    <el-radio v-model="formData2.gross" :label="false" @input="toggleGross">否</el-radio>
                </el-form-item>
                <el-form-item prop="creator" v-show="formData2.gross">
                    <span class="label" required>申请人</span>
                    <el-input v-model="formData2.creator" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item v-show="formData2.gross">
                    <span class="label" reqiured>申请时间</span>
                    <zrx-date-time-picker v-model="formData2.update" type="datetime"></zrx-date-time-picker>
                </el-form-item>
            </el-form>
        </zrx-spring-box>
    </ClientOnly>
</div>

::: tip
当 SpringBox 内容变化时，需要调用 reset 方法重设容器高度
:::

::: details 示例代码

```html
<el-button type="primary" @click="value2 = !value2">{{ value2 ? '收起' : '展开' }}</el-button>
<zrx-spring-box :value="value2" ref="springBox">
    <el-form :model="formData2">
        <el-form-item prop="name">
            <span class="label" required>流程名称</span>
            <el-input v-model="formData2.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item prop="code">
            <span class="label" required>流程编号</span>
            <el-input v-model="formData2.code" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item prop="gross">
            <span class="label" required>显示其他</span>
            <el-radio v-model="formData2.gross" :label="true" @input="toggleGross">是</el-radio>
            <el-radio v-model="formData2.gross" :label="false" @input="toggleGross">否</el-radio>
        </el-form-item>
        <el-form-item prop="creator" v-show="formData2.gross">
            <span class="label" required>申请人</span>
            <el-input v-model="formData2.creator" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item v-show="formData2.gross">
            <span class="label" reqiured>申请时间</span>
            <zrx-date-time-picker v-model="formData2.update" type="datetime"></zrx-date-time-picker>
        </el-form-item>
    </el-form>
</zrx-spring-box>
<script>
export default {
    data() {
        return {
            value2: true,
            formData2: {
                name: '',
                code: '',
                gross: false,
                creator: '',
                update: ''
            }
        }
    },
    methods: {
        toggleGross() {
            this.$nextTick(() => this.$refs.springBox.reset())
        }
    }
}
</script>
```

:::

### Attributes

| 参数           | 说明         | 类型    | 可选值      | 默认值 |
| -------------- | ------------ | ------- | ----------- | ------ |
| `value`        | 展开/折叠    | boolean | true, false | true   |
| `start-height` | 折叠时的高度 | number  | —           | 0      |

### Methods

| 方法名称 | 说明           | 参数 |
| -------- | -------------- | ---- |
| `reset`  | 重置 SpringBox | —    |

### Events

| 事件名称   | 说明                | 回调参数        |
| ---------- | ------------------- | --------------- |
| `onToggle` | 展开/折叠完成的回调 | v: 当前是否展开 |

### Slots

| name | 说明              |
| ---- | ----------------- |
| —    | SpringBox内嵌内容 |

<div>
    <contributor :maintainer="['agua']" :members="['agua']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            value1: true,
            formData1: {
                name: '',
                ename: '',
                creator: '',
                category: ''
            },
            value2: true,
            formData2: {
                name: '',
                code: '',
                gross: false,
                creator: '',
                update: ''
            }
        }
    },
    methods: {
        toggleGross() {
            this.$nextTick(() => this.$refs.springBox.reset())
        }
    }
}
</script>
