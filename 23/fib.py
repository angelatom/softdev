'''
Angela Tom
SoftDev2 pd7
K23
2019-05-02
'''
import random
'''
def make_HTML_heading(f):
    txt = f()
    def inner():
        return '<h1>' + txt + '</h1>'
    return inner

def greet():
    greetings = ["Hello", "Welcome", "AYO!", "Hola", "Bonjour", "Word up"]
    return random.choice(greetings)

greet_heading = make_HTML_heading(greet)
print(greet_heading())
'''
'''
# Decorator
def make_HTML_heading(f):
    txt = f()
    def inner():
        return '<h1>' + txt + '</h1>'
    return inner

@make_HTML_heading
def greet():
    greetings = ["Hello", "Welcome", "AYO!", "Hola", "Bonjour", "Word up"]
    return random.choice(greetings)

greet_heading = greet
print(greet_heading())
'''
# memoization : process of storing previously calculated results so as to avoid re-calaculation

def save(f):
    memo = {}
    def inner(x):
        if x in memo:
            return memo[x]
        else:
            memo[x] = f(x)
            return memo[x]
    return inner

@save
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print(fib(10))
