<script>
export default {
  data() {
    return {
      noteContent: '',
    }
  },

  methods: {
    addNote() {
      if (this.noteContent) {
        this.$emit('add-note', this.noteContent.trim())
        this.noteContent = ''
      }
    },
  },
}
</script>

<template>
  <div class="note-form">
    <textarea
      v-model.trim="noteContent"
      rows="4"
      placeholder="Введите вашу заметку..."
    />
    <button @click="addNote">Добавить заметку</button>
  </div>
</template>
