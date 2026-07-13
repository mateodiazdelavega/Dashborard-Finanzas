# Finanzas Personales 💵

Gestor de gastos e ingresos personal, pensado para vivir en la pantalla de inicio
del celular como una app (PWA). Funciona **100% offline** y todos los datos se
guardan **solo en tu dispositivo** (localStorage del navegador) — nada viaja a
ningún servidor.

## Qué hace

- **Resumen** del mes: total gastado, proyección a fin de mes, categorías
  principales (con barras) y gráfico de **ahorro por mes** (ingresos − gastos).
- **Cargar** gastos e ingresos, con **dictado por voz** (🎤, en navegadores que
  lo soportan como Chrome/Safari).
- **Historial** del mes con posibilidad de borrar movimientos.
- **Categorías** personalizables con color y **presupuesto (tope) mensual** por
  categoría, con alerta de color según cuánto llevás gastado.
- **Exportar / Importar** un respaldo en JSON (clave para no perder los datos si
  cambiás de teléfono o limpiás el navegador).
- Moneda **ARS** y formato en español (Argentina).

Viene con datos de ejemplo cargados (extracto de abril–junio 2026). Para empezar
de cero: *Historial → Vaciar gastos del mes*, o reemplazá los datos con
*Importar*.

## Estructura

```
index.html            La app completa (UI + lógica, en un solo archivo)
manifest.webmanifest  Metadatos de la PWA (nombre, íconos, colores)
sw.js                 Service worker: hace que abra sin internet
vendor/chart.umd.js   Chart.js (local, para el gráfico sin depender de un CDN)
icons/                Íconos de la app (192/512, maskable y apple-touch)
```

## Cómo publicarla (GitHub Pages)

Para poder "Agregar a la pantalla de inicio" como app instalable hace falta
servirla por HTTPS. La forma más simple es **GitHub Pages**:

1. En GitHub: **Settings → Pages**.
2. En *Build and deployment → Source* elegí **Deploy from a branch**.
3. Branch: `claude/mobile-expense-manager-sduue9` (o `main` si ya la mergeaste),
   carpeta `/ (root)`. Guardá.
4. A los ~1–2 minutos queda online en:
   `https://mateodiazdelavega.github.io/Dashborard-Finanzas/`

> El archivo `.nojekyll` ya está incluido para que Pages sirva todo tal cual.

## Cómo instalarla en el celular

**iPhone (Safari):** abrí la URL → botón *Compartir* → **Agregar a inicio**.

**Android (Chrome):** abrí la URL → menú ⋮ → **Instalar app** / *Agregar a la
pantalla principal*.

Una vez instalada abre a pantalla completa, con su ícono, y anda sin internet.

## Probarla localmente

Los service workers no funcionan abriendo el archivo con `file://`; necesitás un
servidor local:

```bash
npx serve .
# o
python3 -m http.server 8000
```

Y entrá a `http://localhost:8000`.

## Respaldos (importante)

Como los datos viven solo en el navegador, si borrás datos de navegación o
cambiás de teléfono **se pierden**. Usá **Exportar** cada tanto para guardar un
`.json` de respaldo, e **Importar** para restaurarlo en otro dispositivo.
