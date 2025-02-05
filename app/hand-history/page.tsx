'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

const POKER_SITES = [
  'PokerStars',
  'GGPoker',
  'WPN',
  'PartyPoker',
  'Winamax',
  '888poker',
];

export default function HandHistory() {
  const [formData, setFormData] = useState({
    site: '',
    handHistory: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement hand history import logic
      console.log('Importing hand history:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      alert('Hand history imported successfully!');
    } catch (error) {
      console.error('Error importing hand history:', error);
      alert('Error importing hand history. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Hand History Import
      </h1>

      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              label="Poker Site"
              id="site"
              list="poker-sites"
              value={formData.site}
              onChange={(e) => setFormData({ ...formData, site: e.target.value })}
              placeholder="Select or type poker site"
              fullWidth
            />
            <datalist id="poker-sites">
              {POKER_SITES.map((site) => (
                <option key={site} value={site} />
              ))}
            </datalist>
          </div>

          <div>
            <Textarea
              label="Hand History"
              id="handHistory"
              value={formData.handHistory}
              onChange={(e) => setFormData({ ...formData, handHistory: e.target.value })}
              placeholder="Paste your hand history here..."
              fullWidth
            />
          </div>

          <Button
            type="submit"
            isLoading={isSubmitting}
            disabled={!formData.site || !formData.handHistory}
            fullWidth
          >
            Import Hand History
          </Button>
        </form>
      </Card>
    </div>
  );
} 