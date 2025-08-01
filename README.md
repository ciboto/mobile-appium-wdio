# 📱 Appium + WebDriverIO + TypeScript - Mobile Automation Project

Este projeto é um exemplo completo de automação mobile para apps Android, usando:

- [WebDriverIO](https://webdriver.io/) (framework de testes)
- [Appium](https://appium.io/) (framework de automação mobile)
- [TypeScript](https://www.typescriptlang.org/) (tipagem e organização)
- [Mocha](https://mochajs.org/) (estrutura de testes)
- [Allure Reports](https://docs.qameta.io/allure/) (relatórios bonitos)
- Android Emulator (via Android Studio)

---

## 🧰 Pré-requisitos

| Ferramenta | Versão sugerida |
|------------|-----------------|
| Node.js    | 18+ ou 20+      |
| NPM        | 9+              |
| Appium     | 2.x             |
| Java       | 11+ (obrigatório para Appium) |
| Android Studio | Atualizado com SDK e Emulator configurado |

---

## 🧱 Instalação do Android Studio

1. Baixe o Android Studio: https://developer.android.com/studio
2. Instale os seguintes componentes:
   - Android SDK
   - Android SDK Platform Tools
   - Android Emulator
   - AVD Manager (para criar emuladores)
3. Crie um **emulador Android Virtual Device (AVD)**:
   - API Level: 30 ou superior (Android 11+)
   - Tipo: Pixel 4, Pixel 5 ou similar

---

## 🔧 Configuração do ambiente
1. Clone ou baixe este projeto:
```bash
git clone git@github.com:ciboto/mobile-appium-wdio.git
cd mobile-appium-wdio
```
2. Instale as dependências:
```bash
npm install
```
3. Instale o Appium e driver Android:
```bash
npm install -g appium
appium driver install uiautomator2
```
> Verifique se Appium está OK com: `appium -v`
4. Baixe o app de testes (APK):
- [Download sauce-demo.apk](https://github.com/saucelabs/sample-app-mobile/releases/download/2.7.1/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk)
- Salve o arquivo em: `./app/sauce-demo.apk`
---

## ▶️ Como rodar os testes
1. Inicie o emulador Android
- Via Android Studio → Device Manager
ou via terminal:
```bash
emulator -avd <nome-do-seu-emulador>
```
2. Inicie o Appium
```bash
appium
```
- Deixe esse terminal aberto.
3. Em outro terminal, execute os testes:
```bash
npm test
```
---
## 🗂️ Estrutura do Projeto
```bash
mobile-appium-wdio/
│
├── test/
│   ├── specs/                # Casos de teste (login, etc)
│   └── pageobjects/          # Page Object Model
├── app/                      # APK do app de testes
├── wdio.conf.ts              # Configuração do WebDriverIO
├── tsconfig.json             # Configuração do TypeScript
├── package.json              # Dependências e scripts
└── README.md                 # Este arquivo
```
---
## 🧪 Testes incluídos
- ❌ Login inválido → mostra erro
- ✅ Login válido → acessa tela de produtos

As seleções são feitas por `accessibilityId`, como `~test-Username`, `~test-LOGIN`.
---

## 📊 Gerar Relatório Allure 
Após rodar os testes:
```bash
npx allure generate allure-results --clean -o allure-report
npx allure open
```

## 🤖 Comandos úteis
| Comando                             | Descrição                                         |
|------------------------------------|--------------------------------------------------|
| `npm install`                      | Instala todas as dependências do projeto         |
| `npm test`                         | Executa todos os testes                          |
| `tsc --noEmit`                     | Verifica erros de TypeScript sem gerar arquivos  |
| `appium`                           | Inicia o servidor Appium                         |
| `appium driver install uiautomator2` | Instala o driver Android para Appium            |
| `appium driver list`              | Lista os drivers instalados no Appium            |
| `emulator -list-avds`              | Lista os emuladores Android disponíveis          |
| `emulator -avd <NOME_DO_EMULADOR>` | Inicia um emulador Android                       |
| `adb devices`                      | Lista os dispositivos/emuladores conectados      |
| `npx wdio config`                  | Gera um novo arquivo de configuração do WDIO     |
| `npx allure generate`              | Gera um relatório Allure                         |
| `npx allure open`                  | Abre o relatório Allure no navegador             |

## 📌 Observações
- Use um emulador com API >= 30 (Android 11+).
- Para rodar em dispositivo real, conecte via USB e use adb devices para verificar.
- Para rodar em CI (GitHub Actions), você pode usar BrowserStack, LambdaTest ou Firebase Test Lab.

