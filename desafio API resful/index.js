const express =  require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let productos = [
    {
       title: "Cerveza IPA",
       price: 350,
       thumbnail: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/andes%20ipa.jpg?alt=media&token=dc05d263-b038-4322-977b-0ce265c8a64d",
       id: 1
   },
   
      {
       title: "Cerveza RED",
       price: 300,
       thumbnail: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/andes%20roja.jpg?alt=media&token=432f65f2-27ad-4893-8dee-235637b262ed",
       id: 2
   },
     
     {
       title: "Cerveza HONEY",
       price: 300,
       thumbnail: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/honey.jpg?alt=media&token=996e450e-ba74-462c-abc3-84b4d560d1db",
       id: 3
   }
   ]

   
app.get('/api/productos',(req, res)=> {
    if(Object.entries(req.query).length > 0){
      res.json({
        result: 'obtuve una query',
       query: req.query
      })
    }
    else{
     res.json({
       result: 'no obtuve una query',
     })
    }
   })



   const PORT  = 8080;
   const server = app.listen(PORT, () => {
       console.log(`Server running on port ${PORT}`);
   }
   );
