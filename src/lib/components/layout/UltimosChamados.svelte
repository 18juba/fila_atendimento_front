<script>
  let fila = [
    { id: 82, nome: "Michael Jackson" },
    { id: 10, nome: "Ronaldinho Gaúcho" },
    { id: 1500, nome: "Pedro Álvares Cabral" },
  ];
</script>

<a
  href="/"
  aria-label="Ir para a Central"
  data-sveltekit-preload-data
  class="cursor-pointer"
>
  <div class="fixed bottom-0 left-0 w-full bg-pink-800/80 z-50">
    <ul
      class="font1 text-center text-white text-base sm:text-xl md:text-4xl truncate relative w-full divide-x divide-slate-100 flex overflow-x-auto"
    >
      {#each fila as pessoa}
        <li class="flex-shrink-0 flex flex-col w-1/3 min-w-[120px] px-2 py-1 items-center justify-center">
          <span class="text-xl sm:text-2xl md:text-6xl font-bold">{pessoa.id}</span>
          <span class="truncate w-full">{pessoa.nome}</span>
        </li>
      {/each}
    </ul>
  </div>
</a>
