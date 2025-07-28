import { writable } from 'svelte/store';
import { getFila } from '$lib/api/api.JS';

export const fila = writable([]);
export const chamadoAtual = writable(null);
export const recarregando = writable(false);

export async function carregarFila() {
  recarregando.set(true);
  try {
    const data = await getFila();
    fila.set(data);
  } finally {
    recarregando.set(false);
  }
}