import connectDB from "./db/index.db.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at PORT: ${process.env.PORT} `)
    })

    
})
.catch((err)=>{
    console.log("MONGO DB connection faield: ",err);
})

