# Site Dálete Cavalcante — Fonoaudióloga Infantojuvenil

Site estático (HTML/CSS/JS puro, sem build) com 3 páginas:

- **`/`** — página principal, tipo "cartão de visita", com links para as duas páginas de atendimento e para o Instagram/WhatsApp.
- **`/atendimentopresencial/`** — landing page de conversão para atendimento presencial (tráfego pago).
- **`/atendimentovirtual/`** — landing page de conversão para atendimento online (tráfego pago).

Pronto para hospedar no **GitHub Pages** com domínio próprio (`daletefono.com.br`, já configurado no arquivo `CNAME`).

## Estrutura de arquivos

```
/
├── index.html                      → página principal
├── atendimentopresencial/index.html → landing presencial
├── atendimentovirtual/index.html    → landing online
├── CNAME                           → domínio customizado (GitHub Pages)
├── assets/
│   ├── css/style.css               → estilos de todo o site (um arquivo só)
│   ├── js/main.js                  → apenas atualiza o ano do rodapé
│   └── img/
│       ├── logo-principal.png, sublogo.png, icone-hero.png
│       ├── favicon-32.png, favicon-180.png, favicon-512.png
│       ├── foto-home-*.jpg          → fotos da página principal
│       ├── foto-presencial-*.jpg    → fotos da página presencial
│       └── foto-virtual-*.jpg       → fotos da página online
```

Todas as fotos já foram padronizadas em **1:1 (quadradas), 900×900px**, otimizadas para web (~90–140KB cada).

## Como publicar no GitHub Pages (domínio próprio)

1. Crie um repositório novo no GitHub (ex.: `dalete-site`), público.
2. Faça upload de todos os arquivos desta pasta mantendo a estrutura (o `index.html` deve ficar na raiz do repositório).
3. No repositório, vá em **Settings → Pages**.
4. Em **Build and deployment → Source**, selecione **Deploy from a branch**, branch `main`, pasta `/ (root)`.
5. Em **Custom domain**, digite `daletefono.com.br` e salve (isso recria o arquivo `CNAME` automaticamente, mas ele já está incluído aqui).
6. No provedor de DNS do domínio, configure:
   - 4 registros **A** para `@` apontando para:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - (Opcional) um registro **CNAME** para `www` apontando para `SEU-USUARIO.github.io`.
7. Aguarde a propagação do DNS (pode levar de minutos a algumas horas).
8. Volte em **Settings → Pages** e marque **Enforce HTTPS** assim que a opção ficar disponível.
9. Teste `https://daletefono.com.br/`, `https://daletefono.com.br/atendimentopresencial/` e `https://daletefono.com.br/atendimentovirtual/`.

## O que foi atualizado nesta rodada

- Todas as fotos convertidas para o formato quadrado (1:1) e otimizadas.
- Removidas todas as menções e avisos de "Placeholder" do site inteiro.
- **Página principal:** ilustração do herói reduzida; foto principal trocada pela foto real de Dálete; ao passar o mouse sobre a foto (desktop), ela alterna entre 3 fotos reais — em celular/tablet a foto principal fica fixa (sem hover), então nada depende de toque para funcionar.
- **Atendimento Presencial:** foto principal e galeria com fotos reais; endereço real (Av. Dom Luís, 609, Sala 1107); seção renomeada de "Conheça o consultório" para **"Fotos"** (já que as fotos mostram a Dálete com recursos terapêuticos, não o espaço físico); linha "Horário de atendimento" removida do card de informações, a pedido da Dálete; duração da sessão e respostas do FAQ atualizadas conforme solicitado.
- **Atendimento Online:** foto principal e nova seção de galeria "Fotos" com fotos reais; complemento "(em casos de crianças menores)" adicionado ao requisito do adulto responsável; FAQ de plataforma (Meet) e duração da sessão atualizados.

## Decisão de design (para revisão da Dálete)

Na página de atendimento online, das 3 fotos enviadas para essa página, uma foi usada como foto principal do topo (hero) e as outras duas na galeria "Fotos" mais abaixo — não havia uma quarta foto separada só para a galeria, então a divisão principal/galeria foi uma escolha de composição. Se a Dálete preferir outra combinação, é uma troca rápida.

## Site pronto para compartilhar

Com essas atualizações, o site está pronto para ser enviado à Dálete para revisão. Qualquer ajuste de texto, foto ou cor depois da avaliação dela é simples de fazer.
