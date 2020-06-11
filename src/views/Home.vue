<template>
  <div class="homePage">
    <!-- Hero -->
    <hero></hero>

    <!-- Partners -->
    <div class="partners-container">
      <div class="container bg-white">
        <ul class="list-group d-none d-sm-flex">
          <!-- loop -->
          <li class="list-item" v-for="(partnerLogo, i) in partnersLogo" :key="i">
            <a>
              <img contain :src="partnerLogo.src" transition="scale-transition" />
            </a>
          </li>
        </ul>
        <!-- Mobile -->
        <v-carousel class="d-sm-none" :continuous="true" :show-arrows="false"  height="100" hide-delimiters>
          <v-carousel-item v-for="(partnerLogo,i) in partnersLogo" :key="i" :src="partnerLogo.src"></v-carousel-item>
        </v-carousel>
      </div>
    </div>

    <div class="spacer border-bottom"></div>

    <!-- Our Services -->
    <div class="services-container">
      <div class="container-header">
        <h2 class="title">Our Services</h2>
        <h5 class="sub-title">Say something about our services will goes here</h5>
      </div>
      <div class="container-fluids position-relative">
        <div class="bg-image d-none d-lg-flex"></div>
        <div class="container pt-0">
          <v-row>
            <v-col cols="12" lg="5"></v-col>
            <v-col cols="12" lg="7" class="pt-0">
              <v-row>
                <!-- loop -->
                <v-col v-for="(serviceCard, i) in serviceCards" :key="i" cols="12" sm="6">
                  <v-card outlined>
                    <img :src="serviceCard.src" class="white--text align-end" />
                    <h3 class="v-card__title">{{ serviceCard.title }}</h3>
                    <p class="v-card__subtitle">{{ serviceCard.text }}</p>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>

    <div class="spacer border-bottom"></div>

    <!-- We’ve Got You Covered -->
    <div class="wevegot-container">
      <div class="container-header">
        <h2 class="title">We’ve Got You Covered</h2>
        <h5 class="sub-title">
          We’ve combined our technical expertise and proven knowledge of latest trends by developing solutions with a better user-experience and measurable results for all products- new or existing. If you’re looking for solutions for email, we’re a one-stop-shop- from delivery service to reputation management.
        </h5>
        <h5 class="sub-title last">Address : 8th Flr, Skyrise 3, Jose Ma. Del Mar St, Cebu Asiatown IT Park, Cebu City</h5>
      </div>
      <div class="container-fluids">
        <div class="bg-solid"></div>
        <div class="container py-20">
          <v-row class="align-center flex-sm-row-reverse">
            <v-col cols="12" md="6">
              <silent-box :gallery="gallery"></silent-box>
            </v-col>
            <v-col cols="12" md="1" class="d-none d-md-flex"></v-col>
            <v-col cols="12" md="5">
              <form>
                <v-row>
                  <v-col cols="12">
                    <div class="form-group">
                      <label for="email">Your Name</label>
                      <input type="text" id="email" class="form-control" v-model="userData.name" required>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <div class="form-group">
                      <label for="email">Your Email</label>
                      <input type="email" id="email" class="form-control" v-model="userData.email" required placeholder="stark@robert.com : Place holder">
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <div class="form-group">
                      <label for="message">Your Message</label>
                      <textarea id="message" rows="5" class="form-control" v-model="message"></textarea>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <button type="submit" class="v-btn v-size--large primary" @click.prevent="submitted();" @click.stop="dialog = true">Contact Us</button>
                  </v-col>
                </v-row>
              </form>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>

    <div class="spacer border-bottom"></div>

    <!-- Team -->
    <div class="team-container">
      <div class="container">
        <div class="container-header">
          <h2 class="title">Meet out team in moebius</h2>
          <h5 class="sub-title">Say something about team member will goes here</h5>
        </div>

        <v-row>
          <!-- loop -->
          <v-col v-for="(teamCard, i) in teamCards" :key="i" cols="12" sm="6" md="4" lg="3">
            <v-card outlined>
              <v-img :src="teamCard.src" class="white--text align-end"></v-img>
              <h3 class="v-card__title">{{ teamCard.title }}</h3>
              <p class="v-card__subtitle">{{ teamCard.text }}</p>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="subscribe-container mt-40 mb-60">
      <div class="container bg-white">
        <v-row class="align-center">
          <v-col cols="12" md="10">
            <div class="container-header mb-0">
              <h2 class="title text-left">Subscribe For Free Resources</h2>
            </div>
            <div class="form-group">
              <input class="form-control" v-model="userData.email2" type="email" placeholder="stark@robert.com : Place holder" style="max-width: 445px" />
            </div>
          </v-col>
          <v-col class="text-md-right" cols="12" md="2">
            <button type="submit" class="v-btn v-size--large primary" @click.prevent="submittedSubscribe();" @click.stop="dialog2 = true">Subscribe</button>
          </v-col>
        </v-row>
      </div>
    </div>

    <!-- dialog -->
    <v-dialog v-model="dialog" width="500" transition="dialog-bottom-transition">
      <v-card class="card" v-if="isSubmitted">
        <v-card-text class="pt-25">
          <p>Mail: <b>{{ userData.name }}</b></p>
          <p>Mail: <b>{{ userData.email }}</b></p>
          <p style="white-space: pre">Message: <b>{{ message }}</b></p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog2" width="500" transition="dialog-bottom-transition">
      <v-card class="card" v-if="isSubmittedsubscribe">
        <v-card-text class="pt-25">
          <p>Mail: <b>{{ userData.email2 }}</b></p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>
