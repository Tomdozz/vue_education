<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButton"
        >Stored resources</base-button
      >
      <base-button @click="setSelectedTab('add-resource')" :mode="addResButton"
        >Add resource</base-button
      >
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  computed: {
    storedResButton() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButton() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official guide',
          description: 'The official Vue.js documentation',
          link: 'http://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google',
          link: 'http://google.se',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      console.log(tab);
      this.selectedTab = tab;
      console.log(this.selectedTab);
    },
    addResource(enteredTitle, enteredDesc, enteredLink) {
      const newResource = {
        id: new Date().toISOString(),
        title: enteredTitle,
        description: enteredDesc,
        link: enteredLink,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>