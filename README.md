# js_ball_Element.animate
El método Element.animate() es un método abreviado para crear y reproducir una animación en un elemento. Devuelve la instancia creada de un objeto Animation .


Pagina de referencia: https://developer.mozilla.org/es/docs/Web/API/Element/animate


Síntaxis

element.animate(keyframes, options); 

Parámetros

keyframes

    Un Objeto formateado para representar un conjunto de fotogramas clave.
opciones
    Puede ser un entero representando la duración de la animación  (en milisegundos), o un Objeto conteniendo una o más propiedades de sincronización: 

    id Optional
        Una propiedad única para animar(): a DOMString con la cual se hace referencia a la animación.

    delay Optional
        The number of milliseconds to delay the start of the animation. Defaults to 0.
    direction Optional
        Whether the animation runs forwards (normal), backwards (reverse), switches direction after each iteration (alternate), or runs backwards and switches direction after each iteration (alternate-reverse). Defaults to "normal".
    duration Optional
        The number of milliseconds each iteration of the animation takes to complete. Defaults to 0. Although this is technically optional, keep in mind that your animation will not run if this value is 0.
    easing Optional
        The rate of the animation's change over time. Accepts the pre-defined values "linear", "ease", "ease-in", "ease-out", and "ease-in-out", or a custom "cubic-bezier" value like "cubic-bezier(0.42, 0, 0.58, 1)". Defaults to "linear".
    endDelay Optional
        The number of milliseconds to delay after the end of an animation. This is primarily of use when sequencing animations based on the end time of another animation. Defaults to 0. 
    fill Optional
        Dictates whether the animation's effects should be reflected by the element(s) prior to playing ("backwards"), retained after the animation has completed playing ("forwards"), or both. Defaults to "none".
    iterationStart Optional
        Describes at what point in the iteration the animation should start. 0.5 would indicate starting halfway through the first iteration for example, and with this value set, an animation with 2 iterations would end halfway through a third iteration. Defaults to 0.0.
    iterations Optional
        The number of times the animation should repeat. Defaults to 1, and can also take a value of Infinity to make it repeat for as long as the element exists. 

Opciones Futuras

Las siguientes opciones actualmente no se han enviado a todos los sitios, pero se añadirán en un futuro próximo.

composite Optional
    Determina como se combinan los valores entre esta animación y otra, animaciones independientes sin especificar la composición de su propia operación. Valores predeterminados a reemplazar.

        añadir dicta un efecto aditivo, donde cada iteración sucesiva se basa en la anterior. Por ejemplo con transform, a translateX(-200px) no anularía un valor anterior rotate(20deg) que resultaría  translateX(-200px) rotate(20deg).
        acumular es similar pero un poco más inteligente: blur(2) y blur(5) resultaría  blur(7), no blur(2) blur(5).
        remplazar sobreescribe el valor anterior con el nuevo.

iterationComposite Optional
    Determina como se construyen los valores de una iteración a otra en esta animación. . Se puede configurar para acumular o reemplazar (ver arriba). Valores predeterminados para reemplazar.
spacing Optional
    Determina como los keyframes sin compensación temporal  deben ser distribuidos durante la duración de la animación. Valores predeterminados para distribuir.

        distribuir las posiciones de los keyframes para que la diferencia entre el anterior y el  posterior estén compensadas por igual , lo que es como decir, sin ninguna compensación, esto distribuirá equitativamente los keyframes a traves del tiempo de ejecución.
        situar las posiciones de los keyframes de manera que  igualen la diferencia entre los siguientes valores de una propiedad especifica sincronizada  , lo que es como decir,  que los keyframes estén más espaciados cuanto mayores sean los valores de sus propiedades.

     

Valor de retorno

Returns an Animation.
Ejemplo

En la demostración Down the Rabbit Hole (con la Web Animation API), utilizamos el método conveniente, animate() para inmediatamente crear y ejecutar una animación en el elemento  #tunnel  para hacerlo fluir hacia arriba, indefinidamente. Observar el orden  de paso de los objetos por los keyframes y también el bloque de opciones de sincronización.

document.getElementById("tunnel").animate([
  // keyframes
  { transform: 'translateY(0px)' }, 
  { transform: 'translateY(-300px)' }
], { 
  // timing options
  duration: 1000,
  iterations: Infinity
});
