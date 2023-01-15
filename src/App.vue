<template lang="pug">
v-app
  Particles(id="tsparticles" :options="particle" :particles-init="particlesInit" :particles-loaded="particlesLoaded")
  v-layout(style="position:fixed")
    v-navigation-drawer(color="yellow-lighten-2" permanent expand-on-hover rail)
      v-list-item(class="list-title" prepend-avatar="https://i.imgur.com/n4p0Vkt.png").text-center Pomodoro
      v-list.text-center(class="full-list")
        v-col(cols="12")
          v-list-item(prepend-icon="mdi-home" variant="text" to="/") Home
        v-col(cols="12")
          v-list-item(prepend-icon="mdi-clipboard-list" variant="text" to="/list") List
        v-col(cols="12")
          v-list-item(prepend-icon="mdi-music" variant="text" to="/settings") Music
        v-col(cols="12")
          v-list-item(:prepend-icon="notify ? 'mdi-bell' : 'mdi-bell-off'" variant="text" @click="toggleNotify") Notify
  v-main
    v-container
      router-view(v-slot="{ Component }")
        //- 換頁保留元件不被銷毀
        //- 設定 include 指定要保留的元件
        keep-alive(include="HomeView")
          //- 動態元件，將元件以 is 傳入
          component(:is="Component")
</template>

<script setup>
import { useSettingsStore } from './stores/settings'
import { storeToRefs } from 'pinia'
import particle from './components/particle.json'
import { loadFull } from 'tsparticles'
const settings = useSettingsStore()
const { notify } = storeToRefs(settings)
const { toggleNotify } = settings

const particlesInit = async engine => {
  await loadFull(engine)
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
