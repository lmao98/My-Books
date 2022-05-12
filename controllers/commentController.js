const { Comment } = require('../models')

const GetComments = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      attributes: ['body', 'likes'],
      order: [['updatedAt', 'DESC']]
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const GetBookComments = async (req, res) => {
  try {
    const bookComments = await Comment.findAll({
      attributes: ['body', 'likes'],
      order: [['updatedAt', 'DESC']],
      where: {
        book_id: req.params.book_id
      }
    })
    res.send(bookComments)
  } catch (error) {
    throw error
  }
}

const AddComment = async (req, res) => {
  try {
    let bookId = parseInt(req.params.book_id)
    let userId = parseInt(req.params.user_id)
    let buildBody = {
      ...req.body,
      userId,
      bookId
    }
    const bookComment = await Comment.create({
      ...buildBody
    })
    res.send(bookComment)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetComments,
  GetBookComments,
  AddComment
}