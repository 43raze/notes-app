<script>
import NoteItem from './NoteItem.vue'

export default {
  components: { NoteItem },

  props: ['modelValue'],

  emits: ['remove-note'],

  methods: {
    removeNote(note) {
      return this.modelValue.filter(n => n.id !== note.id)
    },
  },
}
</script>

<template>
  <div class="notes">
    <NoteItem
      v-for="note of modelValue"
      :key="note.id"
      :note="note"
      @note-removed="$emit('update:model-value', removeNote($event))"
    />
  </div>
</template>
