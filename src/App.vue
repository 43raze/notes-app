<script>
import NoteForm from './components/NoteForm.vue'
import NotesList from './components/NotesList.vue'

export default {
  components: {
    NoteForm,
    NotesList,
  },

  data() {
    return {
      notes: [],
    }
  },

  methods: {
    // addNote(content) {
    //   this.notes.push({ content })
    // },

    removeNote(index) {
      this.notes.splice(index, 1)
    },
  },
}
</script>

<template>
  <main class="container">
    <div class="section">
      <h1>Приложение для заметок</h1>
    </div>

    <div class="section">
      <NoteForm @add-note="addNote" />
    </div>

    <div class="section">
      <NotesList :notes="notes" @remove-note="removeNote" />
    </div>
  </main>
</template>
