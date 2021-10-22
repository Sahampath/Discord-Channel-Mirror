import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "your authorization code"
);

gateway.on("message", (m) => {
  if (m.channel_id === "Channel ID") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      "Webhook Link",
      content
    );
  }
});
