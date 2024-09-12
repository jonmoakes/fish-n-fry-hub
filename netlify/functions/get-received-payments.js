import stripe from "stripe";

export async function handler(event, context) {
  const { stripeSecretKey, limit } = JSON.parse(event.body); // Default limit to 100

  if (!stripeSecretKey) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Secret key is required" }),
    };
  }

  const stripeClient = stripe(stripeSecretKey);

  try {
    let allPayments = [];
    let hasMore = true;
    let startingAfter = null;

    while (hasMore && allPayments.length < limit) {
      const response = await stripeClient.charges.list({
        limit: Math.min(500, limit - allPayments.length), // Fetch up to 500 or the remaining required
        ...(startingAfter ? { starting_after: startingAfter } : {}), // Include starting_after only if it has a value
      });

      allPayments = allPayments.concat(response.data);
      hasMore = response.has_more;

      if (hasMore) {
        startingAfter = response.data[response.data.length - 1].id; // Update pagination cursor
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(allPayments),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
