import { useState } from 'react';
import { useRouter } from 'next/router';

const PASSWORDS = {
  FullAccess: 'fullaccess2025',
  Redacted: 'redacted2025',
  Invited: 'invited2025',
};

const GROUP_ROUTES = {
  FullAccess: '/gated/fullaccess',
  Redacted: '/gated/redacted',
  Invited: '/gated/invited',
};

export default function GatedPage() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const found = Object.entries(PASSWORDS).find(
      ([group, pwd]) => input.trim() === pwd
    );
    if (found) {
      router.push(GROUP_ROUTES[found[0]]);
    } else {
      setError('Invalid password.');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <form onSubmit={handleSubmit} className="bg-white/10 p-8 rounded-lg shadow-md flex flex-col gap-4 w-80">
        <label htmlFor="password" className="text-white text-lg font-bold">Enter Access Password</label>
        <input
          id="password"
          type="password"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="px-4 py-2 rounded bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Unlock</button>
        {error && <div className="text-red-400 font-semibold text-center">{error}</div>}
      </form>
    </div>
  );
}
