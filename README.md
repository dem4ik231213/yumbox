# 🍱 YumBox — React + Vite + Tailwind

## Швидкий старт

```bash
# 1. Встанови залежності
npm install

# 2. Запусти dev сервер
npm run dev

# 3. Відкрий браузер
# http://localhost:5173
```

## Збірка для продакшн

```bash
npm run build
# Папка dist/ готова для деплою
```

## Деплой на Vercel (безкоштовно)

1. Зареєструйся на vercel.com
2. `npm i -g vercel`
3. `vercel` — і слідуй інструкціям

## Структура проекту

```
src/
├── components/
│   ├── Navbar.jsx      ← шапка + меню + кнопка кошика
│   ├── Hero.jsx        ← головний банер
│   ├── Catalog.jsx     ← сітка товарів
│   ├── ProductCard.jsx ← картка товару
│   ├── Cart.jsx        ← бічна панель кошика
│   └── Footer.jsx      ← підвал
├── data/
│   └── products.js     ← масив товарів (міняй тут)
├── App.jsx             ← головний компонент
└── index.css           ← глобальні стилі
```

## Як додати свої товари

Відкрий `src/data/products.js` і міняй масив:

```js
{
  id: 1,
  name: "Yumbox",
  description: "21 сет",
  weight: "1.2 кг",
  price: 799,
  oldPrice: 999,        // null якщо немає знижки
  image: "URL або /src/assets/photo.jpg",
  badge: "🔥 Хіт",    // null якщо не потрібен
}
```

## Як замінити картинки

Поклади свої фото в папку `src/assets/` і в products.js:
```js
image: "/src/assets/mybox.jpg"
```
