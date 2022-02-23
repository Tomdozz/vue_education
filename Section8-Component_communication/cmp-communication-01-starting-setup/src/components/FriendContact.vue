<template>
  <li>
    <h2>{{ name }}{{ isFavorite ? "(Favorie)" : "" }}</h2>
    <button @click="setAsFavorite">Toggle favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  //  emits: ["toggle-favorite"],
  emits: {
    "toggle-favorite": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("id is missing");
        return false;
      }
    },
    'delete': function (){
      return true;
    }
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    setAsFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
    deleteFriend() {
      this.$emit('delete')
    }
  },
};
</script>