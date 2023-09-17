# Listas
animales = ["vaca🐮","perro🐶","gato😺","ballena🐳"]
numeros = [1,2,3,4,5,6]
nums = [i for i in range(10)]
print(nums)
num_cuadratic = [i**2 for i in range(10)]
print(num_cuadratic)

# Diccionarios u objetos
diccionario_libros = {'nombre':'Harry Potter','author':'J.K. Rowling'}
print(diccionario_libros['author'])
print(diccionario_libros.get('author'))
print(diccionario_libros.keys())
print(diccionario_libros.items())

# Diccionario + Listas
list_libros = [{'nombre':'El viaje de Gulliver','author':'Jonthan Swift'},diccionario_libros,{'nombre':'Divina Comedia','author':'Dante Aligheri'}
               ,{'nombre':'Amarillo','paises':['Peru','Arg']}]
print(list_libros)
print(list_libros[-1])
print(list_libros[1:3])
print(len(list_libros))
list_libros.reverse()
print(list_libros)
# Funciones
def saludar(nombre):
    return f"Bienvenido a CS, {nombre}"

def librosActuales():
    return {"nombre":"El viaje de Gulliver"}

saludo = saludar("Alvaro")
print(saludo)

def sumarNums(numA, numB):
    print(int(numA) + int(numB))

sumarNums(2,5)
# Recursividad
lista = []
def cadenaNums(numero):
    if numero <= 0:
        lista.reverse()
        return
    lista.append(numero)
    return (cadenaNums(numero-1))

cadenaNums(10)
print(lista)

# Funciones anónimas

duplicar = lambda x : x*2
print(duplicar(5))

sumarParejas = lambda a,b : a+b
print(sumarParejas(2,5))
 
def multiplicador(n):
    return lambda x : x * n

miFuncion = multiplicador(4)
multiplicador4 = miFuncion(5)
print(multiplicador4)

# Funciones nativas
# zip, enumerate, filter, map

