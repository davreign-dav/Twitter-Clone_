exports.requireLogin = (req, res, next) => {
    if (req.session && req.session.user) {
        return next();
    }
    else {
        return res.redirect('/login');
    }
}

exports.requireLogout = (req,res,next) =>{
    if(req.session && req.session.user){
        console.log("req",req.session.user);
        req.session.destroy((err) => {
            return res.redirect('/login') // will always fire after session is destroyed
          })
    }
}