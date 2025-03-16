# Challenge_Amigo_Secreto
Desafio challenge de Oracle Next Education

# Amigo Secreto

Este programa permite a los usuarios agregar nombres de amigos a una lista y luego realizar un sorteo para determinar un "amigo secreto" al azar. 
Se desarrolló utilizando HTML, CSS y JavaScript.

## Instalación y Uso
1. Agregar el archivo HTML con los elementos correspondientes para los inputs y listas.
2. Incluir el script JavaScript proporcionado en el archivo.
3. Interactuar con la aplicación ingresando nombres y ejecutando el sorteo.

## Funcionamiento
1. **Agregar un amigo**: El usuario introduce un nombre en el campo de entrada y lo agrega a la lista si es válido.
2. **Validar el nombre**: Se verifica que el nombre contenga solo letras y tenga al menos dos caracteres. 
3. **Insertar en la lista**: Si el nombre es válido, se muestra en la lista de amigos.
4. **Sortear amigo secreto**: Se selecciona aleatoriamente un nombre de la lista y se muestra como resultado.
5. **Restablecer la lista**: Después del sorteo, la lista de amigos se vacía para un nuevo uso.

## Descripción de las Funciones

### `agregarAmigo()`
- Obtiene el valor del input.
- Valida el nombre utilizando `validarNombre()`.
- Si es válido, lo agrega a la lista de amigos con `insertarAmigo()`.
- Limpia el campo de entrada.
- Actualiza la cantidad de amigos en la lista.

### `validarNombre(nombreAmigo)`
- Se ocuparon expresiones regulares para validar multiples usos, es decir que solo contengan letras y letras con acentos
- Solo admite un nombre de al menos 2 caracteres en adelante
- Devuelve `true` si es válido o `false` si no lo es.
- Muestra una alerta en caso de nombre inválido.

### `insertarAmigo(nombreAmigo, listaAmigos)`
- Crea un elemento `<li>` con el nombre del amigo.
- Lo agrega a la lista proporcionada como parámetro.

### `sortearAmigo()`
- Verifica si hay amigos en la lista.
- Si hay amigos, selecciona uno al azar y lo muestra como resultado.
- Limpia la lista de amigos y reinicia el contador.
- Si no hay amigos, muestra un mensaje de advertencia y limpia los resultados.
