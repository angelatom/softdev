#Team cookie: Angela Tom & Simon Tsui
#SoftDev pd7
#K07 -- Import/Export Bank
#2019-03-05

import pymongo
import json
from pymongo import MongoClient

client = MongoClient()
SERVER_ADDR = "142.93.207.20"
connection = MongoClient(SERVER_ADDR)
db = connection.cookie
collection = db.population

'''
The dataset is the United States population in 2010.
Contents:
   - females
   - country
   - age
   - males
   - year
   - total

Hyperlink to the raw data: http://api.population.io/1.0/population/2010/United%20States/?format=json

Import mechanism: We loaded the json file and inserted it into the collection

'''

# import the json file
def import_json():
    with open("data/population.json") as p:
        j = json.load(p)
        collection.insert_many(j)

def changeIP(ip):
    client = MongoClient()
    SERVER_ADDR = ip
    connection = MongoClient(SERVER_ADDR)
    db = connection.cookie
    collection = db.population        

# search for age
def search_age(age):
    a = collection.find({"age": age})
    result = []
    for x in a:
        result.append(x["total"])
    return result[0]

# searches for less than the number given
def search_females(females):
    f = collection.find({"females": {"$lt": females}})
    for x in f:
        print(x)

# searches for less than the number given
def search_males(males):
    m = collection.find({"males": {"$lt": males}})
    for x in m:
        print(x)

        

import_json()
#search_age(0)
#search_age(3)
#search_females(50031)
