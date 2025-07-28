<script>
  import { onMount } from 'svelte';
  import { ultimosChamados, carregarUltimosChamados } from '$lib/stores/stores';

  onMount(carregarUltimosChamados);
</script>

<a
  href="/"
  aria-label="Ir para a Central"
  data-sveltekit-preload-data
  class="cursor-pointer"
>
  <div class="font1 fixed bottom-0 left-0 w-full bg-pink-800/80 z-50">
    <h1 class="md:text-lg font-bold text-center border-b border-b-slate-100 text-slate-100">
      Chamadas Recentes
    </h1>
    <ul
      class="text-center text-white text-lg sm:text-xl md:text-4xl truncate relative w-full divide-x divide-slate-100 flex overflow-x-auto"
    >
      {#each $ultimosChamados as pessoa}
        <li class="flex-shrink-0 flex flex-col w-1/3 min-w-[120px] px-2 py-1 items-center justify-center">
          <span class="text-2xl sm:text-3xl md:text-5xl font-bold">{pessoa.ficha}</span>
          <span class="truncate w-full">{pessoa.nome}</span>
        </li>
      {/each}
      {#if $ultimosChamados.length === 0}
        <li class="p-4 text-white text-2xl sm:text-5xl">...</li>
      {/if}
    </ul>
  </div>
</a>
