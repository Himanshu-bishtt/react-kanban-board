import User from "../models/userModel.js";

export async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
}

export async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
}

export async function createUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ status: "success", data: { ticket: newUser } });
  } catch (err) {
    res.status(409).json({
      status: "fail",
      message: err.message,
    });
  }
}

export async function updateUser(req, res) {
  try {
    if (Object.keys(req.body).length === 0)
      throw new Error("Body cannot be empty");

    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
}

export async function deleteUser(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) throw new Error("User does not exist");
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
}
