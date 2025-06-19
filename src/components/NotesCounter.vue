<script>
export default {
  props: ['notes'],
}
</script>

<template>
  <div class="notes-header">
    <h2>Список заметок</h2>
    <span class="notes-count">Всего заметок: {{ notes.length }}</span>
  </div>
</template>
