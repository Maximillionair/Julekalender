const User =  require('../models/user');
const index = (req, res) => {
    res.render("index");
}

const insertUser = async (req, res)=>{
        const body = req.body;
        console.log(body)
        try{
            const user = await User.create(body)
            if (user) {
                console.log('user created', user);
            } else {
                console.warn('user not inserted', user)
            }
        } catch (e) {
            console.error(e.message)
            res.send({'error':e.message})
        }
        
    }

module.exports = {
    index, insertUser
}