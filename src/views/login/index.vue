<template>
 <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
  <el-form-item label="登录用户名" prop="account">
      <el-input v-model="ruleForm.account" />
    </el-form-item>
    <el-form-item label="登录密码" prop="pass">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="再次输入密码" prop="checkPass">
      <el-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >登录</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup>
import { reactive, ref } from 'vue'
import {useLogin} from '@/store/userInfo'

const useLogins = useLogin()

const ruleFormRef = ref()

const checkAccount = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('请输入用户名'))
  } else {
    callback()
  }

}

const validatePass = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入你的密码'))
  } else {
    console.log(ruleFormRef.value)
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请再次输入你的密码'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("两次密码不一致!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: null,
  checkPass: null,
  account: null,
})

const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  account: [{ validator: checkAccount, trigger: 'blur' }],
})

const submitForm = (formEl) => {

  if (!formEl) return
  formEl.validate((valid) => {
    if (!valid) {
      console.log('error submit!')
    } else {
      useLogins.isLogin(ruleForm)
      return false
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
