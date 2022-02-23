<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input v-model="enteredName" type="text" />
    </div>
    <div>
      <label>Phone</label>
      <input v-model="enteredPhone" type="tel" />
    </div>
    <div>
      <label>Email</label>
      <input v-model="enteredEmail" type="email" />
    </div>
    <div>
      <button>Add contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>

<style scoped>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>