<script>
export default {
  props: ['notesCount'],
}
</script>

<template>
  <div class="notes-header">
    <h2>Список заметок</h2>
    <span class="notes-count">Всего заметок: {{ notesCount }}</span>
  </div>
</template>
