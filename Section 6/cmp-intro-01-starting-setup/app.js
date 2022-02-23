const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "manuel l",
          phone: "1234567890",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "lulie j",
          phone: "789544567890",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
    `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "manuel l",
        phone: "1234567890",
        email: "manuel@localhost.com",
      }
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
