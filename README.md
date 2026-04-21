# Validation Questions — be-two

---

## Question 1  
MongoDB si lo considera duplicado ya que al hacer la comparacion en la base de datos lleva todo a minusculas por lo que se estaria hablando de lo mismo en este caso.  

-  createCarDto.nombre = createCarDto.nombre.toLowerCase(); -> acá se ve la linea que afecta, que lo que hace es que todo lo que llegue se cambie a minuscula. Todo esto hace que la restricción de unique sea mas relevanta al no ser sensible a minusculas y mayusculas.   

---

## Question 2  
Las dos validaciones existen ya que estas son accedidas en capas distintas, por ejemplo, FindOne valida dentro del servicio para evitar que Mongoose lance un error de HTTP 400 en vez del error HTTP 500 que es esperado en este caso. En remove, el validador no permite que el controlador reciba un valor invalido antes de ser enviado por lo que lanza un HTTP 400 instantaneamente.  

---

## Question 3  

En el apartado de create  si se necesita el bloque de try/catch ya que este metodo busca guardar valores en la base de datos por lo que pueden ocurrir errores que solo se manejan con este bloque. Por otra parte, findAll solo hace consultas de lectura por lo que no es necesario manejar errores que suelen ocurrir cuando se quiere cambiar la base de datos, como por ejemplo HTTP 11000 que sucede cuando se viola un índice único.  
---

## Question 4   

En el metodo de update se ralizan 2 peticiones, la primera es para buscar el documento que se quiere actualizar y la segunda es para actualizarlo. Esto puede trar problemas con la respuesta de api ya que al no consultar de nuevo el documento cambiado se pueden enviar respuestas incosistentes. Por ejemplo, si mandas a actualizar un carro para cambiar su nombre, pero se envia el carro ya consultado, entoces verias el nombre anterior y no el que actualizaste.  


---

## Question 5   
Al usar forRoot(process.env.MONGODB_URL...) se evaluaria inmediatamente aun si las variables de entorno no han sido cargadas, por lo que su valor pasaria a ser undefined y se usaria la url por defecto. Por otra parte, forRootAsync con useFactory espera a que estas variables sean cargadas antes de crear la conexión.  

---

## Question 6  

Si el estudiante olvida importar CarsModule en AppModule:

- La aplicación sí inicia.
- Pero Nest nunca registra las rutas de carros.
- Cuando alguien intente acceder a /cars, recibirá HTTP 404.

En cambio, si sí importa CarsModule pero olvida MongooseModule.forFeature()

- Nest no puede inyectar el modelo de Car.
- La aplicación falla al arrancar.

---

## Question 7  
El deleteOne no necesita de la consulta finOne para poder eliminar un registro por lo que no es necesario hacer las dos consultas, cuando deleteOne ya lo resuelve sola.

deletedCount todavía puede ser 0 aunque el ID tenga formato válido si:

- el ObjectId existe como formato
- pero no existe ningún documento con ese _id en MongoDB


---

## Question 8  
Mover la validación del pipe al servicio hace que los datos inválidos lleguen más lejos dentro de la aplicación y obliga a repetir validaciones en varios lugares.  

Si se elimina @Injectable(), se podría intanciar el pipe, sin embargo, no es una buena practica.


---

## Question 9  

Para el primer caso, la nueva configuración no afecta la ejecución ya que son configuraciones independientes. Sin embargo, para el segundo caso mover enableCors() después de app.listen() sí causa problemas, porque CORS debe configurarse antes de que el servidor empiece a recibir peticiones.

