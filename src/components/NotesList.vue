<script>
export default {
  props: {
    notes: {
      type: Array,
      required: true,
    },
  },

  emits: ['remove-note'],
}
</script>

<template>
  <div class="notes-header">
    <h2>Список заметок</h2>
    <span class="notes-count">Всего заметок: {{ notes.length }}</span>
  </div>

  <div class="notes" id="notes-container">
    <div class="note-card" v-for="(note, index) in notes" :key="index">
      <div class="note-content">
        <p>{{ note.content }}</p>
      </div>

      <div class="note-actions">
        <button @click="$emit('remove-note', index)">Удалить</button>
      </div>
    </div>
  </div>
</template>
