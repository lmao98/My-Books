const { Book } = require('../models')

const GetBooks = async (req, res) => {
  try {
    const allBooks = await Book.findAll({
      attributes: ['book_id', 'author', 'published_date', 'book_link'],
      order: [['updatedAt', 'DESC']]
    })
    res.send(allBooks)
  } catch (error) {
    throw error
  }
}

const GetUserBooks = async (req, res) => {
  try {
    const userBooks = await Book.findAll({
      attributes: ['book_id', 'author', 'published_date', 'book_link'],
      order: [['updatedAt', 'DESC']],
      where: {
        user_id: req.params.user_id
      }
    })
    res.send(userBooks)
  } catch (error) {
    throw error
  }
}
const CreateBook = async (req, res) => {
  const user_id = parseInt(req.params.user_id)
  try {
    let buildBody = {
      user_id,
      ...req.body
    }
    const createBook = await Book.create(buildBody)
    res.send(createBook)
  } catch (error) {
    throw error
  }
}

const UpdateBook = async (req, res) => {
  try {
    let bookId = parseInt(req.params.book_id)
    const updateBook = await Book.update(req.body, {
      where: { id: bookId },
      returning: true
    })
    res.send(updateBook)
  } catch (error) {
    throw error
  }
}

const DeleteBook = async (req, res) => {
  try {

    let bookId = parseInt(req.params.book_id)
    await Book.destroy({ where: { id: bookId } })
    res.send({ message: `Your post, ${bookId}, was deleted` })
  } catch (error) {
    throw error
  }
}

const DeleteBookByUserId = async (req, res) => {
  let id = parseInt(req.params.book_id)
  let user_id = parseInt(req.params.user_id)
  await Book.destroy({
    where: {
      id,
      user_id
    }
  })
  res.send({ message: `Your post, ${id}, was deleted` })
}


module.exports = {
  GetBooks,
  GetUserBooks,
  CreateBook,
  UpdateBook,
  DeleteBook,
  DeleteBookByUserId
}