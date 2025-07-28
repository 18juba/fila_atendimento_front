import { writable } from 'svelte/store';
import { getFila, getUltimosChamados } from '$lib/api/api.js';  // ✅ importe getUltimosChamados

export const fila = writable([]);
export const ultimosChamados = writable([]);
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

export async function carregarUltimosChamados() {
  try {
    const data = await getUltimosChamados();
    ultimosChamados.set(data);
  } catch (e) {
    console.error("Erro ao carregar últimos chamados:", e);
  }
}