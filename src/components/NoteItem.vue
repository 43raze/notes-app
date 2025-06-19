<script>
export default {}
</script>

<template>
  <div class="note-card">
    <div class="note-content">
      <p>{{ note.content }}</p>
    </div>

    <div class="note-actions">
      <button @click="$emit('remove-note', index)">Удалить</button>
    </div>
  </div>
</template>
