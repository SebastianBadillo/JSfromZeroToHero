# uno = '1'
# dos = '01'
# print(uno+dos)







# import re

# # Texto de ejemplo
# texto = "011111111"

# # Patrón de búsqueda
# patron = r'.*0111.*'

# # Utilizar re.search para encontrar el patrón en el texto
# coincidencia = re.search(patron, texto)

# # Verificar si hay coincidencia
# if coincidencia:
#     print(f"Se encontró una coincidencia: {coincidencia.group()}")
# else:
#     print("No se encontraron coincidencias.")


import re


texto = "#> Tape 1: 01#\n#            ^\n#> Tape 2: 10001#\n"

# Buscar la cadena que sigue a "Tape 2:"
match = re.search(r'#> Tape 2: (.+?)#', texto)

if match:
    valor_tape2 = match.group(1)
    print("Valor después de Tape 2:", valor_tape2)
else:
    print("No se encontró la cadena después de Tape 2.")










