<script>
  import { addPessoa, chamarPessoa } from "$lib/api/api.js";
  import { chamadoAtual, carregarFila, ultimosChamados } from "$lib/stores/stores.js";
  import { onMount } from "svelte";

  let nome = "";
  let erro = "";
  let sucesso = "";
  let chamadaAtual = null;

  async function handleAdicionar() {
    erro = sucesso = "";
    try {
      await addPessoa(nome);
      sucesso = "Pessoa adicionada!";
      nome = "";
      await carregarFila();
    } catch (e) {
      erro = e.message;
    }
  }

  async function handleChamar() {
    try {
      const pessoa = await chamarPessoa();
      chamadoAtual.set(pessoa);

      ultimosChamados.update((lista) => {
        const nova = [pessoa, ...lista];
        return nova.slice(0, 3); // mantem só os 3 últimos
      });

      await carregarFila();
    } catch (e) {
      console.error("Erro ao chamar pessoa", e);
    }
  }
</script>

<div class="bg-slate-800 w-screen h-screen flex justify-center items-center">
  <div
    class="font1 flex flex-col gap-3 bg-stone-800 rounded-lg p-4 animation-in"
  >
    <form
      class="flex flex-col gap-2 text-white"
      on:submit|preventDefault={handleAdicionar}
    >
      <div class="flex flex-col">
        <label>Nome</label>
        <input
          bind:value={nome}
          class="border rounded-lg text-lg px-2 py-0.5 focus:outline-none"
          placeholder="Digite o nome"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          aria-label="Adicionar"
          class="bg-blue-800 text-white rounded-lg px-2 text-lg cursor-pointer hover:bg-blue-900"
        >
          Adicionar Pessoa
        </button>
        <button
          type="button"
          aria-label="Chamar"
          class="mt-2 bg-pink-800 text-white rounded-lg px-2 text-lg cursor-pointer hover:bg-pink-900"
          on:click={handleChamar}
        >
          Chamar Primeiro
        </button>
      </div>
    </form>

    {#if sucesso}
      <p class="text-lg mt-1 text-green-400">{sucesso}</p>
    {/if}
    {#if erro}
      <p class="mt-1 text-red-400">{erro}</p>
    {/if}
  </div>
</div>
