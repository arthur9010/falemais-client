<template>
    <q-select
        @input="$emit('input', value)"
        v-model="value"
        v-bind="$props"
    />
</template>

<script src="./script.js">
