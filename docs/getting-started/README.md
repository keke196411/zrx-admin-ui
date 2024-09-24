---
title:快速上手
---

# 快速上手

### 开始使用

**1. 组件引入**

```vue
<template>
    <div>
        <zrx-button icon="favorite-filling">默认按钮</zrx-button>
    </div>
</template>

<script>
import { Button } from 'zrx-admin-ui-2022'

export default {
    components: {
        'zrx-button': Button
    }
}
</script>
```

**2. 全局全部引入**

```js
import Vue from 'vue'
import app from './app.vue'
import ZrxAdminUi from 'zrx-admin-ui-2022'
import 'zrx-admin-ui-2022/src/style/common/var.scss'
import 'zrx-admin-ui-2022/src/style/common/reset.scss'
import 'zrx-admin-ui-2022/src/style/common/component.scss'
import 'zrx-admin-ui-2022/lib/zrx-admin-ui-2022.css'

Vue.use(ZrxAdminUi)

new Vue({
    render: h => h(app)
}).$mount('#app')
```

**3. 全局部分引入**

```js
import Vue from 'vue'
import app from './app.vue'
import { Button } from 'zrx-admin-ui-2022'
import 'zrx-admin-ui-2022/lib/zrx-admin-ui-2022.css'

Vue.component(Button.name, Button)

new Vue({
    render: h => h(app)
}).$mount('#app')
```
