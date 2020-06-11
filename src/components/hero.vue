<template>
  <div class="hero">
    <div class="hero-bg">
      <v-img contain :src="require('@/assets/img/hero-image.jpg')" transition="scale-transition" width="100%"/>
    </div>
    <div class="container">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <div class="hero-badge"><span><span class="badge">Hello</span> Welcome to Moebius</span></div>
          <h1 class="display-1 font-weight-thin mb-4">REACH YOUR DESTINATION,</h1>
          <span class="spacer"></span>
          <h4 class="subheading">We're email, e-commerce and fintech experts.<br>We have a proven track record in delivering complex solutions to diverse industries.</h4>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hero',

    data: () => ({
      
    }),
  }
</script>
