<script>
  let fila = [
    {
      id: 82,
      nome: "Michael Jackson",
    },
    {
      id: 10,
      nome: "Ronaldinho Gaúcho",
    },
    {
      id: 1500,
      nome: "Pedro Álvares Cabral",
    },
  ];
</script>

<a
  href="/"
  aria-label="Ir para a Central"
  data-sveltekit-preload-data
  class="cursor-pointer"
>
  <div class="absolute bottom-0 w-full h-1/12 bg-pink-800/80">
    <ul class="font1 text-center text-4xl truncate text-slate-100 relative w-full h-full divide-x divide-slate-100 flex justify-between items-center">
      {#each fila as pessoa}
        <li class="flex flex-col w-1/3">
          <span class="text-3xl">{pessoa.id}</span>
          {pessoa.nome}
        </li>
      {/each}
    </ul>
  </div>
</a>
