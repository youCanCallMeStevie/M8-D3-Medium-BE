const express = require("express")
const AuthorModel = require("../schemas/authorsSchema")

exports.registerController = async (req, res, next) => {
    try {
      const newUser = new AuthorModel(req.body)
      const { _id } = await newUser.save()
  
      res.status(201).send(_id)
    } catch (error) {
      next(error)
    }
  }