"use client";

import { useState, useRef, useEffect } from "react";
import type { CHAT_PROFILE_QUERYResult } from "@/sanity.types";
import { useSidebar } from "../ui/sidebar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { X, Send, Loader2, Briefcase, Code2, Box, User } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatProps {
  profile: CHAT_PROFILE_QUERYResult | null;
}

export function Chat({ profile }: ChatProps) {
  const { toggleSidebar } = useSidebar();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getGreeting = () => {
    if (!profile?.firstName) {
      return "Hi there! Ask me anything about my work, experience, or projects.";
    }

    const fullName = [profile.firstName, profile.lastName]
      .filter(Boolean)
      .join(" ");

    return `Hi! I'm ${fullName}. Ask me anything about my work, experience, or projects.`;
  };

  const starterPrompts = [
    {
      icon: Briefcase,
      label: "What's your experience?",
      prompt: "Tell me about your professional experience and previous roles",
    },
    {
      icon: Code2,
      label: "What skills do you have?",
      prompt: "What technologies and programming languages do you specialize in?",
    },
    {
      icon: Box,
      label: "What have you built?",
      prompt: "Show me some of your most interesting projects",
    },
    {
      icon: User,
      label: "Who are you?",
      prompt: "Tell me more about yourself and your background",
    },
  ];

  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || input.trim();
    if (!textToSend || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const conversationHistory = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: textToSend,
          conversationHistory,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      const data = await response.json();
      
      // Handle streaming response or direct response
      let assistantContent = "";
      if (data.stream) {
        // If streaming, we would handle it differently
        // For now, assume direct response
        assistantContent = data.message || data.response || data.content || "";
      } else {
        assistantContent = data.message || data.response || data.content || data.text || "";
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: assistantContent,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Sorry, I encountered an error: ${error instanceof Error ? error.message : "Unknown error"}. Please try again.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  const handlePromptClick = (prompt: string) => {
    sendMessage(prompt);
  };

  const showStarterScreen = messages.length === 0;

  return (
    <div className="flex flex-col h-full w-full bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">
          Chat with {profile?.firstName || "Me"}
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="h-8 w-8"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {showStarterScreen ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">{getGreeting()}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
              {starterPrompts.map((prompt) => {
                const Icon = prompt.icon;
                return (
                  <Button
                    key={prompt.label}
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-start text-left justify-start space-y-2 hover:bg-accent"
                    onClick={() => handlePromptClick(prompt.prompt)}
                  >
                    <Icon className="h-5 w-5 mb-1" />
                    <div>
                      <div className="font-medium">{prompt.label}</div>
                      <div className="text-sm text-muted-foreground">
                        {prompt.prompt}
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Disclaimer: This is my AI-powered twin. It may not be 100% accurate
              and should be verified for accuracy.
            </p>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="whitespace-pre-wrap wrap-break-word">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-3">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input */}
      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
