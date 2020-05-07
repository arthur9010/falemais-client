<template>
    <q-select
        outlined
        dense
        color="teal-4"
        @input="$emit('input', value)"
        v-model="value"
        v-bind="$props"
    />
</template>

<script src="./script.js">
