export async function POST(req) {
    try {
      // Parse the JSON request body
      const body = await req.json();
      const { email } = body;
  
      // Validate email
      if (!email) {
        return Response.json({ error: 'Email is required.' }, { status: 400 });
      }
  
      const webhookUrl = 'https://hook.eu1.make.com/6vzr4m54mq3205xm0obuc53imq846k03'; // Replace with your actual webhook URL

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        return Response.json({ message: 'Data sent to webhook successfully' });
      } else {
        return Response.json({ error: 'Webhook call failed' });
      }
   
    } catch (error) {
      console.error('Error processing webhook:', error);
      return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }
  