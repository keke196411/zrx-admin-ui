---
title: Message 消息提示
---

# Message 消息提示

常用于主动操作后的反馈提示

### 只有标题

<div class="m-example">
    <el-button type="primary" @click="openModalTitle('success')">成功对话框</el-button>
    <el-button type="primary" @click="openModalTitle('warning')">警告对话框</el-button>
    <el-button type="primary" @click="openModalTitle('info')">消息对话框</el-button>
    <el-button type="primary" @click="openModalTitle('error')">错误对话框</el-button>
</div>

::: details 示例代码

```html
<el-button type="primary" @click="openModalTitle('success')">成功对话框</el-button>
<el-button type="primary" @click="openModalTitle('warning')">警告对话框</el-button>
<el-button type="primary" @click="openModalTitle('info')">消息对话框</el-button>
<el-button type="primary" @click="openModalTitle('error')">错误对话框</el-button>
<script>
export default {
    data() {
        return {
            modalTextMap: new Map([
                [
                    'info',
                    {
                        title: '传入title：信息（当传入的参数一个有值，另一个参数为空时，传入的内容均已标题格式显示）',
                        // content: '一系列的信息描述可以带标点。'
                        content: ''
                    }
                ],
                [
                    'success',
                    {
                        // title: '成功',
                        title: '',
                        content: '传入content：成功（当传入的参数一个有值，另一个参数为空时，传入的内容均已标题格式显示）'
                    }
                ],
                [
                    'warning',
                    {
                        title: '确认（动作）全部（操作对象类型）？',
                        content: '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点'
                    }
                ],
                [
                    'error',
                    {
                        title: '错误',
                        content:
                            '正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。'
                    }
                ]
            ])
        }
    },
    methods: {
        openModalTitle(type) {
            const target = this.modalTextMap.get(type)
            if (target.content == 0) {
                this.$confirm(target.title, '', {
                    type: type,
                    showClose: false,
                    closeOnClickModal: false,
                    closeOnPressEscape: false,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                })
                    .then(res => {})
                    .catch(err => {})
            } else if (target.title == 0) {
                this.$confirm(target.content, '', {
                    type: type,
                    showClose: false,
                    closeOnClickModal: false,
                    closeOnPressEscape: false,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                })
                    .then(res => {})
                    .catch(err => {})
            } else {
                this.$confirm(target.content, target.title, {
                    type: type,
                    showClose: false,
                    closeOnClickModal: false,
                    closeOnPressEscape: false,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                })
                    .then(res => {})
                    .catch(err => {})
            }
        }
    }
}
</script>
```

:::

### 标题加正文

<div class="m-example">
    <el-button type="primary" @click="openModal('success')">成功对话框</el-button>
    <el-button type="primary" @click="openModal('warning')">警告对话框</el-button>
    <el-button type="primary" @click="openModal('info')">消息对话框</el-button>
    <el-button type="primary" @click="openModal('error')">错误对话框</el-button>
</div>

::: details 示例代码

```html
<el-button type="primary" @click="openModal('success')">成功对话框</el-button>
<el-button type="primary" @click="openModal('warning')">警告对话框</el-button>
<el-button type="primary" @click="openModal('info')">消息对话框</el-button>
<el-button type="primary" @click="openModal('error')">错误对话框</el-button>
<script>
export default {
    data() {
        return {
            modalTextMap: new Map([
                [
                    'info',
                    {
                        title: '传入title：信息（当传入的参数一个有值，另一个参数为空时，传入的内容均已标题格式显示）',
                        // content: '一系列的信息描述可以带标点。'
                        content: ''
                    }
                ],
                [
                    'success',
                    {
                        // title: '成功',
                        title: '',
                        content: '传入content：成功（当传入的参数一个有值，另一个参数为空时，传入的内容均已标题格式显示）'
                    }
                ],
                [
                    'warning',
                    {
                        title: '确认（动作）全部（操作对象类型）？',
                        content: '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点'
                    }
                ],
                [
                    'error',
                    {
                        title: '错误',
                        content:
                            '正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。'
                    }
                ]
            ])
        }
    },
    methods: {
        openModal(type) {
            const target = this.modalTextMap.get(type)
            if (target.content == 0) {
                this.$alert(target.title, '', {
                    type: type,
                    showClose: false,
                    closeOnClickModal: false,
                    closeOnPressEscape: false,
                    confirmButtonText: '关闭'
                })
                    .then(res => {})
                    .catch(err => {})
            } else if (target.title == 0) {
                this.$alert(target.content, '', {
                    type: type,
                    showClose: false,
                    closeOnClickModal: false,
                    closeOnPressEscape: false,
                    confirmButtonText: '关闭'
                })
                    .then(res => {})
                    .catch(err => {})
            } else {
                this.$alert(target.content, target.title, {
                    type: type,
                    showClose: false,
                    closeOnClickModal: false,
                    closeOnPressEscape: false,
                    confirmButtonText: '关闭'
                })
                    .then(res => {})
                    .catch(err => {})
            }
        }
    }
}
</script>
```

