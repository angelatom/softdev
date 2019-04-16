def triple(num):
    return [(a,b,c) for a in range(num+1) for b in range(a) for c in range(b) if a*a == b*b + c*c]

print(triple(10))