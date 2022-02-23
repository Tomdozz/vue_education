<template>
  <div>
    <active-user :name="name" :age="age"></active-user>
    <user-data @set-data="setactiveUser"></user-data>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            age: ''
        }
    },
    methods: {
        setactiveUser(data){
            this.name = data.name;
            this.age = data.age;
        }
    },
};
</script>