<template>
  <v-app>
    <headerLayout></headerLayout>
    <v-content>
      <router-view></router-view>
    </v-content>
    <footerLayout></footerLayout>
  </v-app>
</template>

<script>
import headerLayout from './components/header';
import footerLayout from './components/footer';

export default {
  name: 'App',

  components: {
    headerLayout,
    footerLayout,
  },

  data: () => ({
    //
  }),
};
</script>