// Конфигурация компании
// Для создания клона для другой компании - просто измените данные в этом файле

export const companyConfig = {
  // Основная информация
  name: "ООО ВОЛГА-АВТО",
  slogan: "Торговля автомобилями",
  category: "Автосалон, торговля автомобилями",

  // Контакты
  phone: "+7 (934) 005-11-27",
  phoneLink: "+79340051127",
  email: "volga.avtogroups@mail.ru",
  website: "",

  // Адрес
  address: {
    full: "445015, Самарская область, г. Тольятти, Шлюзовая ул, д. 2, кв. 24",
    city: "Тольятти",
    region: "Самарская область",
    street: "Шлюзовая ул, д. 2, кв. 24",
    zipCode: "445015"
  },

  // Координаты на карте
  coordinates: {
    latitude: 53.465343,
    longitude: 49.535800,
    zoom: 17.13
  },

  // Рейтинг
  rating: {
    score: 4.8,
    totalReviews: 38,
    totalRatings: 78
  },

  // Логотип
  logo: {
    url: "/logo-light.png",
    alt: "ООО ВОЛГА-АВТО"
  },

  // График работы
  workingHours: {
    monday: "09:00 - 18:00",
    tuesday: "09:00 - 18:00",
    wednesday: "09:00 - 18:00",
    thursday: "09:00 - 18:00",
    friday: "09:00 - 18:00",
    saturday: "10:00 - 16:00",
    sunday: "Выходной"
  },

  // Дополнительные настройки
  settings: {
    showWhatsApp: false,
    showTelegram: false,
    telegramUsername: "",
    whatsappNumber: ""
  }
};

// Экспорт типа для TypeScript
export type CompanyConfig = typeof companyConfig;
