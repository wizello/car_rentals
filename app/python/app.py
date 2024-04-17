from flask import Flask, jsonify, request
from app.python.image_classifier import ImageClassifier

app = Flask(__name__)

# Instantiate Image Classifier
classifier = ImageClassifier("best_model.h5")

# Define Predict Route
@app.route('/predict', methods=['POST'])
def predict():
    # Get the image file from the request
    image_file = request.files['image']
    
    # Use Image Classifier for predictions
    prediction = classifier.predict_image(image_file)
    
    # Return prediction as JSON response
    return jsonify({"prediction": prediction})

if __name__ == '__main__':
    app.run(debug=True)


