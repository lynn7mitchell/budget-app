module.exports = function (app) {
    const express = require("express");
    const db = require("../../models");
    const axios = require("axios");
    const passport = require('passport');
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
    const keys = require('../../config/keys')

    app.get("/users/test", passport.authenticate('jwt', { session: false }), (req, res) => {
        res.json({
            msg: "users routes works!"
        });
    });

    // GET ROUTE

    app.get('/api/user', passport.authenticate('jwt', {session: false}), (req, res)=>{

        db.User.findById(req.user.id)
        .then(user =>{
            if(user){
                res.status(200).json(user)
            }
        })
        .catch(err => console.log(err))

    })



    //Create new user POST ROUTE

    app.post('/api/user', (req, res) => {
        db.User.findOne({ email: req.body.email })
            .then(user => {
                if (user) {
                    return res.status(400).json({
                        email: 'This email already exists'
                    });
                } else {
                    const newUser = {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: req.body.password,
                        budgets: req.body.budgets,
                        spendingSoFar: req.body.spendingSoFar,
                        toSpendThisMonth: req.body.toSpendThisMonth
                    }
                    console.log(newUser)
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            // if (err) throw err;
                            newUser.password = hash;

                            db.User.create(newUser)
                                .then(user => {
                                    res.status(200).json({
                                        message: "User account successfully created.",
                                        userCreated: true
                                    })
                                })
                                .catch(err => console.log(err))
                        })
                    })
                }
            })






    })


    // LOGIN

    app.post('/api/user/login', (req, res) => {
        const { email, password } = req.body;
        console.log(req.body)
        db.User.findOne({ email: email })
            .then(user => {
                console.log("********************",user)
                if (!user) {
                    return res.status(404).json({ user: "User not found" })
                }
                // let currentUser = user.get()
                // TypeError: Cannot read property 'replace' of undefined
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (isMatch) {
                            console.log("bycrypt user", user._id)
                            db.User.findById(user._id)
                                .then(user => {
                                    console.log("###############", user)
                                    const payload = {
                                        id: user.id,
                                        email: user.email,
                                        firstName: user.firstName,
                                        lastName: user.lastName
                                    }
                                    jwt.sign(
                                        payload,
                                        keys.secretOrKey,
                                        { expiresIn: 3600 * 12 },
                                        (err, token) => {
                                            res.json({
                                                ...payload,
                                                success: true,
                                                token: `Bearer ${token}`
                                                // GOOD FOR 12 HOURS
                                            });
                                        }
                                    )

                                }).catch(err => console.log(err))
                        } else {
                            return res.status(400).json({
                                password: 'User password could not be validated'
                            })
                        }
                    }).catch(err => console.log(err))

            }).catch(err => console.log(err));


  
    })




    // PUT

    app.put('/api/user', passport.authenticate('jwt', { session: false }), (req, res) => {
        // make sure to send the entire object again or else it will delete
        //example: budgets has {food, housing, debt, etc...}
        //         if you only send budgets.food in req.body it will delete all the other budgets
        db.User.findByIdAndUpdate(req.user.id, {$set:req.body})
        .then(user => {
            res.status(200).json({
                message: "User account successfully created.",
                userCreated: true
            })
        })
        .catch(err => console.log(err))
        
    });

  // PUT Transactions

  app.put('/api/user/transactions', passport.authenticate('jwt', { session: false }), (req, res) => {
    // make sure to send the entire object again or else it will delete
    //example: budgets has {food, housing, debt, etc...}
    //         if you only send budgets.food in req.body it will delete all the other budgets
    db.User.findByIdAndUpdate(req.user.id, {$push: {transactions: req.body}})
    .then(user => {
        res.status(200).json({
            message: "Transaction added.",
            userCreated: true
        })
    })
    .catch(err => console.log(err))
    
});

// Put Budgets
app.put('/api/user/budgets', passport.authenticate('jwt', { session: false }), (req, res) => {
    // make sure to send the entire object again or else it will delete
    //example: budgets has {food, housing, debt, etc...}
    //         if you only send budgets.food in req.body it will delete all the other budgets
    db.User.findByIdAndUpdate(req.user.id, {$set: {budgets: req.body}})
    .then(user => {
        res.status(200).json({
            message: "budgets added.",
            userCreated: true
        })
    })
    .catch(err => console.log(err))
    
});




    // end
}