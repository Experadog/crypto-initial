import React from "react";
import { CryptoContextProvider } from "./context/crypto-context";
import { AppLayout } from "./components/layout/AppLayout";

const App = () => {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
};

export default App;




// Здравствуйте! Прошу рассмотреть моё резюме на роль фронтенд-разработчика в вашей компании.

// Краткое содержание:

// Опыт работы: 2 года
// Основные компетенции: JavaScript, React, Redux, TypeScript, Next.js, HTML5/CSS3, SASS, Tailwind CSS, Chakra UI, Axios
// Система контроля версий: Git
// Опыт создания адаптивных и кроссбраузерных интерфейсов
// ТГ для связи: https://t.me/experadog