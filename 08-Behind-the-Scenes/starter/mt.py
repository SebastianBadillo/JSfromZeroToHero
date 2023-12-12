from automata.pda.npda import NPDA
from automata.tm.mntm import MNTM

mntm1 = MNTM(
    states={'q0', 'q1', 'q2', 'q3'},
    input_symbols={'0', '1'},
    tape_symbols={'0', '1', '#'},
    n_tapes=2,
    transitions={
        'q0': {
            ('0', '#'): [('q0', (('0', 'R'), ('0', 'R')))],
            ('1', '#'): [('q1', (('1', 'R'), ('1', 'L')))],
        },
        'q1': {
            ('0', '1'): [('q1', (('0', 'N'), ('1', 'L')))],
            ('0', '0'): [('q1', (('0', 'N'), ('0', 'L')))],
            ('#', '1'): [('q3', (('#', 'R'), ('1', 'R')))],
            ('#', '0'): [('q3', (('#', 'R'), ('0', 'R')))],
            ('0', '#'): [('q2', (('0', 'N'), ('#', 'R')))],
            ('1', '1'): [('q1', (('1', 'N'), ('1', 'L')))],
            ('1', '0'): [('q1', (('1', 'N'), ('0', 'L')))],
            ('1', '#'): [('q2', (('1', 'N'), ('#', 'R')))],
        },
        'q2': {
            ('1', '0'): [('q1', (('1', 'R'), ('1', 'L')))],
            ('1', '#'): [('q1', (('1', 'R'), ('1', 'L')))],
            ('0', '#'): [('q2', (('0', 'R'), ('0', 'R')))],
            ('0', '1'): [('q2', (('0', 'R'), ('1', 'R')))],
            ('0', '0'): [('q2', (('0', 'R'), ('0', 'R')))],
            ('#', '0'): [('q3', (('#', 'R'), ('0', 'R')))],
            ('#', '1'): [('q3', (('#', 'R'), ('1', 'R')))],
            
        }
    },
    initial_state='q0',
    blank_symbol='#',
    final_states={'q3'},
)
mntm1.read_input('101001').pop().print()
import re

print(mntm1.read_input('101001').pop().tapes[1])
tape = mntm1.read_input('101001').pop().tapes[1].tape
tupla = tape

# Filtrar solo los elementos que son dígitos y unirlos en una cadena
cadena_numerica = ''.join(elemento for elemento in tupla if elemento.isdigit())
print(cadena_numerica)

texto = cadena_numerica


cadena_principal = '111000000'
subcadena = str(cadena_numerica)

if subcadena in cadena_principal:
    print(f'La subcadena "{subcadena}" está presente en la cadena principal.')
else:
    print(f'La subcadena "{subcadena}" no está presente en la cadena principal.')
