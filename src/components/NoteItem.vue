<script>
export default {
  props: ['note'],

  emits: ['note-removed', 'note-edited'],

  data() {
    return {
      localNote: { ...this.note },
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
        if (newNote !== oldNote) return
        this.$emit('note-edited', { ...newNote })
      },
    },
  },

  methods: {
    handleEdit() {
      this.localNote.isEditable = true
      this.$nextTick(() => {
        this.$refs.elTextarea.focus()
      })
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
        @blur="localNote.isEditable = false"
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
