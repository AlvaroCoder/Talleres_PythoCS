# Comentarios de una línea
"""
    Comentarios de varias líneas
"""
# Declaración de variables
a = 15
b = 10
a = b 
g,h = 12,"a"
l = 1.2

# Operaciones
a += 1
a -= 10
a *= 4
a /= 4
a = 78 * 45 +5

# Cadenas de texto
texto = "Este es un mensaje "
texto2 = 'Este un texto'
nombre = input("Dame tu nombre ---------------- "+"\n")
saludo = f'{nombre}, bienvenido al Taller de Python 2023-II 👋!'
print(saludo)

# Operaciones con texto
suma_textos = texto + texto2
print(suma_textos)

mult_texto = texto * 4
print(mult_texto)

print()
edad = 18
saludo = f"Feliz {edad} cumpleaños 🎂🤖"
saludo2 = "Feliz "+str(edad)+" cumpleaños 🎂🤖"
print(saludo)
print(saludo2)
print()

# Propiedades de los textos
texto = "Adios a todos"
print(len(texto))
print(texto.upper()) # mayúsculas
print(texto.lower()) # minúsculas
print(texto.title()) 
print(texto.count("o")) # cuenta la letra

print(texto[2:])
print(texto[:2])
print(texto[2:4])
print(texto[::-1])

carac = str(2) + "Adios"
print(carac)

# Sentencias de Control o Control Flow
edad = int(input('Dame tu edad -------------------->'+"\t"))
if edad >= 10 and edad <18:
    print("Eres un adolescente")
elif edad >= 18 and  edad < 27:
    print("Eres joven !") 
else :
    print("No eres mayor")
    

requerimiento = "Si pasas" if edad >= 18 else "No pasas"
print(requerimiento)

