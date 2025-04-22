"use client"

import type React from "react"

// 移除 UI 组件导入，使用原生 HTML 元素
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { CheckCircle2 } from "lucide-react"

export function ContactForm() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-gradient-to-br from-[#2563eb] via-[#7c3aed] to-[#06b6d4] text-white">
              <h2 className="text-3xl font-medium mb-6">Get in Touch</h2>
              <p className="mb-6">
                Ready to experience how AI can transform your business? Contact us today to start the conversation.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    {/* 替换 SVG 为更简单的文本 */}
                    <span>@</span>
                  </div>
                  <span>support@tokenflows.ai</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    id="name"
                    placeholder="Your name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    placeholder="How can we help your business?"
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  ></textarea>
                </div>

                <button
                  className="w-full px-4 py-2 bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white rounded-md shadow-sm"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

