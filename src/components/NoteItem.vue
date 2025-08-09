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
        // console.log(newNote === oldNote)
        this.localNote = { ...newNote }
        // this.$emit('note-edited', { ...this.localNote })
      },
    },
    localNote: {
      deep: true,
      handler(newNote, oldNote) {
        if (newNote !== oldNote) return
        this.$emit('note-edited', { ...newNote })
        // console.log(newNote === oldNote) todo delete after review
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
  <!-- {{ localNote }} -->
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
      <!-- <button
        @click="localNote = { id: 111, caption: 'sss', isEditable: false }"
      >
        CHANGE IT
      </button> -->
      <button @click="$emit('note-removed', { ...localNote })">Удалить</button>
    </div>
  </div>
</template>
