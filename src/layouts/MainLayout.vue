<template>
  <q-layout>
    <q-page-container>
      <q-page class="main">
        <div class="left-window">
        </div>
        <div class="center-box">
          <div class="left-box">
            <div class="box-logo">
              <img 
                src="../statics/icons/LogoFaleMais.png"
                class="logo-falemais"
                alt="Logo FalaMais" />
            </div>
          </div>
          <div class="right-box q-pa-lg">
            <router-view />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="stylus" src="./style.stylus" />