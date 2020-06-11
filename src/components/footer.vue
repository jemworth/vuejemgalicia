<template>
  <v-footer padless>
    <div class="container">
      <v-row class="footerbox-top">
        <v-col cols="12" md="4" class="pt-0">
          <div class="logo text-center text-md-left pt-0">
            <a v-bind:href="'/'">
              <img class="" :src="require('@/assets/img/moebius-logo-white.png')" height="44" width="auto"/>
            </a>
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <ul class="footer-navigation nav nav-flex-row justify-center justify-md-end">
            <li v-for="(footerNav, i) in footerNavs" :key="i">
              <a class="nav-link" v-bind:href="footerNav.link">
                {{footerNav.navText}}
              </a>
            </li>
          </ul>
        </v-col>
      </v-row>
      <v-row class="footerbox-bottom white--text flex-md-row-reverse">
        <v-col cols="12" md="8">
          <ul class="social-media align-center justify-center justify-md-end">
            <li class="fs-12">Follow us</li>
            <li v-for="(footerSocial, i) in footerSocials" :key="i">
              <v-btn outlined fab x-small class="nav-link" v-bind:href="footerSocial.link" v-html="footerSocial.fontClass"></v-btn>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="4" class="d-md-flex align-center">
          <div class="copyright fs-12 text-center text-md-left">Copyright© {{ new Date().getFullYear() }}</div>
        </v-col>
      </v-row>
    </div>
  </v-footer>
</template>

<script>
  export default {
    name: 'footerLayout',

    data: () => ({
      
      // Footer Nav
      footerNavs: [
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
        }
      ],

      // Footer Nav
      footerSocials: [
        { 
          fontClass: '<i class="fab fa-facebook-f"><i>',
          link: '/'
        },
        { 
          fontClass: '<i class="fab fa-twitter"></i>',
          link: '/'
        },
        { 
          fontClass: '<i class="fab fa-linkedin-in"></i>',
          link: '/'
        },
        { 
          fontClass: '<i class="fab fa-instagram"></i>',
          link: '/'
        }
      ],

    }),
  }
</script>
