import os
from flask import Flask, jsonify, request  # <--- AQUÍ ESTABA EL ERROR (Faltaba request)
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
from bson import ObjectId

# 1. Cargar contraseña
load_dotenv()

app = Flask(__name__)
CORS(app)

# 2. Conexión a Mongo
mongo_uri = os.getenv('DATABASE_URL')

try:
    client = MongoClient(mongo_uri)
    db = client.get_database('GoLocalDB') 
    collection = db.lugares
    print("✅ Conectado exitosamente a MongoDB Atlas con Python")
except Exception as e:
    print("❌ Error conectando a Mongo:", e)

def formatear_lugar(lugar):
    lugar['_id'] = str(lugar['_id']) 
    return lugar

# --- RUTAS ---

@app.route('/', methods=['GET'])
def home():
    return "Servidor Python Flask funcionando 🐍"

@app.route('/api/lugares', methods=['GET'])
def get_lugares():
    try:
        lugares = list(collection.find())
        lugares_limpios = [formatear_lugar(l) for l in lugares]
        return jsonify(lugares_limpios)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/lugares/<categoria>', methods=['GET'])
def get_lugares_por_categoria(categoria):
    try:
        filtro = {"categoria_principal": categoria}
        lugares = list(collection.find(filtro))
        lugares_limpios = [formatear_lugar(l) for l in lugares]
        return jsonify(lugares_limpios)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# --- ESTA ERA LA SECCIÓN QUE DABA PROBLEMAS ---
@app.route('/api/recomendaciones', methods=['POST'])
def obtener_recomendaciones():
    try:
        # Ahora sí funciona 'request' porque lo importamos arriba
        datos = request.json 
        intereses_usuario = datos.get('intereses', [])

        if not intereses_usuario:
            return jsonify([])

        filtro = {"etiquetas": {"$in": intereses_usuario}}
        lugares = list(collection.find(filtro))
        lugares_limpios = [formatear_lugar(l) for l in lugares]
        
        return jsonify(lugares_limpios)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=3000)