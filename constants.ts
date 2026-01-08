import { PromptData, Category } from './types';

/**
 * --- GUÍA DE EDICIÓN RÁPIDA ---
 * 
 * 1. CAMBIAR TÍTULOS: Edita las variables APP_TITLE y APP_SUBTITLE abajo.
 * 2. AGREGAR PROMPT: Copia un bloque {...} dentro de la lista PROMPTS y pégalo al final.
 * 3. CATEGORÍAS DISPONIBLES: EMAIL, SMS, FLOWS, SEGMENTATION, ANALYTICS
 */

// TÍTULO DE LA PÁGINA (Aparece en grande arriba)
export const APP_TITLE = "Klaviyo + GPT Prompt Hub";

// SUBTÍTULO O DESCRIPCIÓN CORTA
export const APP_SUBTITLE = "Librería oficial de prompts para Email Marketing & SMS.";

export const PROMPTS: PromptData[] = [
  {
    id: '1',
    title: 'Welcome Series Generator',
    shortDescription: 'Create a strategic 3-part welcome series structure for subscribers.',
    description: 'Detailed framework for a 3-email welcome flow including subject lines, preview text, key objectives, and suggested body copy strategies to engage new subscribers immediately.',
    content: `Act as a Klaviyo Email Marketing Specialist. Create a strategic outline for a 3-email Welcome Series flow for a [Industry/Niche] brand.

    For each email, provide:
    1. Subject Line (give 3 options with emojis)
    2. Preview Text
    3. Key Objective of the email
    4. Suggested Content/Body Copy summary
    5. Call to Action (CTA)
    
    The tone should be welcoming, professional, and persuasive.`,
    category: Category.FLOWS,
  },
  {
    id: '2',
    title: 'Abandoned Cart Recovery',
    shortDescription: 'Recover lost sales without being pushy or annoying.',
    description: 'High-converting copy designed to acknowledge the item, offer a slight incentive if needed, and drive checkout completion with urgency but empathy towards the customer.',
    content: `Write a high-converting Abandoned Cart email for Klaviyo. The product left in the cart is [Product Name].
    
    Constraints:
    - Tone: Helpful and urgent, but not pushy.
    - Structure: Acknowledge the item, offer a slight incentive (optional), and use a clear button.
    - Include a dynamic placeholder for {{ event.Items }} as a reminder.`,
    category: Category.EMAIL,
  },
  {
    id: '3',
    title: 'SMS Flash Sale Alert',
    shortDescription: 'Punchy, under-160-char texts for 24h flash sales.',
    description: 'Create 3 urgency-driven SMS variations under 160 characters, including link placeholders and required opt-out language, specifically designed for time-sensitive sales.',
    content: `Write 3 variations of an SMS campaign for a 24-hour Flash Sale.
    
    Requirements:
    - Under 160 characters.
    - Include placeholder for link [Link].
    - Include opt-out language 'Text STOP to opt out'.
    - Create a sense of urgency using FOMO (Fear Of Missing Out).`,
    category: Category.SMS,
  },
  {
    id: '4',
    title: 'VIP Segment Logic',
    shortDescription: 'Logic to identify and reward your best customers.',
    description: 'Define specific criteria for a VIP segment based on Lifetime Value (LTV), order count, and AOV to help you target and reward your most loyal spenders effectively.',
    content: `I need to create a VIP Segment in Klaviyo. Suggest 3 different sets of criteria I could use to define a "VIP Customer" for a fashion e-commerce brand. Consider metrics like:
    - Lifetime Value (LTV)
    - Number of Orders
    - Average Order Value (AOV)
    - Recent activity`,
    category: Category.SEGMENTATION,
  },
  {
    id: '5',
    title: 'Subject Line A/B Tester',
    shortDescription: 'Generate 5 variants to test and boost open rates.',
    description: 'Create 5 distinct subject line alternatives focusing on curiosity, urgency, and personalization to run effective A/B tests against your control and improve open rates.',
    content: `I have an email about [Topic]. The current subject line is: "[Current Subject Line]".
    
    Please generate 5 alternative subject lines to A/B test against this control. 
    Focus on different psychological triggers:
    1. Curiosity
    2. Benefit-driven
    3. Urgency
    4. Personalization
    5. Short & Punchy`,
    category: Category.EMAIL,
  },
  {
    id: '6',
    title: 'Monthly Report Summary',
    shortDescription: 'Summarize campaign metrics for stakeholders.',
    description: 'Analyze open rates, click rates, and revenue per recipient to generate a professional performance summary and actionable strategy recommendations for the next month.',
    content: `Act as a Data Analyst. I will provide you with the Open Rate, Click Rate, and Revenue per Recipient for my last 4 campaigns. 
    
    Please summarize the performance trends and provide 3 actionable recommendations for next month's strategy based on these metrics.`,
    category: Category.ANALYTICS,
  },
];