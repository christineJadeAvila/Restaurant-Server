import express from 'express'
import cors from 'cors'

// import your ROUTES below this comment
import productRoutes from "./routes/productRoutes.js"
// import your ROUTES above this comment

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/api', productRoutes)

app.listen(port, () => {
    console.log("listening on port 3000")
})
