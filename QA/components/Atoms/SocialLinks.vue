<template>
  <div class="bg-black rounded-md">
    <button @click="onClick" class="w-full px-4 py-3 border border-gray-700 rounded-md text-white bg-black
    shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95
    focus:ring-offset-2 focus:ring-offset-gray-800 flex gap-3 justify-center items-center  ">
      <component :is="svg" class="w-5 h-5 mr-2" />
      {{ text }}
    </button>
  </div>
</template>

<script setup>

const props = defineProps({
  svg: {
    type: Object,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    default: () => { },
  },
});
</script>