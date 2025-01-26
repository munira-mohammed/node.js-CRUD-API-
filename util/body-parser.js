module.exports = async (request) => {
  return new Promise((resolve, reject) => {
    let body = "";
    
    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      if (!body) {
        reject(new Error("Empty body"));
        return;
      }

      try {
        const parsedBody = JSON.parse(body);
        resolve(parsedBody);
      } catch (err) {
        reject(new Error("Invalid JSON format"));
      }
    });

    request.on("error", (err) => {
      reject(err);
    });
  });
};
