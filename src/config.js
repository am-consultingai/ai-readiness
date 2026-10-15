import { useLang } from './i18n.jsx'

// --- Contact configuration ---------------------------------------------------
export const SITE_URL = 'https://www.amconsultingai.com'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/avishay-meron/'
export const WHATSAPP_NUMBER = '972512997867'   // international format, digits only

const WA_TEXT = {
  he: 'שלום צוות AM Consulting\nאני מעוניין לשוחח על מוכנות הארגון שלנו ל-AI',
  en: 'Hi AM Consulting team,\nI’d like to talk about our organization’s AI readiness',
}
export const whatsappUrl = (lang = 'he') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_TEXT[lang] || WA_TEXT.he)}`

// Every "book a call with an expert" button opens WhatsApp with the opening message.
export const useBookUrl = () => whatsappUrl(useLang().lang)
