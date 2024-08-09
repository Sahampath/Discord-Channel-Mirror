import express from "express";
import selfcore from "selfcore";

const app = express();

// Express server setup
app.get("/", (req, res) => {
  res.send("🟢 Online");
});

// Start the server and listen on port 5000
app.listen(5000, () => console.log("Listening on port 5000"))
  .on('error', (err) => console.error("Error starting the server:", err));

const client = new selfcore();

// Initialize the gateway with the provided authorization code
const gateway = new selfcore.Gateway("Your Authorization Code");

// Event listener for new messages in the specified channel
gateway.on("message", (m) => {
  // Check if the message is from the desired channel
  if (m.channel_id === "CHANNEL_ID") {
    // Determine the content to send based on whether the message has text or embeds
    let content = m.content ? m.content : { embeds: m.embeds };

    // Send the message content to the specified webhook
    client.sendWebhook("WEBHOOKLINK", content)
      .catch(err => console.error("Error sending webhook:", err));
  }
});
