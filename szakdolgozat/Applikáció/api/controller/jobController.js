const db = require("../storage/job");

async function getJobs(request, response) {
  try {
    let rows = await db.getJobs();
    response.status(201).json({ message: "lekerdezes sikeres", rows });
  } catch (err) {
    response.status(500).json({
      message: "could not find jobs",
      error: err.toString(),
    });
  }
}
async function getJob(request, response) {
  const id = parseInt(request.query.id);
  try {
    let rows = await db.getJob(id);
    response.status(201).json({ message: "lekerdezes sikeres", rows });
  } catch (err) {
    response.status(500).json({
      message: "could not find job",
      error: err.toString(),
    });
  }
}

function updateJob(request, response) {
  const id = parseInt(request.query.id);
  const job = request.body;
  try {
    db.updateJob(id, job);
    response.status(201).json({
      message: "updated job successfully",
    });
  } catch (err) {
    response.status(500).json({
      message: "could not update job",
      error: err.toString(),
    });
  }
}

module.exports = {
  getJobs,
  getJob,
  updateJob,
};
