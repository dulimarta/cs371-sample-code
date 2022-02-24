# Running the server:

```bash
npm install
npx ts-node adder.ts
```

# Connecting to the server

## From a browser

http://localhost:9000/add?first=50&second=27&fmt=XXXX

where `XXXX` is one of the following

* `text` to get plain text response
* `enc` to get a urlencoded response
* `img` to get a PNG image response
* `json` to get a JSON response