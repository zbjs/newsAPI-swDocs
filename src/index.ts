import app from "./app";

import "dotenv/config";

  // Start the Express server
const PORT = process.env.PORT || 3000;
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });