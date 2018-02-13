<template>
  <div class="loginContainer">
    <router-link id="helloworld" to="/hello">HelloWorld</router-link>
    <p>{{ msg }}</p>
    <el-button @click="goHelloWorld">你好世界</el-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: '登陆'
    }
  },
  methods: {
    goHelloWorld: function () {
      this.$router.push({path: '/hello'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginContainer {
  padding-top: 1.95rem;
  p, span, input{
    font-family: Helvetica Neue,Tahoma,Arial;
  }
}
</style>
