<template>
    <q-input
        outlined
        dense
        :rules="ruleRequired ?[
          val => val !== null && val !== '' || 'Preencha este campo',
        ] : null"
        stack-label
        color="teal-4"
        @input="$emit('input', value)"
        v-model="value"
        v-bind="$props"
    />
</template>

<script src="./script.js">
