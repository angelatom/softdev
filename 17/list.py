# 1
def loopy():
    list = []
    for i in range(4):
        list.append(str(i*22))
    return list
       
def compy():
    list = [str(i*22) for i in range(4)]
    return list

# 2
def loopy2():
    list = []
    for i in range(5):
        list.append(7+ i*10)
    return list

def compy2():
    list = [7 + i* 10 for i in range(5)]
    return list

# 6
def loopy6(num):
    list = []
    for x in range(1,num+1):
        if num % x == 0:
            list.append(x)
    return list

def compy6(num):
    list = [x if num % x == 0 else 0 for x in range(1,num+1)]
    while 0 in list:
        list.remove(0)
    return list

# 4
def loopy4():
    list = []
    for i in range(101):
        if len(loopy6(i)) > 2:
            list.append(i)
    return list

def compy4():
    list = [i if len(compy6(i)) > 2 else 0 for i in range(101)]
    while 0 in list:
        list.remove(0)
    return list    

#5
def loopy5():
    list = []
    for i in range(101):
        if len(loopy6(i)) == 2:
            list.append(i)
    return list

def compy5():
    list = [i if len(loopy6(i)) == 2 else 0 for i in range(101)]
    while 0 in list:
        list.remove(0)
    return list  

#7
def loopy7(matrix):
    list = []
    for i in range(len(matrix[0])):
        row = []
        for j in range(len(matrix)):
            row.append(matrix[j][i]) # atom
        list.append(row)
    return list

def compy7(matrix):
    list = [[matrix[j][i]  for j in range(len(matrix))] for i in range(len(matrix[0]))]
    return list

