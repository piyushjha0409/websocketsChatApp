import { MessageSquare, Zap, Shield, Users, Clock, Sparkles } from 'lucide-react'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <a className="flex items-center justify-center" href="#">
          <MessageSquare className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">ChatSync</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                    Real-time chat for the modern web
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Experience lightning-fast communication with our WebSocket-powered chat platform. Connect, collaborate,
                    and chat in real-time.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a href="/chat">
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-8 py-2 bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                      Get Started
                    </button>
                  </a>
                  <a href="#live-demo">
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-8 py-2 border border-white text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
              <div className="mx-auto flex items-center justify-center">
                <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-lg">
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                          <span className="flex h-full w-full items-center justify-center rounded-full bg-gray-100">A</span>
                        </span>
                        <div className="grid gap-1.5">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Alice</div>
                            <div className="text-xs text-gray-500">11:42</div>
                          </div>
                          <div className="rounded-lg bg-gray-100 p-2">
                            Hey! How's the new WebSocket integration coming along? 🚀
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                          <span className="flex h-full w-full items-center justify-center rounded-full bg-gray-100">B</span>
                        </span>
                        <div className="grid gap-1.5">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">Bob</div>
                            <div className="text-xs text-gray-500">11:43</div>
                          </div>
                          <div className="rounded-lg bg-gray-100 p-2">
                            It's working great! The real-time updates are super smooth. ✨
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need for seamless real-time communication
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-center space-y-4">
                <Zap className="h-12 w-12" />
                <h3 className="text-xl font-bold">Real-time WebSockets</h3>
                <p className="text-gray-500">
                  Lightning-fast message delivery with WebSocket technology for true real-time communication.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Shield className="h-12 w-12" />
                <h3 className="text-xl font-bold">Secure by Design</h3>
                <p className="text-gray-500">
                  End-to-end encryption and robust security measures to keep your conversations private.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Users className="h-12 w-12" />
                <h3 className="text-xl font-bold">Group Chat</h3>
                <p className="text-gray-500">
                  Create and manage group conversations with unlimited participants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100" id="pricing">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple Pricing</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the perfect plan for your needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="rounded-lg border bg-white p-6 shadow-lg">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-4xl font-bold">$0</p>
                  <p className="text-gray-500">Perfect for small teams</p>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Real-time chat</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Up to 10 users</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      <span>Basic features</span>
                    </li>
                  </ul>
                  <button className="rounded-md bg-black px-4 py-2 text-white hover:bg-black/90">Get Started</button>
                </div>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-lg">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-4xl font-bold">$29</p>
                  <p className="text-gray-500">Great for growing teams</p>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Real-time chat</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Unlimited users</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      <span>Advanced features</span>
                    </li>
                  </ul>
                  <button className="rounded-md bg-black px-4 py-2 text-white hover:bg-black/90">Get Started</button>
                </div>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-lg">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-4xl font-bold">Custom</p>
                  <p className="text-gray-500">For large organizations</p>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Real-time chat</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Unlimited users</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      <span>Custom features</span>
                    </li>
                  </ul>
                  <button className="rounded-md bg-black px-4 py-2 text-white hover:bg-black/90">Contact Sales</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to get started?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of teams already using our platform
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button className="rounded-md bg-black px-8 py-2 text-white hover:bg-black/90">
                  Get Started
                </button>
                <button className="rounded-md border border-gray-200 px-8 py-2 hover:bg-gray-100">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 ChatSync. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

