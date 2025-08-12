<script>
import NoteSubmitter from './components/NoteSubmitter.vue'
import NotesCounter from './components/NotesCounter.vue'
import NotesList from './components/NotesList.vue'

export default {
  components: { NoteSubmitter, NotesList, NotesCounter },

  data() {
    return {
      notes: [],
    }
  },

  computed: {
    notesCount() {
      return this.notes.length
    },
  },

  // watch: {
  //   notes(val, oldVal) {
  //     if (val.length === oldVal.length) return
  //     const isIncludes = oldVal.some(ov => ov.caption === val.at(-1).caption)
  //     if (isIncludes) val.pop()
  //   },
  // },
}
</script>

<template>
  {{ notes }}
  <main class="container">
    <div class="section">
      <h1>Приложение для заметок</h1>
    </div>

    <div class="section">
      <NoteSubmitter
        @submit-note="
          notes.some(n => n.caption === $event.caption) || notes.push($event)
        "
      />
    </div>

    <div class="section">
      <NotesCounter :notes-count="notesCount" />

      <NotesList v-model="notes" />
    </div>
  </main>
</template>
