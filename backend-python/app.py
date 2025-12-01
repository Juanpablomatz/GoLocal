import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
from bson import ObjectId

load_dotenv()

app = Flask(__name__)
CORS(app)

# Conexión a Mongo
mongo_uri = os.getenv('DATABASE_URL')
try:
    client = MongoClient(mongo_uri)
    db = client.get_database('GoLocalDB') 
    collection = db.lugares
    usuarios_collection = db.usuarios
    print("✅ Servidor Python conectado a Mongo Atlas")
except Exception as e:
    print("❌ Error de conexión:", e)

def formatear_lugar(lugar):
    lugar['_id'] = str(lugar['_id']) 
    return lugar

# --- RUTAS ---

@app.route('/', methods=['GET'])
def home():
    return "API GoLocal Funcionando 🚀"

# 1. Todos los lugares
@app.route('/api/lugares', methods=['GET'])
def get_lugares():
    try:
        lugares = list(collection.find())
        lugares_limpios = [formatear_lugar(l) for l in lugares]
        return jsonify(lugares_limpios)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 2. Por Categoría (Búsqueda flexible)
@app.route('/api/lugares/<categoria>', methods=['GET'])
def get_lugares_por_categoria(categoria):
    try:
        # Busca ignorando mayúsculas y espacios
        filtro = {"categoria_principal": {"$regex": categoria.strip(), "$options": "i"}}
        lugares = list(collection.find(filtro))
        lugares_limpios = [formatear_lugar(l) for l in lugares]
        return jsonify(lugares_limpios)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 3. Recomendaciones (Tab 3)
@app.route('/api/recomendaciones', methods=['POST'])
def obtener_recomendaciones():
    try:
        datos = request.json
        intereses = datos.get('intereses', [])
        if not intereses: return jsonify([])

        filtro = {"etiquetas": {"$in": intereses}}
        lugares = list(collection.find(filtro))
        lugares_limpios = [formatear_lugar(l) for l in lugares]
        return jsonify(lugares_limpios)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 4. Registro y Login (Usuarios)
@app.route('/api/registro', methods=['POST'])
def registrar():
    try:
        usuario = request.json
        if usuarios_collection.find_one({"email": usuario['email']}):
             return jsonify({"error": "Correo ya registrado"}), 400
        usuarios_collection.insert_one(usuario)
        return jsonify({"mensaje": "Creado", "status": "ok"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/login', methods=['POST'])
def login():
    try:
        data = request.json
        user = usuarios_collection.find_one({"email": data.get('email')})
        if user and user['password'] == data.get('password'):
            user['_id'] = str(user['_id'])
            return jsonify({"mensaje": "Login OK", "usuario": user, "status": "ok"})
        return jsonify({"error": "Datos incorrectos"}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 5. Agregar Reseña
@app.route('/api/lugares/<id>/resena', methods=['POST'])
def agregar_resena(id):
    try:
        collection.update_one({"_id": ObjectId(id)}, {"$push": {"reseñas": request.json}})
        return jsonify({"status": "ok"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=3000)