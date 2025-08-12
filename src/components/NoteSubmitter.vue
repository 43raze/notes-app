<script>
const randId = () => Math.trunc(Math.random() * 0xffffffff).toString(16)
const initNote = () => ({
  id: randId(),
  caption: '',
  isEditable: false,
})

export default {
  emits: ['add-note'],

  data() {
    return {
      note: initNote(),
    }
  },

  methods: {
    addNote() {
      if (this.note.caption === '') return
      this.$emit('add-note', { ...this.note })
      this.note = initNote()
      this.$refs.noteTextarea.focus()
    },

    handleKeyDown(e) {
      if (e.ctrlKey && e.key === 'Enter') {
        e.preventDefault()
        this.addNote()
      }
    },
  },
}
</script>

<template>
  <div class="note-form">
    <textarea
      ref="noteTextarea"
      v-model.trim="note.caption"
      rows="4"
      placeholder="Введите вашу заметку..."
      @keydown="handleKeyDown"
    ></textarea>

    <button @click="addNote">Добавить заметку</button>
  </div>
</template>
