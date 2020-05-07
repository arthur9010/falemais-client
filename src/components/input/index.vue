<template>
    <q-input
        outlined
        dense
        color="teal-13"
        @input="$emit('input', value)"
        v-model="value"
        v-bind="$props"
    />
</template>

<script src="./script.js">