:::

### 全局提示

<div class="m-example">
    <el-button type="primary" @click="openMsgtipBounce('success')">成功提示框</el-button>
    <el-button type="primary" @click="openMsgtipBounce('warning')">警告提示框</el-button>
    <el-button type="primary" @click="openMsgtipBounce('info')">消息提示框</el-button>
    <el-button type="primary" @click="openMsgtipBounce('error')">错误提示框</el-button>
</div>

::: details 示例代码

```html
<el-button type="primary" @click="openMsgtipBounce('success')">成功提示框</el-button>
<el-button type="primary" @click="openMsgtipBounce('warning')">警告提示框</el-button>
<el-button type="primary" @click="openMsgtipBounce('info')">消息提示框</el-button>
<el-button type="primary" @click="openMsgtipBounce('error')">错误提示框</el-button>
<script>
export default {
    data() {
        return {
            msgMap: new Map([
                ['info', '你好！欢迎使用金融云2.0专业版，你可以根据自身需求添加业务模块。'],
                ['success', '恭喜！你所提交的信息已经审核通过，如有问题请联系客服。'],
                ['warning', '系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！'],
                ['error', '系统错误，请稍后再试。']
            ])
        }
    },
    methods: {
        openMsgtipBounce(type) {
            this.$message({
                type: type,
                showClose: true,
                message: this.msgMap.get(type)
            })
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
            msgMap: new Map([
                ['info', '你好！欢迎使用金融云2.0专业版，你可以根据自身需求添加业务模块。'],
                ['success', '恭喜！你所提交的信息已经审核通过，如有问题请联系客服。'],
                ['warning', '系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！'],
                ['error', '系统错误，请稍后再试。']
            ]),
            modalTextMap: new Map([
                [
                    'info',
                    {
                        title: '信息',
                        content: '一系列的信息描述可以带标点。'
                    }
                ],
                [
                    'success',
                    {
                        title: '成功',
                        content: '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点'
                    }
                ],
                [
                    'warning',
                    {
                        title: '确认（动作）全部（操作对象类型）？',
                        content: '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点'
                    }
                ],
                [
                    'error',
                    {
                        title: '错误',
                        content:
                            '正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。'
                    }
                ]
            ])
        }
    },
    methods: {
        // modal只有标题
        openModalTitle(type) {
            const target = this.modalTextMap.get(type)
            this.$confirm(target.title, '', {
                type: type,
                showClose: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            })
                .then(res => {})
                .catch(err => {})
        },
        // modal标题加正文
        openModal(type) {
            const target = this.modalTextMap.get(type)
            this.$alert(target.content, target.title, {
                type: type,
                showClose: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                confirmButtonText: '关闭'
            })
                .then(res => {})
                .catch(err => {})
        },
        // message
        openMsgtipBounce(type) {
            this.$message({
                type: type,
                showClose: true,
                message: this.msgMap.get(type)
            })
        }
    }
}
</script>

### 链接

[https://element.eleme.cn/#/zh-CN/component/message](https://element.eleme.cn/#/zh-CN/component/message)

### Attributes

| 参数                     |                                          说明 |           类型 |                     可选值 | 默认值 |
| ------------------------ | --------------------------------------------: | -------------: | -------------------------: | -----: |
| `message`                  |                                      消息文字 | string / VNode |                          — |      — |
| `type`                     |                                          主题 |         string | success/warning/info/error |   info |
| `iconClass`                |                 自定义图标的类名，会覆盖 `type` |         string |                          — |      — |
| `dangerouslyUseHTMLString` |         是否将 `message` 属性作为 HTML 片段处理 |        boolean |                          — |  false |
| `customClass`              |                                    自定义类名 |         string |                          — |      — |
| `duration`                 |         显示时间, 毫秒。设为 0 则不会自动关闭 |         number |                          — |   3000 |
| `showClose`                |                              是否显示关闭按钮 |        boolean |                          — |  false |
| `center`                   |                                  文字是否居中 |        boolean |                          — |  false |
| `onClose`                  | 关闭时的回调函数, 参数为被关闭的 message 实例 |       function |                          — |      — |
| `offset`                   |                  Message 距离窗口顶部的偏移量 |         number |                          — |     20 |

### Methods

| 方法名称 | 说明               | 参数 |
| -------- | ------------------ | ---- |
| `close`  | 关闭当前的 Message | —    |

<div>
    <contributor :maintainer="['zxl']" :members="['zxl', 'gbb', 'agua']"></contributor>
</div>
