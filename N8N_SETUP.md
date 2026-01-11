# N8N + Gemini Chat Setup Guide

This guide will help you set up n8n with Google Gemini for the chat feature.

## Prerequisites

1. An n8n instance (cloud or self-hosted)
2. A Google Gemini API key
3. Access to your n8n webhook URL

## Step 1: Get Google Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Get API Key"
3. Create a new API key or use an existing one
4. Copy the API key (you'll need it for n8n)

## Step 2: Create n8n Workflow

### Option A: Create via n8n UI

1. Log into your n8n instance
2. Create a new workflow
3. Add a **Webhook** node (Trigger):
   - Set method to `POST`
   - Set path to something like `/chat` (or leave default)
   - Enable "Response Mode" to "Using 'Respond to Webhook' Node"
   - Save the workflow and copy the webhook URL

4. Add a **Google Gemini** node:
   - Connect it after the Webhook node
   - Authenticate with your Gemini API key
   - Set the model (e.g., `gemini-1.5-pro` or `gemini-1.5-flash`)
   - Configure the prompt:
     ```
     You are an AI assistant representing {{ $json.firstName }} {{ $json.lastName }}.
     
     Context about the person:
     - Profile: {{ $json.profile }}
     - Conversation history: {{ $json.conversationHistory }}
     
     User message: {{ $json.message }}
     
     Respond naturally and helpfully as if you were this person.
     ```

5. Add a **Respond to Webhook** node:
   - Connect it after the Google Gemini node
   - Set the response body to:
     ```json
     {
       "message": "{{ $json.response }}"
     }
     ```

6. Save and activate the workflow

### Option B: Import Workflow JSON

You can import this workflow JSON directly into n8n:

```json
{
  "name": "Gemini Chat",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "chat",
        "responseMode": "responseNode",
        "options": {}
      },
      "id": "webhook",
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [250, 300],
      "webhookId": "chat-webhook"
    },
    {
      "parameters": {
        "authentication": "apiKey",
        "resource": "text",
        "operation": "generate",
        "modelId": "gemini-1.5-pro",
        "prompt": "=You are an AI assistant representing {{ $json.firstName }} {{ $json.lastName }}.\n\nContext about the person:\n- Profile: {{ JSON.stringify($json.profile) }}\n- Conversation history: {{ JSON.stringify($json.conversationHistory) }}\n\nUser message: {{ $json.message }}\n\nRespond naturally and helpfully as if you were this person.",
        "options": {
          "temperature": 0.7,
          "maxTokens": 1000
        }
      },
      "id": "gemini",
      "name": "Google Gemini",
      "type": "@n8n/n8n-nodes-langchain.googleGemini",
      "typeVersion": 1,
      "position": [450, 300],
      "credentials": {
        "googleGeminiApi": {
          "id": "1",
          "name": "Google Gemini API"
        }
      }
    },
    {
      "parameters": {
        "respondWith": "json",
        "responseBody": "={{ {\n  \"message\": $json.output || $json.text || $json.response\n} }}",
        "options": {}
      },
      "id": "respond",
      "name": "Respond to Webhook",
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1,
      "position": [650, 300]
    }
  ],
  "connections": {
    "Webhook": {
      "main": [[{ "node": "Google Gemini", "type": "main", "index": 0 }]]
    },
    "Google Gemini": {
      "main": [[{ "node": "Respond to Webhook", "type": "main", "index": 0 }]]
    }
  },
  "pinData": {}
}
```

## Step 3: Configure Environment Variables

Add the following to your `.env.local` file:

```env
# N8N Configuration
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/chat
```

Replace `https://your-n8n-instance.com/webhook/chat` with your actual n8n webhook URL.

## Step 4: Test the Integration

1. Start your Next.js development server:
   ```bash
   npm run dev
   ```

2. Navigate to your portfolio and open the chat
3. Send a test message
4. Check n8n workflow execution logs to verify it's working

## Troubleshooting

### Issue: 500 Internal Server Error
- Check that `N8N_WEBHOOK_URL` is set correctly in your `.env.local`
- Verify the n8n workflow is activated
- Check n8n execution logs for errors

### Issue: 401 Unauthorized
- Ensure you're authenticated with Clerk
- Check that the user is signed in

### Issue: Gemini not responding
- Verify your Gemini API key is correct
- Check the n8n node configuration
- Review n8n execution logs for Gemini API errors

### Issue: Wrong response format
- Ensure the "Respond to Webhook" node returns JSON with a `message` field
- Check the response mapping in n8n

## Advanced Configuration

### Adding Conversation Context

To improve responses, you can:
1. Fetch profile data from Sanity in n8n
2. Store conversation history in a database
3. Add system prompts based on the user's portfolio data

### Streaming Responses

For streaming responses, modify the API route to use Server-Sent Events (SSE) and update the n8n workflow to support streaming.

## Support

For more help:
- [n8n Documentation](https://docs.n8n.io/)
- [Google Gemini Documentation](https://ai.google.dev/docs)
- [n8n Community Forum](https://community.n8n.io/)
