<script>
export default {
  props: ['note'],

  emits: ['note-removed', 'note-edited'],

  data() {
    return {
      localNote: { ...this.note },
      backupNote: null,
    }
  },

  watch: {
    note: {
      deep: true,
      handler(newNote, oldNote) {
        this.localNote = { ...newNote }
      },
    },

    localNote: {
      deep: true,
      handler(newNote, oldNote) {
        if (newNote.caption.trim() === '') {
          this.localNote.isEditable = true
          this.$nextTick(() => {
            this.$refs.elTextarea.focus()
          })
          return
        }

        if (newNote !== oldNote) return

        this.$emit('note-edited', { ...newNote })
      },
    },
  },

  methods: {
    handleEdit() {
      this.backupNote = { ...this.localNote }
      this.localNote.isEditable = true
      this.$nextTick(() => {
        this.$refs.elTextarea.focus()
      })
    },

    confirmEdit() {
      if (this.localNote.caption.trim() === '') return
      this.localNote.isEditable = false
      this.$emit('note-edited', { ...this.localNote })
    },

    cancelEdit() {
      this.localNote = { ...this.backupNote }
      this.localNote.isEditable = false
    },
  },
}
</script>

<template>
  <div class="note-card">
    <div class="note-content">
      <textarea
        v-if="localNote.isEditable"
        ref="elTextarea"
        :value="localNote.caption"
        @input="localNote.caption = $event.target.value"
        @blur=""
      ></textarea>

      <p v-else @dblclick="handleEdit">
        {{ localNote.caption }}
      </p>
    </div>

    <div class="note-actions">
      <template v-if="localNote.isEditable">
        <button class="note-card-acept" @click="confirmEdit">
          Подтвердить
        </button>
        <button class="note-card-cancel" @click="cancelEdit">Отмена</button>
      </template>

      <template v-else>
        <button @click="$emit('note-removed', { ...localNote })">
          Удалить
        </button>
      </template>
    </div>
  </div>
</template>
