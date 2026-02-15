import Link from "next/link";
import { notFound } from "next/navigation";

const blogPosts: { [key: string]: { title: string; content: string[]; category: string; date: string; gradient: string } } = {
  "1": {
    title: "The Art of Voice: Finding Your Unique Sound",
    category: "Voice Acting",
    date: "December 15, 2024",
    gradient: "from-purple-400 to-pink-400",
    content: [
      "Voice acting is more than just speaking into a microphone. It's about breathing life into words, creating characters that resonate with audiences, and conveying emotions that touch the soul.",
      "When I first started as a voice artist, I thought it was all about having a 'good voice.' But over the years, I've learned that your unique sound is something you develop, not something you're born with.",
      "Here are some lessons I've learned on my journey:",
      "1. **Know Your Range**: Experiment with different pitches, tones, and styles. Your voice is like an instrument - learn to play it.",
      "2. **Understand the Context**: The same words can mean different things depending on how you say them. Always understand the emotion and intent behind what you're speaking.",
      "3. **Practice Breathing**: Proper breath control is the foundation of good voice work. It gives you power, stamina, and control.",
      "4. **Be Authentic**: Don't try to imitate others. Your unique perspective and voice are your greatest strengths.",
      "5. **Listen More**: Great voice artists are great listeners first. Pay attention to how people speak, the rhythms of conversation, and the emotions behind words.",
      "Whether you're voicing commercials, narrating audiobooks, or bringing animated characters to life, remember: your voice has the power to move, inspire, and connect. Use it wisely."
    ]
  },
  "2": {
    title: "Behind the Mic: 20 Years of Radio Stories",
    category: "Radio Memories",
    date: "November 28, 2024",
    gradient: "from-pink-400 to-orange-400",
    content: [
      "Twenty years. That's how long I've spent behind the microphone, and yet, every day feels like a new adventure.",
      "I remember my first day at the radio station like it was yesterday. The overwhelming mix of excitement and nervousness, the glowing red 'ON AIR' sign, and the realization that my voice was about to reach thousands of listeners.",
      "Radio has taught me so much about connection. When you're speaking into that microphone, you're not just broadcasting - you're having intimate conversations with people in their homes, their cars, their most private moments.",
      "Some of my most memorable moments include:",
      "• The late-night caller who just needed someone to talk to",
      "• The excitement of interviewing artists I'd admired for years",
      "• The times when a song I chose perfectly matched what a listener was going through",
      "• The countless messages from people who said my voice got them through tough times",
      "Radio isn't just about playing music or hosting shows. It's about being a companion, a friend, and sometimes a lifeline. It's about creating moments of joy, reflection, and connection.",
      "As I continue this journey, I'm grateful for every listener, every story shared, and every moment behind the mic. Here's to many more years of making memories together."
    ]
  },
  "3": {
    title: "Bridging Cultures Through Translation",
    category: "Translation",
    date: "November 10, 2024",
    gradient: "from-orange-400 to-yellow-400",
    content: [
      "Language is more than just words - it's the bridge that connects hearts and minds across cultures. As a translator, I've had the privilege of building these bridges every day.",
      "Translation is often misunderstood as simply replacing words from one language to another. But true translation is about capturing the essence, the emotion, and the cultural context that makes communication meaningful.",
      "When I translate, I'm not just converting text - I'm ensuring that the message lands with the same impact and intention as the original. This means understanding cultural nuances, idioms, and the unspoken elements of communication.",
      "Some challenges I've faced and learned from:",
      "1. **Idioms Don't Translate Directly**: 'It's raining cats and dogs' would be quite confusing in many languages! Finding equivalent expressions is an art.",
      "2. **Cultural Context Matters**: What's polite in one culture might be offensive in another. A good translator navigates these sensitivities carefully.",
      "3. **Emotion Over Exactness**: Sometimes, capturing the feeling is more important than translating every word literally.",
      "4. **Continuous Learning**: Languages evolve, and staying updated with current usage is essential.",
      "Through translation, I've learned that despite our differences, human emotions and experiences are universal. We all love, laugh, cry, and hope - and translation helps us share these experiences across language barriers."
    ]
  },
  "4": {
    title: "Podcasting: The New Frontier of Storytelling",
    category: "Podcasting",
    date: "October 25, 2024",
    gradient: "from-purple-500 to-pink-500",
    content: [
      "When I launched my podcast, I didn't realize it would open up such a meaningful new chapter in my career.",
      "Podcasting is different from radio in so many ways. It's more intimate, more flexible, and allows for deeper dives into topics that matter. There's no time limit, no format restrictions - just authentic conversations.",
      "What I love most about podcasting:",
      "• **Intimacy**: Listeners often tell me they feel like they're sitting right there in the conversation",
      "• **Flexibility**: I can explore topics in depth, interview fascinating people, and experiment with different formats",
      "• **Global Reach**: My podcast reaches listeners in countries I never imagined",
      "• **Community Building**: The podcast has created a community of like-minded people who engage, share, and connect",
      "Starting a podcast wasn't easy. There was equipment to learn, editing to master, and the challenge of finding my voice in this new medium. But every challenge was worth it.",
      "If you're considering starting a podcast, my advice is simple: start. Your voice matters, your stories matter, and there's an audience waiting to hear what you have to say."
    ]
  },
  "5": {
    title: "The Power of Spoken Word",
    category: "Inspiration",
    date: "October 8, 2024",
    gradient: "from-pink-500 to-orange-500",
    content: [
      "Throughout my career as an RJ, voice artist, and podcast host, I've witnessed firsthand the incredible power of the spoken word.",
      "Words, when spoken with intention and emotion, can move mountains. They can comfort a grieving heart, inspire someone to chase their dreams, or bridge divides between people.",
      "I've received countless messages from listeners who told me that something I said changed their perspective, helped them through a difficult time, or gave them the courage to take action.",
      "The spoken word is powerful because:",
      "1. **It's Personal**: Hearing someone's voice creates a direct, intimate connection",
      "2. **It's Emotional**: Tone, pitch, and pacing convey emotion in ways text cannot",
      "3. **It's Memorable**: We remember how things were said, not just what was said",
      "4. **It's Impactful**: A well-delivered message can inspire action and change lives",
      "As someone whose life has been dedicated to the art of speaking, I'm constantly reminded of this responsibility. Every word we speak carries weight. Every conversation is an opportunity to uplift, inspire, and connect.",
      "Use your words wisely. Speak with intention. And never underestimate the impact your voice can have on others."
    ]
  },
  "6": {
    title: "From Studio to Home: Remote Recording Tips",
    category: "Voice Acting",
    date: "September 20, 2024",
    gradient: "from-orange-500 to-yellow-500",
    content: [
      "When the pandemic hit, like many voice artists, I had to quickly adapt to recording from home. What seemed challenging at first has become a new normal, and I've learned so much along the way.",
      "Remote recording doesn't mean compromising on quality. Here are some tips I've learned for creating professional voice work from home:",
      "1. **Find Your Space**: You don't need a professional studio, but you do need a quiet space. A closet full of clothes can actually be great for acoustics!",
      "2. **Invest in Basics**: A good microphone and headphones are essential. You don't need the most expensive gear, but avoid built-in laptop microphones.",
      "3. **Watch Your Background**: Even for audio, be mindful of background noise - AC, fans, street noise, or even a ticking clock can ruin a recording.",
      "4. **Get Comfortable**: Find a position that allows you to breathe properly and maintain consistent microphone distance.",
      "5. **Learn Basic Editing**: Knowing how to clean up your audio makes a huge difference. There are many free tools available.",
      "6. **Test, Test, Test**: Always do a test recording before the real thing. Check levels, sound quality, and make sure everything is working.",
      "The most important lesson I've learned is that creativity knows no boundaries. Whether you're in a professional studio or a makeshift home setup, what matters most is your voice and the message you're sharing."
    ]
  }
};

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Sudha Devarakonda
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors px-3 py-2 rounded-md font-medium">Home</Link>
                <Link href="/#timeline" className="text-gray-700 hover:text-purple-600 transition-colors px-3 py-2 rounded-md font-medium">Journey</Link>
                <Link href="/#podcasts" className="text-gray-700 hover:text-purple-600 transition-colors px-3 py-2 rounded-md font-medium">Podcasts</Link>
                <Link href="/blog" className="text-purple-600 px-3 py-2 rounded-md font-medium">Blog</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Post Content */}
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-purple-600 hover:text-pink-600 transition-colors mb-8 font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Header */}
          <div className={`h-64 bg-gradient-to-br ${post.gradient} rounded-2xl mb-8 flex items-center justify-center`}>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">{post.title}</h1>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-8 text-gray-600">
            <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full font-semibold text-sm">{post.category}</span>
            <span>{post.date}</span>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4">Share this post</h3>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors">
                  Facebook
                </button>
                <button className="px-6 py-2 bg-sky-500 text-white rounded-full font-semibold hover:bg-sky-600 transition-colors">
                  Twitter
                </button>
                <button className="px-6 py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors">
                  WhatsApp
                </button>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold mb-6">Comments</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">P</div>
                    <div>
                      <p className="font-semibold">Priya Sharma</p>
                      <p className="text-sm text-gray-500">2 days ago</p>
                    </div>
                  </div>
                  <p className="text-gray-700">This is such an inspiring post! Thank you for sharing your journey.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">R</div>
                    <div>
                      <p className="font-semibold">Rahul Verma</p>
                      <p className="text-sm text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Your voice has been a constant companion during my morning commutes. Keep up the amazing work!</p>
                </div>
              </div>

              {/* Comment Form */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Leave a Comment</h4>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <textarea
                    placeholder="Your Comment"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                  <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Sudha Devarakonda</h3>
              <p className="text-gray-400">RJ • Translator • Voice Artist</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/#timeline" className="text-gray-400 hover:text-white transition-colors">Journey</Link></li>
                <li><Link href="/#podcasts" className="text-gray-400 hover:text-white transition-colors">Podcasts</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  <span className="sr-only">Spotify</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Sudha Devarakonda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
