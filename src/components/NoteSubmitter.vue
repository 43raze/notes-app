<script>
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
    },
  },
}
</script>

<template>
  <div class="note-form">
    <textarea
      v-model.trim="note.caption"
      rows="4"
      placeholder="Введите вашу заметку..."
    ></textarea>
    <button @click="addNote">Добавить заметку</button>
  </div>
</template>
