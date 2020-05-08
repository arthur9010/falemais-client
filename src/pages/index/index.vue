<template>
  <q-page class="index">
		<div class="right-window">
		</div>
		<div class="center-box">
      <div class="right-box">
        <div class="box-logo">
          <img 
            src="../../statics/icons/LogoFaleMais.png"
            class="logo-falemais"
            alt="Logo FalaMais" />
        </div>
      </div>
      <div class="left-box q-pa-lg">
        <div class="q-ml-lg text-color">
          <p class="text-h6">Ainda não pussue o plano FaleMais?</p>
          <p class="text-subtitle2">Se a resposta é SIM, calcule quanto iria economizar utilizando este plano</p>
        </div>
        <q-form @submit="calculate">
          <div class="row justify-around q-mb-md">
            <div class="col-5">
              <select-region
                :rule-required="true"
                name="teste"
                @input="originRegion = $event"
                :options="regions"
                option-label="name"
                label="Origem (DDD)"
              />
            </div>
            <div class="col-5">
              <select-region
                :rule-required="true"
                @input="destinationRegion = $event"
                :options="regions"
                option-label="name"
                label="Destino (DDD)"
              />
            </div>
          </div>
          <div class="row justify-around">
            <div class="col-5 q-mb-md">
              <input-minutes
                :rule-required="true"
                mask="####"
                label="Tempo de ligação (Minutos)"
                @input="minutes = $event"
              />
            </div>
            <div class="col-5 ">
              <q-btn
                type="submit"
                color="teal-4" 
                class="full-width full-heigth" 
                text-color="white"
              >
                CALCULAR
              </q-btn>
            </div>
          </div>
        </q-form>
        <p class="text-negative" v-if="error !== ''">{{error}}</p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script src="./script.js"/>

<style lang="stylus" scoped src="./style.stylus">
    