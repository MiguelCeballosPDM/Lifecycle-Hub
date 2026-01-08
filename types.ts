export enum Category {
  // Removed 'ALL' to avoid duplicate dropdown entries. Logic is handled in components.
  EMAIL = 'Email Campaigns',
  SMS = 'SMS Marketing',
  FLOWS = 'Flows & Automation',
  SEGMENTATION = 'Segmentation',
  ANALYTICS = 'Reporting & Analytics'
}

export interface PromptData {
  id: string;
  title: string;
  shortDescription: string; // New field for the card view (approx 70 chars)
  description: string; // Long description for the modal view (approx 180 chars)
  content: string; // The actual prompt text
  category: Category;
  tags?: string[];
}