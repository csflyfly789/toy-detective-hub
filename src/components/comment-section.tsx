"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, ThumbsUp, Reply } from "lucide-react";

interface Comment {
  id: string;
  author: string;
  email: string;
  content: string;
  timestamp: Date;
  likes: number;
  replies?: Comment[];
}

interface CommentSectionProps {
  postId: string;
}

// Mock initial comments data
const initialComments: { [key: string]: Comment[] } = {
  "1": [
    {
      id: "c1",
      author: "Sarah Thompson",
      email: "sarah@example.com",
      content: "Great article! I've been using the Molotow pen for about a year now and it's absolutely transformed my collection. The results on my old Dinky cars are amazing.",
      timestamp: new Date("2025-01-16T10:30:00"),
      likes: 5,
      replies: [
        {
          id: "r1",
          author: "Detective Mike",
          email: "mike@toydetectivehub.com",
          content: "Thanks Sarah! It really is a game-changer for restoration work. Have you tried it on any Corgi models?",
          timestamp: new Date("2025-01-16T14:15:00"),
          likes: 2
        }
      ]
    },
    {
      id: "c2",
      author: "Robert Chen",
      email: "robert@example.com",
      content: "Thanks for the detailed guide! Quick question - does this work well on plastic parts too, or just metal?",
      timestamp: new Date("2025-01-17T09:45:00"),
      likes: 3
    }
  ],
  "2": [
    {
      id: "c3",
      author: "Linda Rodriguez",
      email: "linda@example.com",
      content: "This is so interesting! I never realized there were so many factors affecting color variations. I have two identical Dinky models that are completely different shades of blue.",
      timestamp: new Date("2025-01-13T16:20:00"),
      likes: 4
    }
  ]
};

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments[postId] || []);
  const [newComment, setNewComment] = useState({
    author: "",
    email: "",
    content: ""
  });
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.author || !newComment.content) return;

    const comment: Comment = {
      id: `c${Date.now()}`,
      author: newComment.author,
      email: newComment.email,
      content: newComment.content,
      timestamp: new Date(),
      likes: 0
    };

    setComments([...comments, comment]);
    setNewComment({ author: "", email: "", content: "" });
  };

  const handleSubmitReply = (parentId: string) => {
    if (!replyContent.trim()) return;

    const reply: Comment = {
      id: `r${Date.now()}`,
      author: "Guest User",
      email: "",
      content: replyContent,
      timestamp: new Date(),
      likes: 0
    };

    setComments(comments.map(comment => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), reply]
        };
      }
      return comment;
    }));

    setReplyContent("");
    setReplyingTo(null);
  };

  const handleLike = (commentId: string, isReply: boolean = false, parentId?: string) => {
    if (isReply && parentId) {
      setComments(comments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies?.map(reply =>
              reply.id === commentId
                ? { ...reply, likes: reply.likes + 1 }
                : reply
            )
          };
        }
        return comment;
      }));
    } else {
      setComments(comments.map(comment =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      ));
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <MessageCircle className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">
          Comments ({comments.length})
        </h2>
      </div>

      {/* Comment Form */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Leave a Comment</h3>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Your Name *"
                value={newComment.author}
                onChange={(e) => setNewComment({...newComment, author: e.target.value})}
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={newComment.email}
                onChange={(e) => setNewComment({...newComment, email: e.target.value})}
              />
            </div>
            <Textarea
              placeholder="Share your thoughts about this article..."
              value={newComment.content}
              onChange={(e) => setNewComment({...newComment, content: e.target.value})}
              rows={4}
              required
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Post Comment
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <Card key={comment.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    {comment.author.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                    <span className="text-sm text-gray-500">
                      {formatDate(comment.timestamp)}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    {comment.content}
                  </p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleLike(comment.id)}
                      className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <ThumbsUp className="w-4 h-4" />
                      {comment.likes > 0 && <span>{comment.likes}</span>}
                    </button>
                    <button
                      onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                      className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <Reply className="w-4 h-4" />
                      Reply
                    </button>
                  </div>

                  {/* Reply Form */}
                  {replyingTo === comment.id && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <Textarea
                        placeholder="Write your reply..."
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        rows={3}
                        className="mb-3"
                      />
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleSubmitReply(comment.id)}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Post Reply
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setReplyingTo(null)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Replies */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className="mt-4 pl-4 border-l-2 border-gray-200">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="mb-4 last:mb-0">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="text-green-600 font-semibold text-sm">
                                {reply.author.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <h5 className="font-semibold text-gray-900 text-sm">
                                  {reply.author}
                                </h5>
                                <span className="text-xs text-gray-500">
                                  {formatDate(reply.timestamp)}
                                </span>
                              </div>
                              <p className="text-gray-700 text-sm mb-2">
                                {reply.content}
                              </p>
                              <button
                                onClick={() => handleLike(reply.id, true, comment.id)}
                                className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 transition-colors"
                              >
                                <ThumbsUp className="w-3 h-3" />
                                {reply.likes > 0 && <span>{reply.likes}</span>}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {comments.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No comments yet
            </h3>
            <p className="text-gray-600">
              Be the first to share your thoughts about this article!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
