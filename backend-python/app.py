import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
from bson import ObjectId

load_dotenv()

app = Flask(__name__)
CORS(app)

mongo_uri = os.getenv('DATABASE_URL')

try:
    client = MongoClient(mongo_uri)
    db = client.get_database('GoLocalDB') 
    collection = db.lugares
    usuarios_col = db.usuarios
    print("✅ Servidor Python conectado a MongoDB Atlas")
except Exception as e:
    print("❌ Error de conexión:", e)

def formatear_lugar(lugar):
    lugar['_id'] = str(lugar['_id']) 
    return lugar

# --- RUTAS ---

@app.route('/', methods=['GET'])
def home():
    return "API GoLocal funcionando correctamente."

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

@app.route('/api/recomendaciones', methods=['POST'])
def obtener_recomendaciones():
    try:
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

# --- AUTENTICACIÓN ---

@app.route('/api/registro', methods=['POST'])
def registrar_usuario():
    try:
        nuevo_usuario = request.json
        
        if not nuevo_usuario.get('email') or not nuevo_usuario.get('password'):
            return jsonify({"mensaje": "Datos incompletos"}), 400

        if usuarios_col.find_one({"email": nuevo_usuario['email']}):
            return jsonify({"mensaje": "El correo ya existe"}), 409

        usuarios_col.insert_one(nuevo_usuario)
        
        return jsonify({"mensaje": "Usuario creado"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/login', methods=['POST'])
def login_usuario():
    try:
        credenciales = request.json
        
        usuario = usuarios_col.find_one({
            "email": credenciales['email'],
            "password": credenciales['password']
        })

        if usuario:
            usuario['_id'] = str(usuario['_id'])
            return jsonify(usuario), 200
        else:
            return jsonify({"mensaje": "Credenciales inválidas"}), 401

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=3000, host='0.0.0.0')