const express = require('express')
const app = express()

const PORT = process.env.port || 3000

app.use(express.json());

app.get('/api', (req, res) => {
  const { slack_name, track } = req.query;

  // Getting the current date and time
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const utcTime = currentDate.toISOString();
  const formattedUtcTime = utcTime.split('.')[0] + "Z";

  const response = {
    slack_name,
    current_day: currentDay,
    utc_time: formattedUtcTime,
    track,
    github_file_url: "https://github.com/tobey0x/stg_one/blob/master/app.js",
    github_repo_url: "https://github.com/tobey0x/stg_one.git",
    status_code: 200,
  };

  res.status(200)
    .json(response);

})


app.listen(PORT, () => {
  console.log(`Server is running successfully on ${PORT}`)
})