from flask import Flask, render_template, jsonify, request
import random

app = Flask(__name__)

templates = [
       {
        "inputs": 18,
        "category": "Historical Figures(UK)(Playwright)",
        "word": "William Shakespeare"
    },
    {
        "inputs": 13,
        "category": "Historical Figures(South Africa)(Freedom Fighter)",
        "word": "Nelson Mondela"
    },
    {
        "inputs": 24,
        "category": "Historical Figures(INDIA)(Freedom Fighter)",
        "word": "Mohandas Karamchand Gandhi"
    },
    {
        "inputs": 13,
        "category": "Country(Previous Name= 'kingdom of Great Britain')",
        "word": "United Kingdom"
    },
    {
        "inputs": 11,
        "category": "Country (Previous Name='Kaffraria')",
        "word": "South Africa"
    },
    {
        "inputs": 5,
        "category": "Country (Historical Chinese Name='Tianzhu')",
        "word": "India"
    },


]

@app.route("/")
def index():
  return render_template("index.html")

@app.route("/get-template")
def get_template():
  return jsonify({
        "status": "success",
        "word": random.choice(templates)
  })

if __name__ == '__main__':
  app.run()
