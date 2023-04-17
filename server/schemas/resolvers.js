const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async () => {
      return User.findOne({ username });
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with that email");
      }
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { userId, authors, title, description }) => {
      const updatedUser = await User.findOneAndUpdate(
        {
          _id: userId,
        },
        {
          $addToSet: {
            savedBooks: { authors, description, title, bookId, image, link },
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    deleteBook: async (parent, { userId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $pull: { savedBooks: book._id },
          }
        );
      }
    },
  },
};
