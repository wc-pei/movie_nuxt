<script setup lang="ts">
  import { APIResponse } from "@/types/APIResponse"

  const searchTerm = ref("")
  const page = ref(1)

  const disabledPrevious = computed(() => {
    return page.value === 1
  })

  const disabledNext = computed(() => {
    return page.value + 1 === data.value?.total_pages
  })

  // 検索後0.7秒遅延で結果が出てくる
  const debouncedSearchTerm = refDebounced(searchTerm, 700)

  const url = computed(() => {
    return `api/movies/search?query=${debouncedSearchTerm.value}&page=${page.value}`
  })

  const { data } = await useFetch<APIResponse>(url)
</script>

<template>
  <div class="flex flex-col py-10">
    <div>
      <h2 class="text-2xl font-bold text-center">
        PEI'S 映画APP
      </h2>
      <div class="flex justify-center items-center h-32">
        <input
          class="px-2 py-1 border border-gray-800 rounded-md min-w-64"
          v-model="searchTerm"
          type="text"
          placeholder="映画を検索..."
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4
      xl:grid-cols-5 self-center gap-x-10 gap-y-10 mb-10">
        <div v-for="movie in data?.results">
          <MovieCard :movie="movie"></MovieCard>
        </div>
      </div>
      <div
        class="flex justify-center"
        v-if="data?.results.length"
      >
        <button
          class="px-4 py-2 text-m border rounded-lg"
          v-if="!disabledPrevious"
          @click="page--"
        >
          前へ
        </button>
        <div
          class="px-4 py-2 text-m border rounded-lg"
        >
          {{ page }}
        </div>
        <button
          class="px-4 py-2 text-m border rounded-lg"
          v-if="!disabledNext"
          @click="page++"
        >
          次へ
        </button>
      </div>
    </div>
  </div>
</template>

<style lang='scss'>

</style>