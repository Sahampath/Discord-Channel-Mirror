import express from "express"

const app = express();

app.get("/", (req,res) => {
  res.send("Bot is online");
});

app.listen(5000, () => console.log("lisrening to port 5000"));


import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "Your_Authorization_code"
);

gateway.on("message", (m) => {
  if (m.channel_id === "CHANNEL_ID") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      "WEBHOOKLINK",
      content
    );
  }
});
