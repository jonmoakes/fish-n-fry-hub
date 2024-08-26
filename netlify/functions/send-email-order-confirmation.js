import postmark from "postmark";
const client = new postmark.ServerClient(process.env.VITE_POSTMARK_API_KEY);

export const handler = async (event) => {
  const { email, name, orderDetails } = JSON.parse(event.body);
  // can only send to self in test mode.
  console.log("hi ", email, orderDetails);

  try {
    await client.sendEmailWithTemplate({
      From: process.env.VITE_APP_ADMIN_EMAIL,
      To: process.env.VITE_APP_ADMIN_EMAIL,
      TemplateAlias: "send-email-order-confirmation",
      TemplateModel: {
        product_url: "https://fishnfry-hub.netlify.app",
        product_name: "Fish 'n' Fry Hub",
        name,
        orderDetails,
      },
    });

    return {
      statusCode: 202,
    };
  } catch (error) {
    return {
      statusCode: 500,
    };
  }
};
