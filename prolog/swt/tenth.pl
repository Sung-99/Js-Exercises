generate([X],[X|_])
generate(X, Y, [Y, X|_]):- X is Y+1.

