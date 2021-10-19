import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "mfa.gVGWI6NNqUQBB6YxsB2Qig9fQnJdl-vL-Lrszs8qVX1soFbGfdX-7sdMdxDorxM4iIhtzUM-4IHCgGHWkNto"
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
