// app/i18n.ts
'use client';

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our website"
        }
      },
      hi: {
        translation: {
          welcome: "हमारी वेबसाइट पर आपका स्वागत है"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
