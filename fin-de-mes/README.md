# Fin de Mes

Un juego narrativo de decisiones. Tenés veintidós años, tu primer trabajo en blanco, y
diez años por delante en un país donde los precios llegan antes que los sueldos.

No es una app de finanzas. No hay planillas, no hay presupuestos, no hay consejos. Hay
escenas, decisiones y consecuencias que aparecen meses después, cuando ya te olvidaste
de qué habías elegido.

## La idea

La gente no maneja mal la plata por falta de información. La maneja mal porque las
consecuencias de una decisión financiera llegan años más tarde, cuando ya no se pueden
asociar con la causa.

Un juego es la única forma de arreglar eso: comprime diez años en veinte minutos y te
hace *sentir* el resultado de algo que elegiste al minuto tres.

## Reglas de diseño

Tres decisiones de diseño sostienen todo lo demás. Si alguna se rompe, el juego enseña
cosas falsas y es peor que no existir.

**1. Ninguna opción es la correcta.** Ahorrar todo también sale caro: si nunca viajás,
nunca salís y nunca te comprás nada, el ánimo se te va al piso y el epílogo te lo cobra.
La plata es un medio. Un juego que premia solo acumular enseña a ser miserable, no a ser
prudente.

**2. No se puede ganar prediciendo.** El régimen económico se sortea al empezar, está
oculto, y cambia solo cada uno o dos años. El dólar empata con la inflación en el largo
plazo: se atrasa durante meses —y ahí el que está dolarizado pierde contra los precios— y
después corrige de golpe. El plazo fijo a veces le gana a la inflación y a veces no. Si
existiera una jugada que gana siempre, no habría nada que aprender.

**3. El puntaje no es el patrimonio.** La métrica principal es el **aire**: cuántos meses
podrías vivir si mañana se corta el ingreso. Si el puntaje fuera la plata final, el juego
enseñaría a apostar y ganaría el que arriesgó todo y tuvo suerte.

## Lo que enseña sin explicar

- Los gastos se ajustan por inflación **todos los meses**. El sueldo se ajusta cada cinco
  o seis, y casi siempre por debajo. Nadie te explica la licuación: la ves en el resumen
  de fin de mes y te da bronca.
- Las cuotas fijas sin interés, con inflación alta, **juegan a tu favor**. El problema
  nunca es una cuota: son seis al mismo tiempo.
- La deuda de tarjeta es lo único que crece más rápido que la inflación.
- El colchón no sirve para ganar plata. Sirve para no tener que aceptar la primera cosa
  que aparezca cuando te echan.
- Nadie te presta infinito. Cuando se corta el crédito, no queda otra que achicarse.

Al final, el juego compara **tu mismo flujo de plata** contra tres estrategias mecánicas
—todo en pesos, todo a plazo fijo, todo a dólares— sobre el escenario exacto que te tocó.
Ahí está el aprendizaje, más que en la partida.

## Cómo jugarlo

Es un solo archivo HTML sin dependencias. Alcanza con abrirlo:

```bash
python3 -m http.server 8000
# y entrar a http://localhost:8000
```

O directamente `open index.html`. Funciona sin internet y guarda la partida en curso en
el navegador.

## Estructura

```
index.html    Todo: motor económico, contenido narrativo e interfaz
```

El contenido vive en dos listas al final del archivo:

- `HITOS` — escenas fijas que se disparan en un mes determinado y en orden. Son la
  columna vertebral: primer sueldo, la tarjeta, el primer aumento que no alcanza, el
  despido, la pareja.
- `EVENTOS` — bolsa aleatoria de la vida diaria. Las marcadas `repetible: true` pueden
  volver a aparecer después de veinte meses. Algunas están condicionadas al estado del
  país: `dolar-barato` solo aparece cuando el tipo de cambio está atrasado.

Agregar una escena nueva es agregar un objeto a una de las dos listas. Cada opción tiene
un `hacer()` que modifica el estado y devuelve el texto de la consecuencia.

## Estado

Prototipo. La pregunta que tiene que contestar es una sola: **¿dan ganas de jugar otra
partida?** Si la respuesta es no, nada del resto importa.

Falta: más contenido (hoy son unas 25 escenas), el tramo final de la década está más
flojo que el principio, y no hay sonido ni animaciones.

---

Los precios, sueldos e inflación son inventados pero verosímiles. No es un pronóstico y
nada de acá es asesoramiento financiero.
