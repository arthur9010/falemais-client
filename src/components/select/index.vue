<template>
    <q-select
        outlined
        dense
        stack-label
        :rules="ruleRequired ?[
          val => val !== null && val !== '' || 'Preencha este campo',
        ] : null"
        color="teal-4"
        @input="$emit('input', value)"
        v-model="value"
        v-bind="$props"
    />
</template>

<script src="./script.js">
