# Team Teal -- Angela Tom and Soojin Choi
# SoftDev2 pd7
# K19 -- Ready, Set, Math!
# 2019-04-17

# Union
# the union of two sets
def union(set1, set2):
    return [x for x in set1 if x not in set2] + set2    

print("Union")
print(union([1,2,3],[2,3,4]))
print(union([],[]))
print(union([3,6,8],[1,5,6]))

# Intersection
# {1,2,3} and {2,3,4} -> {2,3}
def intersection(set1, set2):
    return [x for x in set1 for y in set2 if x == y]

print("Intersection")
print(intersection([1,2,3],[2,3,4]))
print(intersection([3,6,7],[1,5,6]))

# complement
# all members of U not in A (U/A)
def complement(set1, set2):
    return [x for x in set1 if x not in set2]

print("complement")
print(complement([1,2,3],[2,3,4]))
print(complement([3,6,7],[1,5,6]))

# symmetric difference
# opposite of intersection (set difference)
def sym(set1, set2):
    list = [x for x in set1 if x not in set2]
    list2 = [y for y in set2 if y not in set1]
    return list + list2

print("sym")
print(sym([1,2,3],[2,3,4]))
print(sym([3,6,7],[1,5,6]))

# cartesian product of A and B
# {1,2} {red, white}
# {(1, red)(1, white)(2, red)(2, white)}

def cart(set1, set2):
    return [(x,y) for x in set1 for y in set2]

print("cart")
print(cart([1,2],["red", "white"]))
