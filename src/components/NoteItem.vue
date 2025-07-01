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
    localNote(val, oldVal) {
      console.log(val === oldVal)
      this.$emit('note-edited', { ...val })
    },
  },
}
</script>

<!-- $emit('note-edited', { ...note, caption: $event.target.value }) -->
<!-- $emit('note-edited', { ...note, isEditable: true }) -->

<template>
  <div class="note-card">
    <div class="note-content">
      <!-- v-model="note.caption" -->
      <textarea
        v-if="localNote.isEditable"
        :value="localNote.caption"
        @input="localNote.caption = $event.target.value"
        @blur="localNote.isEditable = false"
      ></textarea>
      <p v-else @dblclick="localNote.isEditable = true">
        {{ localNote.caption }}
      </p>
    </div>

    <div class="note-actions">
      <button
        @click="localNote = { id: 1111, caption: 'sss', isEditable: false }"
      >
        CHANGE IT
      </button>
      <button @click="$emit('note-removed', { ...localNote })">Удалить</button>
    </div>
  </div>
</template>
