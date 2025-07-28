<script>
  import { onMount } from "svelte";
  import {
    ultimosChamados,
    carregarUltimosChamados,
  } from "$lib/stores/stores.js";

  onMount(carregarUltimosChamados);

  $: ultimoChamado = $ultimosChamados.length > 0 ? $ultimosChamados[0] : null;
</script>

<div class="bg-slate-800 w-screen h-screen flex justify-center items-center">
  <a
    href="/central"
    aria-label="Ir para a Central"
    data-sveltekit-preload-data
    class="cursor-pointer animation-in"
  >
    <div class="font1 text-center">
      {#if ultimoChamado}
        <h1 class="text-9xl text-slate-100">
          {ultimoChamado.ficha}
          <p class="text-6xl capitalize">{ultimoChamado.nome}</p>
        </h1>
      {:else}
        <p class="text-white text-4xl sm:text-5xl">Nenhum chamado ainda</p>
      {/if}
    </div>
  </a>
</div>
