import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
      alert("Please fill out all fields");
      return;
    }

    alert(`Thank you, ${name}! Message sent.`);
    setName('');
    setMessage('');
  };

  return (
    <section className="my-12 text-amber-400">

      {/* Gradient Title */}
      <h2 className="text-3xl font-extrabold tracking-wide mb-6
        bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600
        bg-clip-text text-transparent">
        Contact
      </h2>

      {/* Card */}
      <div className="bg-red-950/40 border border-amber-800 rounded-xl p-6 shadow-xl
  hover:shadow-amber-500/20 transition-all duration-300 backdrop-blur-sm">

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name Input */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-black/70 border border-amber-800
              text-amber-200 placeholder-amber-600
              focus:outline-none focus:ring-2 focus:ring-amber-500
              transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Message Input */}
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-black/70 border border-amber-800
              text-amber-200 placeholder-amber-600 h-32
              focus:outline-none focus:ring-2 focus:ring-amber-500
              transition"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Button */}
          <button
            type="submit"
            className="px-6 py-2 rounded-lg font-medium text-amber-500
              bg-gradient-to-r from-yellow-900 to-yellow-950
              border border-amber-800
              hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20
              active:scale-95 transition-all duration-200"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;