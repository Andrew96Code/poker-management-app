export interface PokerSession {
  id: string;
  userId: string;
  date: Date;
  gameType: string;
  stakes: string;
  buyIn: number;
  cashOut: number;
  location: string;
  notes?: string;
  duration: number; // in minutes
  createdAt: Date;
  updatedAt: Date;
}

export interface HandHistory {
  id: string;
  userId: string;
  sessionId?: string;
  pokerRoom: string;
  gameType: string;
  stakes: string;
  handData: string;
  importedAt: Date;
  playedAt?: Date;
} 