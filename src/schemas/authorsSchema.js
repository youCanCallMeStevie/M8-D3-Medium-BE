const { Schema, model } = require("mongoose")

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  
 username: {
      type: String,
      required: true,
    },
    password: { type: String, required: true, minlength: 8 },
  },
  {
    timestamps: true,
  }
);

const ArticleModel = model("Author", AuthorSchema)
module.exports = ArticleModel

