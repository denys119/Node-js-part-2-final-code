const CONFIG = require('../config/config');
const checkApiKey = (req, res, next) => {
  const apiHeader = req.headers.api_key;
  console.log(req.headers);
  if (apiHeader !== CONFIG.API_KEY) {
    return res.status(400).json({ message: 'API key mismatch' });
  }
  next();
}

module.exports = checkApiKey;