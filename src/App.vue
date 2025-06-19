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
          id: 1,
          caption: '',
          isEditable: false,
        },
      ],
    }
  },

  methods: {
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
      <NoteSubmitter @add-note="notes.push($event)" />
    </div>

    <div class="section">
      <NotesCounter />
      <NotesList :notes="notes" @remove-note="removeNote" />
    </div>
  </main>
</template>

<!-- 
MVVM = M V VM = Model Vue ViewModel
VM 
-->
