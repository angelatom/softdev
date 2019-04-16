'''
Angela Tom
SoftDev2 pd7
K18 -- Getting Clever with List Comprehensions
2019-04-16
'''

def triple(num):
    return [(a,b,c) for a in range(num+1) for b in range(a) for c in range(b) if a*a == b*b + c*c]

print("triple")
print(triple(100))

def quicksort(l):
    if len(l) < 1:
        return l
    pivot = l[0]
    left = quicksort([x for x in l[1:] if x < pivot])
    right = quicksort([x for x in l[1:] if x not in left])
    return left + [pivot] + right
    
print("quicksort")
print(quicksort([143,51,643,1,2,6,71,22,100]))