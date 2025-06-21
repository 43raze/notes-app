<script>
export default {
  props: ['note'],

  emits: ['note-removed'],
}
</script>

<template>
  <div class="note-card">
    <div class="note-content">
      <p>{{ note.caption }}</p>
    </div>

    <div class="note-actions">
      <button @click="$emit('note-removed', note)">Удалить</button>
    </div>
  </div>
</template>
