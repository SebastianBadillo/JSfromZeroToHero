from datetime import datetime, timedelta

# Obtener fecha actual 
fecha_actual = datetime.now()

# Sumar 66 dias a la fecha actual 
nueva_fecha = fecha_actual + timedelta(days=66)

# Imprime la nueva fecha
print("Fecha actual:", fecha_actual.strftime("%Y-%m-%d"))
print("Fecha en 66 días:", nueva_fecha.strftime("%Y-%m-%d"))