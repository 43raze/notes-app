<script>
export default {
  props: ['notes'],

  emits: ['remove-note'],
}
</script>

<template>
  <div class="notes">
    <NoteItem v-for="(note, index) in notes" :key="index" />
  </div>
</template>
