const express = require('express')
const { JsonWebTokenError } = require('jsonwebtoken')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function login(req, res){
    try{
        console.log(req.body)
        const user = await User.findOne({email: req.body.email});
        if(!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if(!match) throw new Error();
        const token = createJWT(user)
        return res.json(token);
    } catch (error){
        res.status(400).json('bad cred')
    }
}

async function create(req, res){
    try{
        const user = await User.create(req.body);
        const token = createJWT(user)
        return res.json(token);
    } catch (error){
        res.status(400).json(error)
    }
    
    /*res.json({
        user : {
            name : req.body.name,
            email: req.body.email,
        }    
    })*/
}

function createJWT(user){
    return jwt.sign(
        {user}, 
        process.env.SECRET,
        {expiresIn: '24h'}
        );
}

function checkToken(req, res) {
    console.log('req.user', req.user);
    res.json(req.exp);
}

module.exports = {
    create,
    login,
    checkToken
}