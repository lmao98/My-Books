const { User, Book_list } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const user = await User.findAll({
      attributes: ['firstName', 'lastName', 'email']
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}
const GetUserBookList = async (req, res) => {
  try {
    const userBookList = await Book_list.findAll({
      attributes: ['user_id', 'book_id', 'read']
    })
    res.send(userBookList)
  } catch (error) {
    throw error

  }
}

const GetProfile = async (req, res) => {
  try {
    const profile = await User.findAll({
      attributes: ['firstName', 'lastName'],
      include: [{
        model: Posts,
        through: { attributes: [] },
        attributes: ['body']
      }],
      where: {
        id: req.params.user_id
      },
    })
    res.send(profile)
  } catch (error) {
    throw error
  }
}


module.exports = {
  GetUsers,
  GetUserBookList,
  GetProfile
}