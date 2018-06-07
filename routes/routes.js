var faker = require('faker');
var exec  = require('child_process').exec;
var passport = require('passport');

var appRouter = function(app){
    app.get('/',function(req,res){
        res.render('index',{title: 'Home'});
    });
    
    //Login
    app.post('/login',function(req,res,next){
        passport.authenticate('bearer',function(err,user){
            if(user){
                if(user.role === 'admin'){
                    return res.render('/adminTools');
                }
                else if(user.role === 'student'){
                    return res.render('/student');
                }
                else{
                    return res.render('/home');
                }
            }
            else
            {
                return res.render('/401');
            }
        });
    })
    
    
    app.get('/au',function(req,res){
        var child = exec("java -jar /home/gsantiago/rewind.jar",function(err,stdout,stderr){
            if(err!==null)
                res.status(400).send(err);
            else
            {
                res.status(200).send(stdout);
            }
        });
    })

    app.get('/auth',function(req,res){
        var child = exec("java -jar /home/WAPI/checkAuth.jar 'telcou.ec'",function(err,stdout,stderr){
            if(err!==null)
                res.status(400).send(err);
            else
            {
                var rs = JSON.parse(stdout);
                res.status(200).send(rs);
            }
        });
    })
}

module.exports = appRouter;