# Angela Tom and Imad 
# SoftDev2 pd7
# K06 -- Yummy Mongo Py
# 2019-03-01

import pymongo

SERVER_ADDR = "142.93.207.20"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def find_borough( borough ):
    return collection.find({"borough" : borough})

def find_zip( zipcode ):
    return collection.find({"address.zipcode": zipcode})

def find_zipgrade( zipcode, grade ):
    return collection.find({"$and" :[{"address.zipcode": zipcode} , {"grades.0.grade": grade }]})

def find_zipscore( zipcode, score ):
    return collection.find({"$and": [{"address.zipcode":zipcode},{"grade.0.score": {"$lt": score} }]})

def find_DunkinDonuts( zipcode ):
    return collection.find({"$and" : [{"name":"Dunkin Donuts"},{"address.zipcode": zipcode}]})