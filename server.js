const express = require('express');
const path = require('node:path');

const app = express();
const projectRoot = __dirname;
const viewsPath = path.join(projectRoot, 'views');
const port = Number(process.env.PORT) || 3000;

app.use(express.static(viewsPath));
app.use('/css', express.static(path.join(projectRoot, 'css')));
app.use('/images', express.static(path.join(projectRoot, 'images')));
app.use('/js', express.static(path.join(projectRoot, 'js')));

app.listen(port, () => {
  console.log(`Yugan Real Estate is running at http://localhost:${port}`);
});