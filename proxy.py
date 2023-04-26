from flask import Flask, request
import os
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/api/upload-image', methods=['POST'])
@cross_origin()
def upload_image():
    if 'image' not in request.files:
        return 'No image uploaded', 400

    file = request.files['image']
    if file.filename == '':
        return 'No image selected', 400

    filename = file.filename
    file.save(os.path.join('/data/seenisftp/upload', filename))

    return 'Image uploaded successfully', 200

if __name__ == '__main__':
    app.run(host='172.17.10.254', port=9000)