<script setup lang="ts">
import { ref } from "vue";
import VueMultiselect from "vue-multiselect";

const props = defineProps<{
    color: string;
}>();

let selected = ref([]);
let options = [
    { name: "Electrical Work", language: "Dummy" },
    { name: "Work at Heights", language: "Dummy" },
    { name: "Ground Work", language: "Dummy" },
    { name: "Pipe Delivery", language: "Dummy" },
    { name: "Release Gases", language: "Dummy" },
    { name: "Conceptual Work", language: "Dummy" },
];

const surgeBlue: string = props.color as string;
</script>

<template>
    <div>
        <VueMultiselect
            placeholder="Apply Attributes"
            label="name"
            track-by="name"
            v-model="selected"
            :options="options"
            :multiple="true"
            :close-on-select="false"
            :clear-on-select="false"
            :preserve-search="true"
            :preselect-first="false"
        >
            <template slot="selection" slot-scope="{ values, search, isOpen }"
                ><span
                    class="multiselect__single"
                    v-if="values.length &amp;&amp; !isOpen"
                    >{{ values.length }} options selected</span
                ></template
            ></VueMultiselect
        >
    </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<!-- Must hardcode these color values until Astro supports Vue's dynamic styling -->
<style lang="scss">
.multiselect__tag {
    background: hsla(226, 68%, 50%, 82%);

    &::after {
        background: hsla(226, 68%, 50%, 82%);
    }
}

.multiselect__option--highlight {
    background: hsla(226, 68%, 50%, 82%) !important;

    &::after {
        background: hsla(226, 68%, 50%, 82%);
    }
}

.multiselect__tag-icon:after {
    color: #fff;
}
</style>
