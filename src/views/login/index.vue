<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>HELLO</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input
              placeholder="admin"
              v-model="loginForm.username"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              :prefix-icon="Lock"
              show-password
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/moudles/users'
import { useRouter, useRoute } from 'vue-router'
import { ElNotification, FormRules } from 'element-plus'
import { getTime } from '@/utils/time'

let router = useRouter()
let loading = ref(false)
let userStore = useUserStore()

let loginForm = reactive({ username: '', password: '' })
let loginForms = ref()
let route = useRoute()
let login = async () => {
  await loginForms.value.validate()
  try {
    loading.value = true
    await userStore.userLogin(loginForm)
    let redirect = route.query.redirect
    router.push(redirect || '/')
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: getTime(),
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}

const validatorUsername = (_rule: any, value: string, callback: any) => {
  // console.log(rule)

  if (value.length >= 3) {
    callback()
  } else {
    callback(new Error('账号长度至少5位'))
  }
}
const rules = reactive<FormRules>({
  username: [
    // { required: true, message: '用户名不能为空', trigger: 'change' },
    // { min: 3, max: 8, message: '长度 3-8', trigger: 'change' },
    { validator: validatorUsername, trigger: 'change' },
  ],
  password: [
    {
      required: true,
      min: 3,
      max: 10,
      message: '长度 3- 10',
      trigger: 'change',
    },
  ],
})
</script>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}

.login_form {
  position: relative;
  width: 80%;
  top: 30vh;
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover;

  padding: 40px;
  h1 {
    color: white;
    font-size: 40px;
  }

  h2 {
    color: white;
    font-size: 20px;
    margin: 20px 0px;
  }
}

.login_btn {
  width: 100%;
}
</style>
