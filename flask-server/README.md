The file `requirements.txt` lists all the required Python packages to run this sample

1. Install the required packaged

   ```bash
   pip install -r requirements.txt
   # OR: python -m pip install -r requirements.txt
   ```

2. Run the server

   ```bash
   python app/main.py
   # OR gunicorn wsgi:app
   ```

3. Open `http://localhost:NNNN` (use the port number printed from Step 2)

## Deployment to Heroku

The server app can be deployed to Heroku as a Web Server Gateway Interface (WSGI) app.
Hence the `gunicorn` dependency.
