<script>
  let fila = [
    {
      id: 11,
      nome: "Neymar",
    },
    {
      id: 18,
      nome: "Juan Pablo Vojvoda",
    },
  ];
</script>

<a
  href="/"
  aria-label="Ir para a Central"
  data-sveltekit-preload-data
  class="cursor-pointer"
>
  <div
    class="absolute p-2 top-2/12 left-6 w-36 h-7/12 bg-pink-800/80 flex rounded-lg overflow-hidden"
  >
    <ol
      class="w-full font2 flex flex-col gap-1 justify-start text-slate-100 text-sm truncate"
    >
      {#each fila as pessoa}
        <li>{pessoa.id}. {pessoa.nome}</li>
      {/each}
    </ol>
  </div>
</a>
