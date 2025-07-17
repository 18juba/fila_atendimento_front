<script lang="ts">
  import "@fontsource/smooch-sans";
  import "../app.css";
  import Fila from "$lib/components/layout/Fila.svelte";
  import UltimosChamados from "$lib/components/layout/UltimosChamados.svelte";

  let { children } = $props();
</script>

{@render children()}

<img
alt="Fundo"
src="/images/bg1.webp"
class="hidden fixed inset-0 w-screen h-screen -z-50"
>
<Fila />
<UltimosChamados />
