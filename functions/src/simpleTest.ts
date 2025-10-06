import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

export const simpleTest = onRequest((request, response) => {
  logger.info("Simple test function called!");
  response.json({ 
    success: true, 
    message: "Hello from Cloud Functions!",
    timestamp: new Date().toISOString()
  });
});