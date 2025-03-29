import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables (useful later for API key)
load_dotenv()

app = Flask(__name__)
# Allow requests from your frontend (running via file:// or http://localhost usually)
# For development, '*' is okay, but be more specific for production.
CORS(app)

# --- Placeholder for OpenAI API key later ---
# openai_api_key = os.getenv("OPENAI_API_KEY")
# print(f"DEBUG: OpenAI Key loaded: {'Yes' if openai_api_key else 'NO'}")

@app.route('/validate', methods=['POST'])
def validate_answer():
    # 1. Log that the request was received
    print("--- Request received on /validate ---")

    # 2. Get the data sent from JavaScript
    data = request.get_json()
    if not data:
        print("ERROR: Invalid or missing JSON data in request body")
        return jsonify({"error": "Invalid request body"}), 400

    user_answer = data.get('answer')
    category = data.get('category')
    letter = data.get('letter')

    # 3. Check if all required data is present
    if not all([user_answer, category, letter]):
         print(f"ERROR: Missing data. Received: answer={user_answer}, category={category}, letter={letter}")
         return jsonify({"error": "Missing data: answer, category, or letter"}), 400

    # 4. Log the received data for debugging
    print(f"Data received: Answer='{user_answer}', Category='{category}', Letter='{letter}'")

    # 5. --- DUMMY VALIDATION LOGIC (Replace with AI later) ---
    is_correct = False
    # Simple check: Is it non-empty, does it start with the right letter?
    if user_answer and user_answer.startswith(letter.lower()):
         # Let's say any answer longer than 2 chars starting with the letter is "correct" for now
         if len(user_answer) > 2:
              is_correct = True
              print("DEBUG: Dummy check PASSED (starts with letter, length > 2)")
         else:
              print("DEBUG: Dummy check FAILED (too short)")
    else:
         print(f"DEBUG: Dummy check FAILED (doesn't start with letter '{letter.lower()}' or is empty)")
    # --- END DUMMY LOGIC ---

    # 6. Send the result back to JavaScript
    print(f"Sending response: {{'correct': {is_correct}}}")
    print("------------------------------------") # Separator for logs
    return jsonify({"correct": is_correct})

# Run the server
if __name__ == '__main__':
    print("Starting Flask server...")
    # host='0.0.0.0' makes it accessible on your local network
    # port=5000 is the default Flask development port
    # debug=True provides auto-reloading and better error messages during development
    app.run(host='0.0.0.0', port=5000, debug=True)