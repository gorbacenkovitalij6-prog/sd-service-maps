import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ООО "СД-Сервис" — Яндекс Карты',
  description: 'ООО "СД-Сервис", 214012, Смоленская область, г Смоленск, Ново-Московская ул, д. 2/8, офис 305 — отзывы, фото, время работы, телефон и адрес на карте',
  icons: {
    icon: [
      { url: '/yandex-icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/yandex-icon.svg',
    apple: '/apple-touch-icon.png',
  },
};

export default function MapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
