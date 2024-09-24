<template>
    <div class="upload-demo">
        <h2 class="title">卡片类型图片上传</h2>
        <div class="mb20">
            <zrx-upload
                :multiple="true"
                :limit="limit"
                :file-list="fileList"
                list-type="picture-card"
                upload-type="image"
                :action="fileUploadUrl"
                accept=".png,.jpg,.jpeg,.svg"
                :on-error="handleUploadError"
                :on-success="handleUploadSuccess"
                @beforeUpload="beforeUpload"
                @onExceed="onExceed"
            ></zrx-upload>
            <div class="describe">
                上传（图片或文件）组件目前默认通过 zrx-upload-image 和 zrx-upload-file 类名来复写样式，复制以下代码后需要保留 list-type="picture-card"、limit、file-list、multiple
                等属性；
            </div>
        </div>
        <h2 class="title">卡片类型文件上传</h2>
        <p class="demonstration">list-type="picture-card",uploadType="file"</p>
        <div class="mb20">
            <zrx-upload
                :multiple="true"
                :limit="limit"
                :file-list="fileList1"
                list-type="picture-card"
                upload-type="file"
                :action="fileUploadUrl"
                accept=".png,.jpg,.jpeg,.svg"
                :on-error="handleUploadError"
                :on-success="handleUploadSuccess1"
                @beforeUpload="beforeUpload"
                @onExceed="onExceed"
            ></zrx-upload>
        </div>
        <h2 class="title">按钮类型文件上传</h2>
        <p class="demonstration">list-type="text"</p>
        <div class="mb20">
            <zrx-upload
                :multiple="true"
                :limit="limit"
                :file-list="fileList2"
                :action="fileUploadUrl"
                :fileSize="fileSize"
                :sizeUnit="sizeUnit"
                accept=".png,.jpg,.jpeg,.svg"
                :on-error="handleUploadError"
                :on-success="handleUploadSuccess1"
                @beforeUpload="beforeUpload"
                @onExceed="onExceed"
            ></zrx-upload>
        </div>
        <h2 class="title">拖拽上传</h2>
        <zrx-upload
            :multiple="true"
            :limit="limit"
            :drag="true"
            :file-list="fileList3"
            :action="fileUploadUrl"
            :file-size="fileSize"
            :size-unit="sizeUnit"
            accept=".png,.jpg,.jpeg,.svg"
            :on-error="handleUploadError"
            :on-success="handleUploadSuccess1"
            @beforeUpload="beforeUpload"
            @onExceed="onExceed"
        ></zrx-upload>
        <el-button @click="testJump" type="primary">testJump</el-button>
        <h2 class="title">禁用</h2>
        <div class="mb20">
            <zrx-upload
                disabled
                :multiple="true"
                :limit="limit"
                :file-list="fileList4"
                list-type="picture-card"
                upload-type="file"
                :action="fileUploadUrl"
                accept=".png,.jpg,.jpeg,.svg"
                :on-error="handleUploadError"
                :on-success="handleUploadSuccess1"
                @beforeUpload="beforeUpload"
                @onExceed="onExceed"
            ></zrx-upload>
        </div>
    </div>
</template>

<script>
import { cloneDeep } from 'lodash-es'
const fileList = [
    {
        name: 'animation_bg_1544207568866508800.jpg',
        url: 'http://10.10.120.211:31900/zrx-gce-event-coordinative/20220705/animation_bg_1544207568866508800.jpg',
        uid: 1657002749164,
        status: 'success'
    },
    {
        name: 'animation_bg_1544207568866508800.jpg',
        url: 'http://10.10.120.211:31900/zrx-gce-event-coordinative/20220705/animation_bg_1544207568866508800.jpg',
        uid: 16570027491144164,
        status: 'success'
    }
]
export default {
    name: 'UploadDemo',
    data() {
        return {
            limit: 3,
            fileList: cloneDeep(fileList),
            fileList1: cloneDeep(fileList),
            fileList2: cloneDeep(fileList),
            fileList3: cloneDeep(fileList),
            fileList4: cloneDeep(fileList),
            fileServerUrl: 'http://10.10.120.211:31900/zrx-gce-event-coordinative',
            fileUploadUrl: 'http://10.10.120.211:32499/gce-filestorage/oss/upload/zrx-gce-event-coordinative',
            fileSize: 50,
            sizeUnit: 'KB'
        }
    },
    methods: {
        testJump() {
            window.open(
                'http://10.10.4.25:8080?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxIiwibGFzdF9sb2dpbl90aW1lIjoiMTY2MTg0MjA0NzAwMCIsInVzZXJfbmFtZSI6ImFkbWluIiwic2NvcGUiOlsiYWxsIl0sImV4cCI6MTY2MTg4NjMwMiwiZXhwaXJlc19pbiI6NDMxOTksImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJhdXRob3JpemF0aW9uIHNldHRpbmcgZW50cmFuY2UifV0sImp0aSI6Ijg4OTM4NTg5LWY2ODktNGU3YS05ZWJjLWNlZGM5M2I3OGY4NCIsImNsaWVudF9pZCI6ImhvbWUifQ.z_MHw92krxxrX6XVRKIRE6Pt_ktca2UrJ6WRwrPPr4Q#/status?status=1'
            )
        },
        // 上传成功回调
        handleUploadSuccess(response, file, fileList) {
            this.fileList.push({
                name: response.data.fileName + '.' + response.data.fileSuffix,
                url: this.fileServerUrl + response.data.link
            })
        },
        handleUploadSuccess1(response, file, fileList) {
            this.fileList1.push({
                url: this.fileServerUrl + response.data.link,
                name: response.data.fileName + '.' + response.data.fileSuffix
            })
        },
        handleUploadSuccess2(response, file, fileList) {
            this.fileList2.push({
                url: this.fileServerUrl + response.data.link,
                name: response.data.fileName + '.' + response.data.fileSuffix
            })
        },
        // 上传失败回调
        handleUploadError(err, file, fileList) {},
        beforeUpload(file, isExceed, isUnAchieved) {
            if (isExceed) {
                this.$message.warning(`文件大小不能超过${this.fileSize}${this.sizeUnit}!`)
            } else if (isUnAchieved) {
                this.$message.warning('文件为空!')
            }
        },
        onExceed(isExceed) {
            if (isExceed) {
                this.$message.warning('超过文件上传的最大个数!')
            }
        }
    }
}
</script>

<style scoped lang="scss">
.upload-demo {
    .describe {
        margin-top: 16px;
        padding: 16px;
        border-left: 5px solid $primary;
        border-radius: 2px;
        line-height: 24px;
        // word-break: break-all;
        background-color: $primary-1;
    }
    .title {
        margin-bottom: 10px;
        border-bottom: none;
    }
    .demonstration {
        opacity: 0.7;
        color: #3b4155;
        line-height: 20px;
        margin-bottom: 8px;
    }
    .mb20 {
        margin-bottom: 20px;
    }
}
</style>
