Googleflog
==========
Googleflog, traductor de español al estúpido idioma ** eEzhTiil0o meETr0ofl0oG *~ xD.

Idea y desarrollo por [Alejandro AR][1].

## Demo
Puedes ver una versión online en [este enlace][2].

## API
A través del archivo `api.php` se pasa la variable `s` y se obtiene el string transformado.

    api.php?s=kinduff
    => ** Qiiñduff ,.-~ :D

Si quieres formato JSON utiliza: `format=json`.

[Ejemplo online][3]


## Ejemplo de uso con jQuery
    $.getJSON(
        'http://abarcarodriguez.com/googleflog/api.php',
        {
            s: 'Hola, ¿que hacen?',
            format: 'json'
        },
        function(data){
            alert(data.message);
        }
    );

## Colaboraciones
Pull requests e Issues son bienvenidos.

[1]:http://abarcarodriguez.com
[2]:http://abarcarodriguez.com/googleflog/
[3]:http://abarcarodriguez.com/googleflog/api.php?s=kinduff
