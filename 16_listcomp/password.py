'''
Angela Tom
SoftDev2 pd7
K16 -- 2019-04-12
2019-04-12
'''

upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lower = "abcdefghijklmnopqrstuvwxyz"
nums = "0123456789"
nonalpha = ".?!&,;:-_*"

def check(password):
    checkupper = len([x for x in password if x in upper])
    checklower = len([x for x in password if x in lower])
    checknums = len([x for x in password if x in nums])
    ans = checklower * checkupper * checknums
    if ans == 0:
        return False
    return True

def rate(password):
    rating = 10
    checkupper = len([x for x in password if x in upper])
    checklower = len([x for x in password if x in lower])
    checknums = len([x for x in password if x in nums])
    checknonalpha = len([x for x in password if x in nonalpha])
    if not check(password):
        rating = 1
    if len(password) < 6:
        rating -= 2
    if checknonalpha < 3:
        rating -= 3 - checknonalpha
    if checknums < 3:
        rating -= 3 - checknums
    if checkupper < 3:
        rating -= 3 - checkupper
    if rating < 1:
        rating = 1
    return rating
    


print(check("abc"))
print(check("123"))
print(check("ABC"))
print(check("AB1"))
print(check("ABC12x"))
print(check("Password123"))
print(rate("Password123"))
print(rate("ord1"))
print(rate("Pd1&"))
print(rate("PPPassword123*.?"))
print(rate("Passwo.rd123"))