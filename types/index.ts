// Platform types
export type Platform = 
  | 'youtube'
  | 'patreon'
  | 'twitch'
  | 'kofi'
  | 'onlyfans'
  | 'substack'
  | 'stripe'
  | 'other';

// Payment data structure
export interface Payment {
  id: string;
  platform: Platform;
  amount: number;
  currency: string;
  date: Date;
  description?: string;
  status: 'pending' | 'completed' | 'failed';
}

// Creator profile
export interface Creator {
  id: string;
  name: string;
  email: string;
  connectedPlatforms: Platform[];
}

// Dashboard summary
export interface DashboardSummary {
  totalRevenue: number;
  revenueByPlatform: Record<Platform, number>;
  recentPayments: Payment[];
  currency: string;
}
