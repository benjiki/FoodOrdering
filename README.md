# FoodOrdering

![React](https://img.shields.io/badge/-React-blue?logo=react&logoColor=white) ![React Native](https://img.shields.io/badge/-React Native-blue?logo=reactnative&logoColor=white) ![TypeScript](https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white)

## 📝 Description

FoodOrdering is a mobile application built with React Native, React, and TypeScript, designed to streamline the food ordering process. This application provides users with a convenient and intuitive way to browse menus, place orders, and manage their food deliveries directly from their mobile devices.

## ✨ Features

- 📱 Mobile


## 🛠️ Tech Stack

- ⚛️ React
- 📱 React Native
- 📜 TypeScript


## 📦 Key Dependencies

```
@expo/vector-icons: ^14.0.2
@react-navigation/native: ^6.0.2
expo: ~51.0.28
expo-font: ~12.0.9
expo-linking: ~6.3.1
expo-router: ~3.5.23
expo-splash-screen: ~0.27.5
expo-status-bar: ~1.12.1
expo-system-ui: ~3.0.7
expo-web-browser: ~13.0.3
react: 18.2.0
react-dom: 18.2.0
react-native: 0.74.5
react-native-reanimated: ~3.10.1
react-native-safe-area-context: 4.10.5
```

## 🚀 Run Commands

- **start**: `npm run start`
- **android**: `npm run android`
- **ios**: `npm run ios`
- **web**: `npm run web`
- **test**: `npm run test`


## 📁 Project Structure

```
.
├── app.json
├── assets
│   ├── data
│   │   ├── orders.ts
│   │   └── products.ts
│   ├── fonts
│   │   └── SpaceMono-Regular.ttf
│   └── images
│       ├── adaptive-icon.png
│       ├── favicon.png
│       ├── icon.png
│       └── splash.png
├── babel.config.js
├── package.json
├── src
│   ├── app
│   │   ├── (tabs)
│   │   │   ├── _layout.tsx
│   │   │   ├── index.tsx
│   │   │   ├── menu
│   │   │   │   ├── [id].tsx
│   │   │   │   ├── _layout.tsx
│   │   │   │   └── index.tsx
│   │   │   └── two.tsx
│   │   ├── +html.tsx
│   │   ├── +not-found.tsx
│   │   ├── _layout.tsx
│   │   ├── cart.tsx
│   │   └── modal.tsx
│   ├── components
│   │   ├── Button.tsx
│   │   ├── CartListItem.tsx
│   │   ├── EditScreenInfo.tsx
│   │   ├── ExternalLink.tsx
│   │   ├── ProductListItem.tsx
│   │   ├── StyledText.tsx
│   │   ├── Themed.tsx
│   │   ├── __tests__
│   │   │   └── StyledText-test.js
│   │   ├── useClientOnlyValue.ts
│   │   ├── useClientOnlyValue.web.ts
│   │   ├── useColorScheme.ts
│   │   └── useColorScheme.web.ts
│   ├── constants
│   │   └── Colors.ts
│   ├── providers
│   │   └── CartProvider.tsx
│   └── types.ts
└── tsconfig.json
```

## 🛠️ Development Setup

### Node.js/JavaScript Setup
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` or `yarn install`
3. Start development server: (Check scripts in `package.json`, e.g., `npm run dev`)


## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/benjiki/FoodOrdering.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.
