from flask import Flask, render_template, request, jsonify
import openai
import os

app = Flask(__name__)

# Set your OpenAI API key
openai.api_key = "your_openai_api_key_here"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/services')
def services():
    return render_template('services.html')

# Chatbot route to handle user messages and return ChatGPT responses
@app.route('/chatbot', methods=['POST'])
def chatbot_response():
    user_message = request.json.get('message')
    
    # Generate response using ChatGPT
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # or "gpt-4" if you have access
            messages=[{"role": "user", "content": user_message}]
        )
        
        bot_message = response['choices'][0]['message']['content']
        
    except Exception as e:
        bot_message = "Sorry, I am currently unable to process requests. Please try again later."
        print(f"Error with OpenAI API: {e}")

    return jsonify(response=bot_message)

if __name__ == '__main__':
    app.run(debug=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)
