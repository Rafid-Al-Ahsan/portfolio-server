const express = require('express')
const app = express()
const port = process.env.PORT || 5000
var cors = require('cors')

const projects = require('./data/projects.json')

//middleware
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/projects', (req,res) => {
    res.send(projects);
})

app.get('/projects/:id', (req,res) => {
    const id = req.params.id;
    const selectedProject = projects.find(project => project.id === id);
    res.send(selectedProject);
})