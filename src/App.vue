<script>
import NoteSubmitter from './components/NoteSubmitter.vue'
import NotesCounter from './components/NotesCounter.vue'
import NotesList from './components/NotesList.vue'

export default {
  components: { NoteSubmitter, NotesList, NotesCounter },

  data() {
    return {
      notes: [
        {
          id: 1111,
          caption: 'bar',
          isEditable: false,
        },
        {
          id: 2222,
          caption: 'foo',
          isEditable: false,
        },
      ],
    }
  },

  computed: {
    notesCount() {
      return this.notes.length
    },
  },
}
</script>

<template>
  {{ notes }}
  <main class="container">
    <div class="section">
      <h1>Приложение для заметок</h1>
    </div>

    <div class="section">
      <NoteSubmitter @add-note="notes.push($event)" />
    </div>

    <div class="section">
      <NotesCounter :notes-count="notesCount" />

      <NotesList v-model="notes" />

      <hr />

      <NotesList v-model="notes" />
    </div>
  </main>
</template>
