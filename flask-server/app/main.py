from flask import Flask, Response, jsonify, make_response, request, send_file
from pprint import pprint
from io import BytesIO
from PIL import Image, ImageDraw, ImageFont

app = Flask(__name__)
font = ImageFont.truetype("ArianaVioleta-dz2K.ttf", size=72)

@app.get("/")
def hello_world():
    return Response("<h1>Welcome!</h1><p>Hello from Flask</p>", mimetype="text/html")

@app.get("/help")
def show_help():
    return Response("<h1>Help Center</h1>", status=200, mimetype="text/html")

@app.get("/add")
def add_numbers():
    a = int(request.args["first"])
    b = int(request.args["second"])
    f = request.args.get("fmt")
    return doAdd(a,b,f)

@app.get("/plus/<int:first>/<int:second>") 
def plus(first, second):
    return doAdd(first, second, "json")

@app.get("/plus/<int:first>/<int:second>/<fmt>") 
def plus_with_format(first, second, fmt):
    return doAdd(first, second, fmt)

@app.post("/add")
def post_add():
    pprint(vars(request))
    content_type = request.headers.get("Content-Type")
    print(f"Content type {content_type}")
    if content_type == "application/json":
        payload = request.get_json()
        a = int(payload["first"])
        b = int(payload["second"])
        fmt = payload["fmt"]
        return doAdd(a,b,fmt)
    elif content_type == "application/x-www-form-urlencoded":
        a = int(request.form["first"])
        b = int(request.form["second"])
        fmt = request.form["fmt"]
        return doAdd(a,b,fmt)
    elif content_type.startswith("multipart/form-data"):
        a = int(request.form["first"])
        b = int(request.form["second"])
        fmt = request.form["fmt"]
        # odd = (a + b) % 2 == 1;
        # return f"Multipart aD {a} + {b} id {a + b} ({'odd' if odd else 'even'})"
        return doAdd(a,b,fmt)
    else:
        return "Unknown"

def doAdd(a,b,fmt):
    sum = a + b
    is_odd = sum % 2 == 1
    if fmt == None:
        fmt = "text"
    if fmt == "text":
        return Response(f"Sum is {a+b}", mimetype="text/plain")
    elif fmt == "json":
        resp = {"sum": sum, "is_odd": is_odd}
        return make_response(jsonify(resp))
    elif fmt == "img":
        image = Image.new("RGB", size=(512, 128),color="green")
        draw = ImageDraw.Draw(image)
        draw.text((16, 25), text=f"{'Odd' if is_odd else 'Even'} sum {a+b} ", font=font)
        with BytesIO() as output:
            image.save(output, format="PNG")
            contents = output.getvalue()
        return Response(contents, mimetype='image/png')
    else:
        return "<h1>Unknown format</h1>"
        

if __name__ == "__main__":
    app.run(debug=True)