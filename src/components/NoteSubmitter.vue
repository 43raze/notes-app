<script>
const randId = () => Math.trunc(Math.random() * 0xffffffff).toString(16)
const initNote = () => ({
  id: randId(),
  caption: '',
  isEditable: false,
})

export default {
  emits: ['submit-note'],

  data() {
    return {
      note: initNote(),
    }
  },

  methods: {
    submitNote() {
      if (this.note.caption === '') return
      this.$emit('submit-note', { ...this.note })
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
      @keypress.prevent.ctrl.enter="submitNote"
    ></textarea>

    <button @click="submitNote">Добавить заметку</button>
  </div>
</template>
