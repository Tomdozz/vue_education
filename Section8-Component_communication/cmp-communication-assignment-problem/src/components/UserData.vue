<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="name">
                Name
            </label>
            <input v-model="enteredName" type="text" name="name" id="">
        </div>
        <div>
            <label for="age">
                Age
            </label>
            <input v-model="enteredAge" type="text" name="age" id="">
        </div>
        <button>Set name and age</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            enteredAge: '',
            enteredName: ''
        }
    },
    methods: {
        submitData(){
            this.$emit('set-data', {
                age: this.enteredAge,
                name: this.enteredName
            })
        }
    },
}
</script>