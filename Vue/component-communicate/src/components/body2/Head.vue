<template>
    <div class="head">
        <input type="text" v-model="message">
        <button @click="submit">确实</button>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                message: ''
            }
        },      
      methods: {
        submit() {
            if(this.message == '') return
            // 将message传递给父组件
            this.$emit('add', this.message)
            this.message = ''
        }
      },
    }
</script>

<style lang="css" scoped>

</style>