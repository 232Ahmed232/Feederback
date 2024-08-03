const express = require("express")
require("dotenv").config()

const path = require("path")
const connectDb = require("./utils/db.js")
const app = express()

const authRoute = require("./router/auth_router.js")
const contactRoute = require("./router/contact_route.js")
const itemRouter = require("./router/item_route.js")

const errorMiddlewear = require("./middlewears/error_middlewear.js")
const cors = require("cors")


const corsOption = {
    origin:"http://localhost:5173",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credential:true
}

app.use(cors(corsOption))

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "feeder-main", "dist")));
    res.sendFile(path.resolve(__dirname, "feeder-main", "dist", "index.html"));
  });

app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/contact", contactRoute)
app.use("/api/template",itemRouter)


app.use(errorMiddlewear)
connectDb().then(() => {
    app.listen(3000, () => { console.log("server is running"); })
})