import hero from '@/components/hero';

export default {
  name: 'Home',
  components: {
    hero
  },
  data: () => ({

    // partners
    partnersLogo: [
      { src: require('@/assets/img/partner-logo1.png')},
      { src: require('@/assets/img/partner-logo2.png')},
      { src: require('@/assets/img/partner-logo3.png')},
      { src: require('@/assets/img/partner-logo4.png')},
      { src: require('@/assets/img/partner-logo5.png')},
    ],

    // services
    serviceCards: [
      { 
        title: 'Enterprise Software',
        src: require('@/assets/img/enterprice.png'),
        text: 'We will work with you to design, develop and implement a customized Enterprise Software Solution based on your needs and goals.',
      },
      { 
        title: 'Mobile Apps',
        src: require('@/assets/img/mobile.png'),
        text: 'Our development team helps you to achieve your goals by designing & building custom mobile apps.',
      },
      { 
        title: 'E-commerce Website',
        src: require('@/assets/img/ecommerce.png'),
        text: 'We build intelligent digital solutions & shopping experiences to meet ambitious sales goals for e-commerce businesses.',
      },
      { 
        title: 'Web Development',
        src: require('@/assets/img/web-dev.png'),
        text: 'We build web apps or work together with your development team to create a fully responsive website that stands out.', 
      },
    ],

    // zoom image
    gallery: [
      {
        src: require('@/assets/img/map.jpg'),
        description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
        alt: 'Blue starry night photo.',
        thumbnailWidth: '100%'
      }
    ],

    // Form
    userData: {
      email: '',
      email2: '',
      name: '',
      message: '',
    },
    dialog: false,
    isSubmitted: false,
    isSubmittedsubscribe: false,

    // Team
    teamCards: [
      { 
        src: require('@/assets/img/bowers.png'),
        title: 'Walter Bowers',
        text: 'HR Manager',
      },
        { 
        src: require('@/assets/img/underwood.png'),
        title: 'Joel Underwood',
        text: 'Data Entry',
      },
      { 
        src: require('@/assets/img/thompson.png'),
        title: 'Edward Thompson',
        text: 'Chief Information Officer',
      },
      { 
        src: require('@/assets/img/schwartz.png'),
        title: 'Lillie Schwartz',
        text: 'Technical Specialist',
      },
      { 
        src: require('@/assets/img/newman.png'),
        title: 'Ray Newman',
        text: 'Web Developer',
      },
        { 
        src: require('@/assets/img/vasquez.png'),
        title: 'Ronald Vasquez',
        text: 'Web Developer',
      },
      { 
        src: require('@/assets/img/santos.png'),
        title: 'Sallie Santos',
        text: 'UX Designer & UI Developer',
      },
      { 
        src: require('@/assets/img/abbott.png'),
        title: 'Winifred Abbott',
        text: 'UX Designer & UI Developer',
      },
    ],
    
  }),

  methods: {
    submitted() {
      this.isSubmitted = true;
    },
    submittedSubscribe() {
      this.isSubmittedsubscribe = true;
    }
  },
}
</script>
