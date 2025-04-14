export type Database = {
    public: {
      Tables: {
        waitlist: {
          Row: WaitlistEntry;
          Insert: Omit<WaitlistEntry, 'id' | 'created_at'>;
          Update: Partial<Omit<WaitlistEntry, 'id' | 'created_at'>>;
        };
      };
    };
  };