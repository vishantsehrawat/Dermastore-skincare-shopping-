const jwt = require("jsonwebtoken")

const notesAuth = (req, res, next) => {
    const token = req.headers.authorization;
	// console.log("TCL: notesAuth -> token", token)
    
    var decoded = jwt.verify(token, 'masai');
    if(decoded){
        // indecoded we recieved user id so we will add it to our request body
        req.body.userId = decoded.userId;
        // console.log(decoded)
        next();
    }
    else{
        res.send({msg:"login First "})
    }
}

module.exports = notesAuth
