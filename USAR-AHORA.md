# Para usar en itch.io ahora mismo

Nada de esto necesita acceso a CSS. Son tres cosas que itch.io ya te deja cambiar.

## 1. Banner

Sube [`banner.png`](banner.png) (960 × 260 px) como banner de tu perfil.

Abre tu perfil (tunombre.itch.io) con la sesión iniciada → **Edit theme** → banner / header image.

El banner ya lleva tu nombre, tus roles y una pequeña máquina expendedora de neón, así que funciona aunque itch.io muestre u oculte el nombre en texto.

## 2. Tema del perfil

En el mismo panel **Edit theme**:

| Campo | Valor |
|---|---|
| Background (fondo) | `#010201` |
| Text (texto) | `#2a9e50` |
| Link (enlaces y títulos de juegos) | `#41ff7f` |
| Border (bordes, si aparece) | `#10351c` |
| Font (fuente) | IBM Plex Mono |
| Font size | 100% |
| Esquinas | Cuadradas (radio 0) |
| Layout | Column |

Los nombres de los campos pueden variar un poco en el editor de itch.io.

## 3. Bio

En **Edit profile**, añade tu portafolio y redes como enlaces del perfil. Después pega esto en la bio (en modo HTML si te lo ofrece) y cambia el texto y el enlace por los tuyos:

```html
<pre>OPERATOR FILE · ACCESS: PUBLIC</pre>

<p>I make small, strange games and the sound and music in them.</p>

<h3>&gt; Disciplines</h3>
<pre>GAMES ..... Unity, C#
AUDIO ..... SFX, mixing
MUSIC ..... scores, loops</pre>

<h3>&gt; Contact</h3>
<p>Commissions open. Full portfolio at
<a href="https://YOUR-PORTFOLIO-URL">my site</a>.</p>
```

## Más adelante

La máquina expendedora completa (los juegos como productos, el panel de monedas, las luces de neón al pasar el ratón) está en `itch-page-kit.html`, en el paso 3. Necesita que itch.io active el CSS en tu cuenta.

## Cambiar el banner

El banner se genera desde `tools/banner.html`. Para volver a generarlo:

```
node tools/render-banner.js
```

Abre http://localhost:4174 en el navegador y se guarda `banner.png` en esta carpeta.
