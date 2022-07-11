const express = require("express");
const request = require("request-promise");

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = "3299681d99e8cc569222bcbb3cbdddb9";
const baseUrl = `https://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get("/", (req, res) => {
  res.send([
    "Universities",
    {
      ID: 1,
      Name: "University of British Columbia",
      Location: "Canada, Manitoba",
    },
    { ID: 2, Name: "Stanford University", Location: "Usa, Winnipeg" },
  ]);
});

//Get product Details
// app.get("/products/:productId", async (req, res) => {
//   const { productId } = req.params;

//   try {
//     const response = await request(
//       `${baseUrl}&url=https://www.amazon.com/dp/productId`
//     );

//     res.json(JSON.parse(response));
//   } catch (error) {
//     res.json(error);
//   }
// });

//Get product Reviews
// app.get("/products/:productId/reviews", async (req, res) => {
//   const { productId } = req.params;

//   try {
//     const response = await request(
//       `${baseUrl}&url=https://www.amazon.com/product-review/productId`
//     );

//     res.json(JSON.parse(response));
//   } catch (error) {
//     res.json(error);
//   }
// });

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
