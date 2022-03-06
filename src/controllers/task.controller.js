import Task from "../models/Task";

export const renderTask = async (req, res) => {
  const tasks = await Task.find().lean();

  res.render('index', { tasks: tasks });
}

export const addTask = async (req, res) => {
  try {
    const task = Task(req.body);

    await task.save();

    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
}

export const updateTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);
  res.redirect('/');
}

export const renderTaskEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id).lean();
    res.render('edit', { task: task });
  } catch (error) {
    console.log(error);
  }
}

export const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
}

export const toggleDone = async (req, res) => {
  const { id } = req.params;

  // await Task.findByIdAndUpdate(id, {done: !req.body.done});

  const task = await Task.findById(id);

  task.done = !task.done;

  await task.save()

  res.redirect('/');
}