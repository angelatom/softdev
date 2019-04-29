'''
Reduction_Production-- Angela Tom, Imad Belkebeer
'''
from functools import reduce
import string

f = open("treasureisland.txt", 'r')
lines = f.read().splitlines()
for i in range(len(lines)):
    lines[i] = lines[i].split(' ')
    lines[i] = [x.lower() for x in lines[i] if x != '' and x != '.']
    for j in range(len(lines[i])):
        for c in string.punctuation:
            lines[i][j] = lines[i][j].replace(c,'')
words = []
for line in lines:
    words.extend(line)

#Find frequency of single word
def word_freq(s):
    return sum([1 for x in words if x == s.lower()])

print(word_freq("mate"))

#Find total frequency of group of words
def group_freq(s):
    phrase = s
    s = s.split(' ')
    if len(s) == 1:
        return word_freq(s)
    temp = [reduce(lambda x,y: x + ' ' + y, words[i:i + len(s)]) for i in range(len(words) - len(s) + 1)]
    #print(temp)
    return sum([1 for x in temp if x == phrase.lower()])

print(group_freq("one leg"))

#Find most frequently occuring word
def most_freq():
    return reduce(lambda x,y: x if word_freq(x) > word_freq(y) else y, words)

print(most_freq())