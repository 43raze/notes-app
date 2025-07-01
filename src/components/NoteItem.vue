<script>
export default {
  props: ['note'],

  emits: ['note-removed', 'note-edited'],
}
</script>

<template>
  <div class="note-card">
    <div class="note-content">
      <!-- v-model="note.caption" -->
      <textarea
        v-if="note.isEditable"
        :value="note.caption"
        @input="$emit('note-edited', { ...note, caption: $event.target.value })"
      ></textarea>
      <p v-else @dblclick="$emit('note-edited', { ...note, isEditable: true })">
        {{ note.caption }}
      </p>
    </div>

    <div class="note-actions">
      <button @click="$emit('note-removed', { ...note })">Удалить</button>
    </div>
  </div>
</template>
