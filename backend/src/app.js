import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

let categories = ['successQuotes', 'perseveranceQuotes', 'happinessQuotes'];

let successQuotes = [
  {
    'quote': 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    'author': 'Winston S. Churchill'
  },
  {
    'quote': 'The way to get started is to quit talking and begin doing.',
    'author': 'Walt Disney'
  }
];

let perseveranceQuotes = [
  {
    'quote': 'It’s not that I’m so smart, it’s just that I stay with problems longer.',
    'author': 'Albert Einstein'
  },
  {
    'quote': 'Perseverance is failing 19 times and succeeding the 20th.',
    'author': 'Julie Andrews'
  }
];

let happinessQuotes = [
  {
    'quote': 'Happiness is not something ready made. It comes from your own actions.',
    'author': 'Dalai Lama'
  },
  {
    'quote': 'For every minute you are angry you lose sixty seconds of happiness.',
    'author': 'Ralph Waldo Emerson'
  }
];

let quotes = {successQuotes,perseveranceQuotes,happinessQuotes};



app.get("/", (req, res) => {
  res.json({ ok: true, msg: "Hello from Express inside a Dev Container!", name: "Pranaw Otthi" });
});

app.get("/health", (req, res) => {
  res.status(200).send("healthy");
});

app.get("/math/circle/:r", (req, res) => {
  try{
      let r = req.params["r"];
  if (isNaN(r)){
    res.json({"error": "Invalid radius. Please provide numeric values."});
  }
  res.json({ "area": 3.14 * r * r, "circumference": 3.14 * (2 * r) });
  }catch(error){
    res.json({"error": "Something went wrong; please try again."})
  }

});

app.get("/math/rectangle/:width/:height", (req, res) => {
  try{
  let width = req.params["width"];
  let height = req.params["height"];
  if (isNaN(width) || isNaN(height)){
    res.json({"error": "Invalid width or height. Please provide numeric values."});
  }
  res.json({ "area": width * height, "perimeter": (2 * width) + (2 * height) });
  }catch(error){
    res.json({"error": "Something went wrong; please try again."});
  }
});

app.get("/math/power/:base/:exponent", (req, res) => {
  try{
  let base = req.params["base"];
  let exponent = req.params["exponent"];
  let root = req.query["root"];
  if (isNaN(base) || isNaN(exponent)){
    res.json({"error": "Invalid base or exponent. Please provide numeric values."});
  }
  root ? res.json({ "result": base ** exponent, "root": Math.sqrt(base) }) : res.json({ "result": base ** exponent });
  }catch(error){
    res.json({"error": "Something went wrong; please try again."});
  }
});

app.get("/quotebook/categories",(req,res) => {
  let text = "";
  for(let i = 0;i<categories.length;i++){
    text += `A possible category is ${categories[i]}\n`;
  };
  res.type("text");
  res.send(text);
});

app.get("/quotebook/quote/:category",(req,res) => {
  let category = req.params["category"];
  let value = Math.floor(Math.random()*2);
  if (!quotes[category]){
    res.json({'error': `no category listed for ${category}`});
  }
  res.json(quotes[category][value]);
});



app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
