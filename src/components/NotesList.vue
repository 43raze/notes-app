<script>
import NoteItem from './NoteItem.vue'

export default {
  components: { NoteItem },

  props: ['modelValue'],

  emits: ['update:model-value'],

  methods: {
    removeNote(note) {
      return this.modelValue.filter(n => n.id !== note.id)
    },
    switchNote(newNote) {
      return this.modelValue.map(n => (n.id === newNote.id ? newNote : n))
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
      @note-edited="$emit('update:model-value', switchNote($event))"
    />
  </div>
</template>
