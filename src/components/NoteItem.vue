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
      handler(newNote) {
        this.localNote = { ...newNote }
      },
    },
  },

  methods: {
    updateCaption(event) {
      this.localNote.caption = event.target.value
      this.$emit('note-edited', { ...this.localNote })
    },
  },
}
</script>

<template>
  <div class="note-card">
    <div class="note-content">
      <textarea
        v-if="localNote.isEditable"
        :value="localNote.caption"
        @input="updateCaption($event)"
        @blur="localNote.isEditable = false"
      ></textarea>
      <p v-else @dblclick="localNote.isEditable = true">
        {{ localNote.caption }}
      </p>
    </div>

    <div class="note-actions">
      <button @click="$emit('note-removed', { ...localNote })">Удалить</button>
    </div>
  </div>
</template>
