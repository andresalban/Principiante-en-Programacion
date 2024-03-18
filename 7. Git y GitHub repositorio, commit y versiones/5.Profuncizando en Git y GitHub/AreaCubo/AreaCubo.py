print ("Este programa calcula el area de un cubo")

while True:
    try:
        arista=float(raw_input('ingrese el largo de la arista (en cm):'))
        area = 6 * arista ** 2
        print 'el area en cm2 del cubo es %.2f ' % area
        break
    except ValueError:
        print ('Por favor ingrese un valor numerico...')


