<template>
  <v-app-bar app class="navbar">
    <div class="container">
      <div class="d-flex align-center w-100">
        <div class="logo">
          <a v-bind:href="'/'">
            <img class="" :src="require('@/assets/img/moebius-logo-color.png')" height="44" width="auto"/>
          </a>
        </div>
        <v-spacer></v-spacer>
        <ul class="nav">
          <li v-for="(mainNav, i) in mainNavs" :key="i">
            <router-link class="v-btn v-btn--flat v-btn--text theme--light v-size--default" :to="mainNav.link">
              {{ mainNav.navText }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'headerLayout',

    data: () => ({

      // Footer Nav
      mainNavs: [
        { 
          navText: 'Home',
          link: '/'
        },
        { 
          navText: 'Services',
          link: '/service'
        },
        { 
          navText: 'About',
          link: '/about'
        },
        { 
          navText: 'Jobs',
          link: '/jobs'
        },
        { 
          navText: 'Contact Us',
          link: '/contact'
        }
      ],
      
    }),
  }
</script>
