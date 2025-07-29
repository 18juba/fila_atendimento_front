// src/lib/api.js
const BASE = "https://lucas.jctech.digital";


export async function addPessoa(nome) {
  const res = await fetch(`${BASE}/chamadas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome }),
  });

  if (!res.ok) {
    const json = await res.json();
    throw new Error(json.error || "Erro ao adicionar");
  }

  return res.json(); // { status, ficha }
}

export async function chamarPessoa() {
  const res = await fetch(`${BASE}/chamadas/proxima`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Erro ao chamar");
  return res.json(); // { nome, ficha }
}

export async function getFila() {
  const res = await fetch(`${BASE}/chamadas/mostrar_fila`);
  if (!res.ok) throw new Error("Erro ao buscar fila");
  return res.json(); // array de objetos { nome, ficha }
}

export async function getUltimosChamados() {
  const res = await fetch(`${BASE}/chamadas/ultimos`);
  if (!res.ok) throw new Error("Erro ao buscar últimos chamados");
  return res.json(); // array de até 3 objetos { nome, ficha }
}