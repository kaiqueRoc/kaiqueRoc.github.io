# Publicar o site na conta **kaiqueRoc** (não kaiquerocha-ai)

## URL correta

| Conta | Repositório | URL do site |
|-------|-------------|-------------|
| **kaiqueRoc** | `kaiqueRoc.github.io` | https://kaiqueroc.github.io |
| kaiquerocha-ai | qualquer outro | conta errada para este portfólio |

---

## Passo 1 — Criar o repositório (logado como kaiqueRoc)

1. Abra https://github.com/kaiqueRoc (confirme que está na conta certa)
2. https://github.com/new
3. Nome: **kaiqueRoc.github.io** (exatamente assim)
4. Público, **sem** README
5. Create repository

## Passo 2 — Chave SSH na conta kaiqueRoc

https://github.com/settings/keys → New SSH key

Cole a chave em `~/.ssh/id_ed25519_kaiqueroc.pub`

Teste:

```bash
ssh -T git@github-kaiqueroc
# Hi kaiqueRoc! ...
```

## Passo 3 — Enviar o código

```bash
cd /Users/kaique.silva/Documents/kaiqueRoc.github.io
git remote -v
# deve ser: git@github-kaiqueroc:kaiqueRoc/kaiqueRoc.github.io.git

git push -u origin main
```

**Não use** `git@github.com:...` — isso usa a conta kaiquerocha-ai.

## Passo 4 — Ativar GitHub Pages

No repo **kaiqueRoc/kaiqueRoc.github.io**:

Settings → Pages → Source: **Deploy from branch** → `main` → `/ (root)` → Save

Aguarde 1–2 minutos e acesse https://kaiqueroc.github.io

---

## Se criou o repo na conta errada (kaiquerocha-ai)

1. Apague o repo em kaiquerocha-ai (se existir)
2. Repita os passos acima na conta **kaiqueRoc**
