<template>
  <q-page class="index">
		<div class="right-window">
		</div>
		<div class="center-box">
      <div class="right-box">
        <div class="box-logo">
          <img src="../../statics/icons/LogoFaleMais.png" class="logo-falemais" alt="">
        </div>
      </div>
      <div class="left-box q-pa-lg">
      <div>
        <p>você é cliente aramo e não</p>
      </div>
        <div class="row justify-around q-mb-md">
          <div class="col-5">
            <select-region
              @input="originRegion = $event"
              :options="regions"
              option-label="name"
              label="Origem (DDD)"
            />
          </div>
          <div class="col-5">
            <select-region
              @input="destinatinRegion = $event"
              :options="regions"
              option-label="name"
              label="Destino (DDD)"
            />
          </div>
        </div>
        <div class="row justify-around">
          <div class="col-5 q-mb-md">
            <input-minutes
              mask="####"
              label="Tempo de ligação (Minutos)"
              @input="minutes = $event"
            />
          </div>
          <div class="col-5 ">
            <q-btn 
              color="teal-13" 
              class="full-width full-heigth" 
              text-color="white"
            >
              CALCULAR
            </q-btn>
          </div>
        </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script src="./script.js"/>

<style lang="stylus" scoped src="./style.stylus">
    