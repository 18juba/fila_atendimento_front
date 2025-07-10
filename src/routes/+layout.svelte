<script lang="ts">
  import "@fontsource/smooch-sans";
  import "../app.css";
  import Fila from "$lib/components/layout/Fila.svelte";
  import UltimosChamados from "$lib/components/layout/UltimosChamados.svelte";

  let { children } = $props();
</script>

{@render children()}

<Fila />
<UltimosChamados />
