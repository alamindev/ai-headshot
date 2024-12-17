import Stripe from "stripe";

const stripe = new Stripe("sk_test_51OmIKGASvVieBJpKG2Rnm6o4MRgjWIsfTA9EoBDEJbHFKXYtCSuTHnSqrx5nsutTP5NC5MaVvbGpf3oHOTFj5EKe00tXRl5ihW");

export async function POST(req) {
  try {
    const { amount, currency } = await req.json();

 const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: { name: "Ai Headshots", description: "Professional headshot images" },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
     ui_mode: "embedded",
     allow_promotion_codes: true,
      return_url: `${req.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,
    });

    return Response.json({ clientSecret: session.client_secret });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
