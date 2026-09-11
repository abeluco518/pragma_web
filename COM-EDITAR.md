# Cómo editar la web de Grup Pragma

Guía rápida y sin tecnicismos. La web está hecha con archivos sencillos: no hay
que instalar ni compilar nada. Se edita con cualquier editor de texto (incluso el
Bloc de notas) y se vuelve a subir a Hostinger.

---

## 1. El archivo que tocarás casi siempre: `lib/manifest.js`

Ahí están, en un solo sitio, los contenidos que cambian a menudo:

| Qué quieres cambiar | Dónde, dentro de `lib/manifest.js` |
|---|---|
| Teléfono, correo, WhatsApp, horario, enlace de cita online | bloque `contact` |
| Dirección y horario de la sede | bloque `centers` |
| Lista de servicios de cada área (nombre y descripción) | bloque `services` |
| Los 6 pasos de la UAD | bloque `uad` |
| Los principios de "cómo trabajamos" | bloque `method` |
| **El equipo** (nombre, rol, área, foto) | bloque `team` |
| Las cifras de experiencia | bloque `figures` |
| Los testimonios | bloque `testimonials` |
| Enlaces de redes sociales | bloque `social` |
| El orientador de servicio (opciones y a dónde llevan) | bloque `orient` |

Reglas:
- Escribe el texto **entre las comillas**. No borres las comas ni los corchetes.
- Si un dato todavía no lo tienes, deja `"[PENDENT]"`. **No inventes datos**
  (colegiaciones, testimonios...).
- Para que el formulario envíe de verdad los mensajes, pon en `formEndpoint` la
  dirección que te dé tu servicio de formularios (por ejemplo Formspree). Si lo
  dejas vacío, el formulario solo muestra un mensaje de confirmación de prueba.

### El equipo (`team`)

Cada profesional es una línea con `name`, `role`, `branch` (`"Institut"` o
`"Clínic"`, editable), `photo` (nombre del archivo en `assets/img/`, o `""` para
marcador) y campos opcionales `areas`, `col` (nº de colegiado/a), `desc`.
Ahora mismo **falta la foto de Ana Domínguez** y **faltan las colegiaciones y
descripciones** de todo el equipo: rellénalas ahí cuando las tengas.
Las fotos actuales son pequeñas (~210 px); si consigues headshots de más
resolución, se ven más nítidas — solo hay que reemplazar el `.webp` con el mismo
nombre en `assets/img/`.

Después de guardar, sube el archivo a Hostinger y **sube también una copia de las
páginas .html** (el texto de reserva vive dentro del HTML por si el navegador no
ejecuta el JavaScript).

---

## 2. Cambiar textos largos de una sección

Los párrafos largos (presentación de Institut, de Clínic, historia, etc.) están
dentro de cada archivo `.html`, en lenguaje normal entre etiquetas `<p>` y `</p>`.
Busca la frase que quieras cambiar y reescríbela. No toques las etiquetas.

Archivos principales (y su sección en el menú):
- `index.html` — portada
- `institut.html` — «Desenvolupament i aprenentatge»
- `clinic.html` — «Serveis clínics»
- `uad.html` — «Avaluació i diagnòstic»
- `nosaltres.html` — «Qui som» (proyecto + equipo, ancla `#equip`)
- `contacte.html` — «Contacte»
- `ajudes-i-suport.html` y `empresa.html` — de momento solo "Properament"
- carpeta `serveis/` — una página por servicio
- carpeta `legal/` — aviso legal, privacidad y cookies (pendientes de revisar con un abogado)

`equip.html` ya no se usa: redirige a `nosaltres.html#equip`. No lo borres para
no romper enlaces antiguos.

---

## 3. Poner las fotos

Ahora hay marcos grises con la etiqueta "Foto pendent". Para poner fotos reales:

1. Guarda las imágenes en formato **WebP** dentro de `assets/img/`
   (nombres en minúsculas y sin acentos, por ejemplo `equip-anna.webp`).
2. En el HTML, sustituye el bloque del marcador:
   `<span class="ph ph--portrait" ...>...</span>`
   por una imagen:
   `<img class="ph ph--portrait" src="assets/img/equip-anna.webp" alt="Descripció de la foto" loading="lazy">`
3. Respeta la proporción del marcador (`ph--portrait` = vertical 4:5,
   `ph--wide` = 16:9, etc.) para que el diseño no se descoloque.

Si nos pasas las fotos, lo podemos dejar hecho.

---

## 4. Añadir castellano más adelante

La web está en catalán. Para tener también castellano:
- En `lib/manifest.js` se puede duplicar cada bloque con una clave `es` y cambiar
  `lang: "ca"` por `lang: "es"`.
- Los textos de los `.html` se traducirían en copias de las páginas.
Cuando llegue el momento, lo montamos.

---

## 5. Cada vez que subas cambios

En cada archivo `.html` hay líneas con `styles.css?v=20260910` y
`main.js?v=20260910`. Cambia ese número por la fecha del día (año-mes-día) en
**todas** las páginas que subas. Así los visitantes ven la versión nueva y no una
guardada antigua.

---

## 6. Lo que NO hay que tocar

- `styles.css` (el diseño), `main.js` (el comportamiento) y `.htaccess`
  (configuración del servidor): solo si sabes lo que haces.
- La carpeta `assets/` salvo para añadir imágenes.
