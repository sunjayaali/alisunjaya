<script setup lang="ts">
const toast = useToast()
const wordle = useWordle()

onMounted(() => {
  wordle.init()
  window.addEventListener('keydown', wordle.handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', wordle.handleKeydown)
})

watch(
  () => wordle.gameStatus,
  (status) => {
    if (status === 'won') {
      toast.add({
        title: 'You won! 🎉',
        description: `The answer was ${wordle.answer.toUpperCase()}.`,
        color: 'success',
        duration: 0,
        actions: [
          {
            icon: 'i-lucide-refresh-cw',
            label: 'Retry',
            onClick: () => wordle.init(),
          },
        ],
      })
    }
    if (status === 'lost') {
      toast.add({
        title: 'Game over',
        description: `The answer was ${wordle.answer.toUpperCase()}.`,
        color: 'error',
        duration: 0,
        actions: [
          {
            icon: 'i-lucide-refresh-cw',
            label: 'Retry',
            onClick: () => wordle.init(),
          },
        ],
      })
    }
  },
)
</script>

<template>
  <UContainer>
    <p class="text-center text-xs text-muted">
      Guess the hidden {{ wordle.columns }}-letter word in
      {{ wordle.rows }} tries.
    </p>

    <p class="text-center text-xs text-muted">
      <span class="text-success font-semibold">Green</span> = correct
      <span class="text-warning font-semibold">Yellow</span> = wrong
      <span class="text-accented font-semibold">Gray</span> = incorrect
    </p>

    <div class="flex flex-col gap-3.5">
      <div class="flex flex-col gap-1.5">
        <div
          v-for="(tiles, i) in wordle.board"
          :key="i"
          class="flex justify-center gap-1.5"
        >
          <UPinInput
            v-for="(tile, j) in tiles"
            :key="`${i}-${j}`"
            v-model="tile.letter"
            length="1"
            class="pointer-events-none"
            :ui="{
              base: [
                'max-w-14 w-full! h-auto aspect-square text-4xl!',
                tile.status === 'correct' && 'bg-success',
                tile.status === 'wrong' && 'bg-warning',
                tile.status === 'incorrect' && 'bg-accented',
              ],
            }"
          />
        </div>
      </div>

      <div class="flex flex-col items-center gap-1.5">
        <div v-for="(row, i) in wordle.keyboard" :key="i" class="flex gap-1.5">
          <UButton
            v-for="key in row"
            :key="key"
            :label="key"
            color="neutral"
            variant="subtle"
            class="h-12 min-w-8 justify-center font-extrabold"
            :ui="{
              base: [
                wordle.keyboardStatus(key) === 'correct' && 'bg-success',
                wordle.keyboardStatus(key) === 'wrong' && 'bg-warning',
                wordle.keyboardStatus(key) === 'incorrect' && 'bg-accented',
              ],
            }"
            @click="wordle.handleKey(key)"
          >
            <template #default>
              <span v-if="key === 'BACKSPACE'">⌫</span>
              <span v-else>{{ key }}</span>
            </template>
          </UButton>
        </div>
      </div>
    </div>
  </UContainer>
</template>
