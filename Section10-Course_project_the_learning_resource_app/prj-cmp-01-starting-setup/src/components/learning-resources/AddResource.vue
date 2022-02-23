<template>
  <div>
    <base-dialog
      @close="confirmError"
      title="Invalid input"
      v-if="inputIsInvalid"
    >
      <template #default>
        <p>One or more inputs is invalid, pleas go back and fix</p>
        <p>Check all and follow the ruels</p>
      </template>
      <template #actions>
        <base-button @click="confirmError">Ok</base-button>
      </template>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" ref="titleInput" />
        </div>
        <div class="form-control">
          <label for="desc">description</label>
          <textarea name="desc" id="desc" rows="3" ref="descInput"></textarea>
        </div>
        <div class="form-control">
          <label for="link">Url</label>
          <input type="url" name="link" id="link" ref="linkInput" />
        </div>
        <div>
          <base-button>Add resource</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseDialog },
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    confirmError() {
      this.inputIsInvalid = false;
    },
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDesc = this.$refs.descInput.value;
      const enteredLink = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === '' ||
        enteredDesc.trim() === '' ||
        enteredLink.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(enteredTitle, enteredDesc, enteredLink);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>