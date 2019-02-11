const express = require('exress');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/client/dist`));

app.listen(PORT, () => {
  console.log(`App is listening on: ${PORT}`);
});