<script setup lang="ts">
import { ref } from "vue";
import Multiselect from "vue-multiselect";

let selected = ref(null);
let options: string[] = ["Level 1", "Level 2", "Level 3"];
</script>

<template>
    <div>
        <label class="text-xs">Risk Level</label>
        <Multiselect
            placeholder="Risk Level"
            v-model="selected"
            :options="options"
            :searchable="true"
            :hide-selected="false"
            :allowEmpty="false"
        ></Multiselect>
    </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
