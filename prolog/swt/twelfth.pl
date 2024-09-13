gerar(X, Y, L):- Z is Y.
gerar(X, Y, [X|L]):- Z is X + 1, Z < Y, gerar(Z, Y, L).
