from flask import Flask, request, jsonify
from flask_cors import CORS
# from model_download import get_top_similar_images
from another_copy_of_main_datathon_2 import classify_product
# import pandas as pd
# df = pd.read_pickle('./newest/classify_product.pkl')


# import fclip

# def get_top_similar_images(text):
#     image_embeddings = fclip.encode_images(images, batch_size=32)
#     # Encode text to get text embedding
#     text_embedding = fclip.encode_text([text], batch_size=32)[0]

#     # Compute similarity scores between text embedding and image embeddings
#     similarity_scores = np.dot(text_embedding, image_embeddings.T)

#     # Sort the images based on similarity scores in descending order
#     sorted_indices = np.argsort(similarity_scores)[::-1]

#     # Retrieve the top K most similar image URLs
#     top_k = 5  # Number of top similar images to retrieve
#     top_similar_image_urls = [images[i] for i in sorted_indices[:top_k]]

#     # Create a dictionary with URLs and their corresponding similarity scores
#     top_similar_images_info = [{'image': url, 'similarity_score': similarity_scores[i] , 'title': 'imagee' , 'link': "https://www.google.com/"} for i, url in enumerate(top_similar_image_urls)]

#     return top_similar_images_info

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
#http://localhost:3000/api/abdshfd

@app.route('/api/sendMessage', methods=['POST'])
def handle_message():
    if request.method == 'POST':
        data = request.json
        message = data.get('message')
        print(message)
        
        # response_array = get_top_similar_images(message)
        response_array = classify_product(message)
        print(response_array)

        # Example array response
        # response_array = [
        #     {"image": "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" , "title": "imageee", "link":"https://www.google.com/"}
        # ]
        # for i in range(10):
        #     response_array.append({"image": "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" , "title": "imageee", "link":"https://www.google.com/"})

        # Returning the array as JSON response
        return jsonify({'responseArray': response_array})

if __name__ == '__main__':
    app.run(debug=False , port = 8082)  # Run the Flask app in debug mode