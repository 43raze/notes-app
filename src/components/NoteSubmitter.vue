<script>
const randId = () => Math.trunc(Math.random() * 0xffffffff).toString(16)
const initNote = () => ({
  id: randId(),
  caption: '',
})

export default {
  emits: ['add-note'],

  data() {
    return {
      note: {
        id: 1,
        caption: '',
        isEditable: false,
      },
    }
  },

  methods: {
    addNote() {
      if (this.note.caption === '') return
      this.$emit('add-note', { ...this.note })
      this.noteContent = ''
      this.note = initNote()
      this.$refs.noteTextarea.focus()
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
    ></textarea>

    <button @click="addNote">Добавить заметку</button>
  </div>
</template>
