import { Router } from 'express';
import OpenAI from 'openai';

const router = Router();

// Check if OpenAI API key is provided
if (!process.env.OPENAI_API_KEY) {
  console.error('❌ OPENAI_API_KEY environment variable is not set!');
  console.error('Please create a .env file with your OpenAI API key.');
}

// Initialize OpenAI with your API key from environment variable
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  message: string;
  conversationHistory?: ChatMessage[];
}

// Chat endpoint
router.post('/', async (req, res) => {
  try {
    const { message, conversationHistory }: ChatRequest = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: 'Message is required'
      });
    }

    // Prepare conversation messages for OpenAI
    const messages = [
      {
        role: 'system' as const,
        content: 'You are WorkSpaceAI, an AI-powered unified work assistant designed to improve productivity by summarizing emails, documents, and pull requests, and by answering work-related questions. You act as a professional, intelligent, and concise assistant.'
      },
      // Add conversation history if provided
      ...(conversationHistory || []).map((msg: ChatMessage) => ({
        role: msg.role,
        content: msg.content
      })),
      // Add current user message
      {
        role: 'user' as const,
        content: message
      }
    ];

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      max_tokens: 1000,
      temperature: 0.7,
      stream: false
    });

    const response = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    res.json({
      success: true,
      data: {
        response: response,
        model: completion.model,
        usage: completion.usage
      }
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
