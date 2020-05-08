<template>
  <q-layout>
    <q-page-container class="main">
      <div class="right-window">
      </div>
      <div class="center-box">
        <div class="right-box">
          <div class="box-logo">
            <img 
              src="../statics/icons/LogoFaleMais.png"
              class="logo-falemais"
              alt="Logo FalaMais" />
          </div>
        </div>
        <div class="left-box q-pa-lg">
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style lang="stylus" src="./style.stylus" />