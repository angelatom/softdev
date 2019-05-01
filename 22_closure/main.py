'''
Angela Tom
SoftDev2 pd7
K22 -- Closure
2019-05-01
'''

def repeat(word):
    def times(time):
        return word * time
    return times

r1 = repeat("hello")
r2 = repeat("cool")

print(r1(2))
print(r2(2))
print(repeat("cool")(3))

def make_counter():
    x = 0
    def count(y = False):
        nonlocal x
        if y:
            return x
        x += 1
        return x
    return count

ctr1 = make_counter()
print(ctr1())
print(ctr1())
ctr2 = make_counter()
print(ctr2())
print(ctr1())
print(ctr2())

# Accessor by having a param that is not False
print(ctr1('a'))
print(ctr2('a'))
print(ctr1(True))
print(ctr2(True))
#print(ctr1(False)) 
