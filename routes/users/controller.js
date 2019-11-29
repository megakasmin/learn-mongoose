const { Users } = require("../../models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Users.find({});

      res.status(200).json({ message: "Show data Users", data: result });
    } catch (error) {
      console.log(error);
    }
  }
};
