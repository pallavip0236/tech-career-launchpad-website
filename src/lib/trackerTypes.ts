export interface TrackerItem {
  id: string;
  name: string;
  timestamp: number; // Using a number for Unix timestamp
  category: string;
  description?: string; // Optional description
}
