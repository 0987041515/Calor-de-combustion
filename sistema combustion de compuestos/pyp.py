from flask import Flask, request, jsonify
app = Flask(__name__)

entalpias = {
    'metano': -890.3,
    'etano': -1560,
    'propano': -2220,
    'butano': -2878,
    'tolueno': -3910
}

@app.route("/calcular", methods=["POST"])
def calcular():
    data = request.json
    compuesto = data["compuesto"]
    masa = float(data["masa"])
    q = masa * entalpias[compuesto]
    return jsonify({"energia": q})

if __name__ == "__main__":
    app.run(debug=True)
