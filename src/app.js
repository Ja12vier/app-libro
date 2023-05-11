const cors= require ("cors")
const express= require ("express")
const helmet= require ("helmet")
const hpp= require ("hpp")
const morgan= require ("morgan")
const rateLimit= require ("express-rate-limit")
const xss= require ("xss-clean")

const app= express();
const limit=rateLimit({
  max:10000,
  windowMs: 60*60*1000,
  message: "too many request fro, thes IP, please try again in one hour!"
})
if(process.env.NODE_ENV==="developmen"){
  app.use(morgan("dev"))
}