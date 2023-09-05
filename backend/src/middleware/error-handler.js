const errorHandler  =(err,req,res,next)=>{
    const customError = {
        message:err.message || "Something went wrong",
        statusCode:err.statusCode || 500
    }
    if(err.name === 'CastError'){
        customError.message = `Invalid value`
    }
    res.status(customError.statusCode).send({msg:customError.message})
}

module.exports = errorHandler;