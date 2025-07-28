<script>
  import { onMount } from 'svelte';
  import { fila, carregarFila } from '$lib/stores/stores.js';

  onMount(() => {
    carregarFila();
  });
</script>

<a
  href="/"
  aria-label="Ir para a Central"
  data-sveltekit-preload-data
  class="cursor-pointer"
>
  <div
    class="font1 fixed top-0 left-0 w-full md:w-36 md:left-6 md:top-2/12 h-24 md:h-7/12 bg-pink-800/80 rounded-none md:rounded-lg overflow-y-auto z-50"
  >
    <ol class="w-full font2 text-slate-100 text-xl px-2 py-1">
      {#each $fila as pessoa, i}
        <li class="w-full truncate italic mb-0.5 last:mb-0 {i === 0 ? 'first:border-l-2 first:indent-1 first:bg-slate-100/20' : ''}">
          <span class="font-bold">{pessoa.ficha}</span> {pessoa.nome}
        </li>
      {/each}
    </ol>
  </div>
</a>
