import './App.css';
import { createMuiTheme, Typography } from '@material-ui/core';
import { Gallery } from "./components/Gallery.jsx";
import axios from 'axios';


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
const imgPath = "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/fruit-images.json";
const descriptionPath = "https://www.fruityvice.com/api/fruit/"

const config = {
  "headers": { 
    'x-apikey': '59a7ad19f5a9fa0808f11931',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }
}

function getData() {
  var images = [
    "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/apple.png",
    "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/apricot.png",
    "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/banana.png",
    "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/blueberry.png",
    "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/cherry.png",
    "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/guava.png",
    "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/lemon.png",
    "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/mango.png",
    "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/orange.png",
    "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/pear.png",
    "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/pineapple.png",
    "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/raspberry.png",
    "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/strawberry.png",
    "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/tomato.png",
    "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/watermelon.png"
  ];
  axios.get("https://one-valley-swec-hallenge-nkoar4ngg-sandeepmukh.vercel.app/api/imgs", config)
    .then(function (response) {
      images = response;
    })
    .catch ((e) =>  {
      console.log(e);
    })
  var facts, name;
  var dataObj = {};
  images.forEach(img => {
    name = img.slice(img.indexOf("ew/")+3, img.indexOf(".png"))
    facts = {
      "genus": "Malus",
      "name": "Apple",
      "id": 6,
      "family": "Rosaceae",
      "order": "Rosales",
      "nutritions": {
          "carbohydrates": 11.4,
          "protein": 0.3,
          "fat": 0.4,
          "calories": 52,
          "sugar": 10.3
      }
  }
    axios.post("https://one-valley-swec-hallenge-nkoar4ngg-sandeepmukh.vercel.app/api/getFruit", {"name":name}, config)
    .then((response) => {
      facts = response;
    })
    .catch ((e) =>  {
      console.log(e);
    })
    dataObj[name] = {
      "image": img,
      "description": "The "+ name + " is of the " + facts.genus + " genus and the "+facts.family+
      " family. It has "+facts.nutritions.calories+" calories." 
      + (facts.nutritions.calories > 40 ? " A lot, right?" : " Not too many, right?")
    }
  });
  console.log(dataObj)
  return dataObj;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1" className={theme.typography}>
          Sandeep's Fruit Stand
        </Typography>
        <Gallery data={getData()} subtitle="the most fruit-like"/>
      </header>
    </div>
  );
}

export default App;
