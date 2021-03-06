const db = require("../storage/user");

async function collect(request, response) {
  try {
    let rows = await db.getUsers();
    response.status(201).json({ message: "successful query", rows });
  } catch (err) {
    response.status(500).json({
      message: "could not find users",
      error: err.toString(),
    });
  }
}
async function get(request, response) {
  const id = parseInt(request.params.id);
  try {
    let rows = await db.getUser(id);
    response.status(201).json({ message: "successful query", rows });
  } catch (err) {
    response.status(500).json({
      message: "could not find user",
      error: err.toString(),
    });
  }
}

function update(request, response) {
  const id = parseInt(request.params.id);
  const user = request.body;
  try {
    db.updateUser(id, user);
    response.status(201).json({
      message: "updated user successfully",
    });
  } catch (err) {
    response.status(500).json({
      message: "could not update user",
      error: err.toString(),
    });
  }
}

module.exports = {
  collect,
  get,
  update,
};
