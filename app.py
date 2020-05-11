from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def top():
    return render_template("top.html")

def sp_info():
    return render_template("sp-info")

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
