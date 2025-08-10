<script>
export default {
  props: ['note'],

  emits: ['note-removed', 'note-edited'],

  data() {
    return {
      localNote: { ...this.note },
      localOldCaption: '',
    }
  },

  watch: {
    note: {
      deep: true,
      handler(newNote) {
        this.localNote = { ...newNote }
      },
    },
  },

  methods: {
    handleEdit() {
      this.localOldCaption = this.localNote.caption
      this.localNote.isEditable = true
      this.$nextTick(() => {
        this.$refs.elTextarea.focus()
      })
    },

    handleBlur() {
      this.localNote.isEditable = false
      const trimmed = this.localNote.caption.trim()
      if (trimmed === '') {
        this.localNote.caption = this.localOldCaption
      } else {
        this.$emit('note-edited', { ...this.localNote })
      }
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
        @blur="handleBlur"
      ></textarea>

      <p v-else @dblclick="handleEdit()">
        {{ localNote.caption }}
      </p>
    </div>

    <div class="note-actions">
      <button @click="$emit('note-removed', { ...localNote })">Удалить</button>
    </div>
  </div>
</template>
