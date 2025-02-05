'use client';

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { addHandHistory } from '../firebase/db';

export default function HandHistory() {
  const [pokerRoom, setPokerRoom] = useState('');
  const [handData, setHandData] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      await addHandHistory(user.uid, {
        pokerRoom,
        handData,
        gameType: 'No Limit Hold\'em', // You might want to make this configurable
        stakes: '1/2', // You might want to make this configurable
        importedAt: new Date()
      });

      setSuccess('Hand history imported successfully!');
      setPokerRoom('');
      setHandData('');
    } catch (err) {
      setError('Failed to import hand history');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Import Hand History</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="pokerRoom" className="block text-sm font-medium text-gray-700">
            Poker Room
          </label>
          <select
            id="pokerRoom"
            value={pokerRoom}
            onChange={(e) => setPokerRoom(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select a poker room</option>
            <option value="PokerStars">PokerStars</option>
            <option value="GGPoker">GGPoker</option>
            <option value="WPN">WPN</option>
          </select>
        </div>

        <div>
          <label htmlFor="handData" className="block text-sm font-medium text-gray-700">
            Hand History Data
          </label>
          <textarea
            id="handData"
            value={handData}
            onChange={(e) => setHandData(e.target.value)}
            rows={10}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Importing...' : 'Import Hand History'}
        </button>
      </form>
    </div>
  );
} 