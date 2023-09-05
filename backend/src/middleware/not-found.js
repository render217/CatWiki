const {NotFound} = require('../errors')
const notFound = (req,res)=>{
    throw new NotFound("Page not found")
}

module.exports = notFound;