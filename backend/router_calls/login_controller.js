let Login = require('../login_model');


exports.saveLogin = (req, res) => {
    let login = new Login(req.body);
    login.save()
        .then(todo => {
            res.status(200).json({
                'login': 'login details  added successfully'
            });
        })
        .catch(err => {
            res.status(400).send('adding new login details failed');
        });
}

exports.getLoginCredentials = (req, res) => {
    Login.find((err, login) => {
        if (err) {
            console.log(err);
        } else {
            res.json(login);
        }
    });
}

exports.deleteLoginById = (req, res) =>{
    let id = req.params.id;
    Login.findByIdAndRemove(id, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                message: 'deleted'
            });
        }
    });
}

