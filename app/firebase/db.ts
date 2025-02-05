import { 
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  getDocs,
  Timestamp,
  DocumentData
} from 'firebase/firestore';
import { db } from './config';
import { PokerSession, HandHistory } from '../types/poker';

// Sessions
export const addSession = async (userId: string, sessionData: Omit<PokerSession, 'id' | 'userId' | 'createdAt' | 'updatedAt'>) => {
  const sessionsRef = collection(db, 'sessions');
  const timestamp = Timestamp.now();
  
  const newSession = {
    ...sessionData,
    userId,
    createdAt: timestamp,
    updatedAt: timestamp,
    date: Timestamp.fromDate(sessionData.date)
  };

  const docRef = await addDoc(sessionsRef, newSession);
  return docRef.id;
};

export const updateSession = async (sessionId: string, sessionData: Partial<PokerSession>) => {
  const sessionRef = doc(db, 'sessions', sessionId);
  const timestamp = Timestamp.now();
  
  await updateDoc(sessionRef, {
    ...sessionData,
    updatedAt: timestamp
  });
};

export const deleteSession = async (sessionId: string) => {
  const sessionRef = doc(db, 'sessions', sessionId);
  await deleteDoc(sessionRef);
};

export const getUserSessions = async (userId: string) => {
  const sessionsRef = collection(db, 'sessions');
  const q = query(
    sessionsRef,
    where('userId', '==', userId),
    orderBy('date', 'desc')
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    date: doc.data().date.toDate(),
    createdAt: doc.data().createdAt.toDate(),
    updatedAt: doc.data().updatedAt.toDate()
  })) as PokerSession[];
};

// Hand Histories
export const addHandHistory = async (userId: string, handData: Omit<HandHistory, 'id' | 'userId' | 'importedAt'>) => {
  const handHistoriesRef = collection(db, 'handHistories');
  const timestamp = Timestamp.now();
  
  const newHandHistory = {
    ...handData,
    userId,
    importedAt: timestamp,
    playedAt: handData.playedAt ? Timestamp.fromDate(handData.playedAt) : null
  };

  const docRef = await addDoc(handHistoriesRef, newHandHistory);
  return docRef.id;
};

export const getUserHandHistories = async (userId: string) => {
  const handHistoriesRef = collection(db, 'handHistories');
  const q = query(
    handHistoriesRef,
    where('userId', '==', userId),
    orderBy('importedAt', 'desc')
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    importedAt: doc.data().importedAt.toDate(),
    playedAt: doc.data().playedAt?.toDate()
  })) as HandHistory[];
}; 