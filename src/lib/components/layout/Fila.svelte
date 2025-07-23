<script>
  let fila = [
    { id: 11, nome: "Neymar" },
    { id: 18, nome: "Juan Pablo Vojvoda" },
    // Adicione mais para testar o scroll
  ];
</script>

<a
  href="/"
  aria-label="Ir para a Central"
  data-sveltekit-preload-data
  class="cursor-pointer"
>
  <div
    class="font1 fixed top-0 left-0 w-full md:w-36 md:left-6 md:top-2/12 h-24 md:h-7/12 bg-pink-800/80 flex rounded-none md:rounded-lg overflow-y-auto z-50"
  >
    <ol
      class="w-full font2 flex flex-col gap-1 justify-start text-slate-100 text-xl px-2 py-1"
    >
      {#each fila as pessoa}
        <li class="w-full truncate italic"><span class=" font-bold">{pessoa.id}</span> {pessoa.nome}</li>
      {/each}
    </ol>
  </div>
</a>
