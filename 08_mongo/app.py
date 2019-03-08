# Cookie -- 


from flask import Flask, render_template, session, url_for, redirect, request
import os
from util import mongo

app = Flask(__name__) # creates instance of a flask app
app.secret_key = os.urandom(32) 
mongo.import_json()

@app.route('/')
def main():
    return render_template("index.html")

@app.route('/ip')
def ip():
    ip = request.args["ip"]
    mongo.changeIP(ip)
    return redirect(url_for("main"))

@app.route('/search')
def search():
    age = request.args["total"]
    ans = mongo.search_age(age)
    return render_template("index.html", result = ans)

if __name__ == "__main__":
    app.debug = True
    app.run()