import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "mfa.gVGWI6NNqUQBB6YxsB2Qig9fQnJdl-vL-Lrszs8qVX1soFbGfdX-7sdMdxDorxM4iIhtzUM-4IHCgGHWkNto"
);

gateway.on("message", (m) => {
  if (m.channel_id === "452500568712413184") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      "https://discord.com/api/webhooks/899778542546616380/u_Amq6ACqSqKBZrcvhfCwg-m1X5UXN4oYIrclrTJvKGpTYJl1AvVfDpwZMyLeQNu7g3m",
      content
    );
  }
});