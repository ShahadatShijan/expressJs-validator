const app = require("./app")
const port = 3039;




app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})