'''
Angela Tom
SoftDev2 pd7
K17 -- PPFTLCW
2019-04-15
'''

# 1
def loopy1():
    list = []
    for i in range(5):
        list.append(str(i*22))
    return list

def compy1():
    return [str(i*22) for i in range(5)]

print(loopy1())
print(compy1())

# 2
def loopy2():
    list = []
    for i in range(5):
        list.append(7+ i*10)
    return list

def compy2():
    return [7 + i* 10 for i in range(5)]

print(loopy2())
print(compy2())

# 3
def loopy3():
    list = []
    for i in range(3):
        for j in range(3):
            list.append(i * j)
    return list

def compy3():
    return [i * j for i in range(3) for j in range(3)]

print(loopy3())
print(compy3())

# 6
def loopy6(num):
    list = []
    for x in range(1,num+1):
        if num % x == 0:
            list.append(x)
    return list

def compy6(num):
    return [x for x in range(1,num+1) if num % x == 0]

print(loopy6(15))
print(compy6(15))

# 4
def loopy4():
    list = []
    for i in range(101):
        if len(loopy6(i)) > 2:
            list.append(i)
    return list

def compy4():
    return [i for i in range(101) if len(compy6(i)) > 2]

print(loopy4())
print(compy4())

#5
def loopy5():
    list = []
    for i in range(101):
        if len(loopy6(i)) == 2:
            list.append(i)
    return list

def compy5():
    return [i for i in range(101) if len(loopy6(i)) == 2]

print(loopy5())
print(compy5())

#7
def loopy7(matrix):
    list = []
    for i in range(len(matrix[0])):
        row = []
        for j in range(len(matrix)):
            row.append(matrix[j][i])
        list.append(row)
    return list

def compy7(matrix):
    return [[matrix[j][i] for j in range(len(matrix))] for i in range(len(matrix[0]))]

print(loopy7([[1,2,3],[4,5,6],[7,8,9]]))
print(compy7([[1,2,3],[4,5,6],[7,8,9]]))
