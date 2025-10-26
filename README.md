# Mercearia App

Um aplicativo de mercearia desenvolvido com React Native e Expo, que permite aos usuários navegar por categorias de produtos, visualizar histórico de compras e gerenciar seu carrinho de compras.

## Funcionalidades

- **Tela de Boas-Vindas**: Introdução ao app com navegação para o conteúdo principal.
- **Tela Inicial**: Exibe categorias de produtos e histórico de compras anteriores.
- **Tela de Busca**: Permite buscar produtos por categorias.
- **Tela de Lista**: Mostra a lista de compras atual com totais.
- **Tela do Carrinho**: Gerencia itens no carrinho de compras.

## Estrutura do Projeto

```
new_mercearia_app/
├── .gitignore                 # Arquivo para ignorar arquivos no Git.
├── App.js                     # Componente principal do app. Configura a navegação Stack.
├── app.json                   # Configurações do Expo.
├── index.js                   # Ponto de entrada do app.
├── package.json               # Dependências, scripts e metadados do projeto.
├── README.md                  # Documentação do projeto.
├── assets/                    # Pasta para imagens e ícones estáticos.
│   ├── adaptive-icon.png      # Ícone adaptativo para Expo.
│   ├── drinks.png             # Ícone para categoria "Bebidas".
│   ├── favicon.png            # Favicon para web.
│   ├── fruits.png             # Ícone para categoria "Frutas".
│   ├── grocery.png            # Ícone para categoria "Diversos".
│   ├── icon-home.png          # Ícone para aba "Início".
│   ├── icon-list.png          # Ícone para aba "Lista".
│   ├── icon-search.png        # Ícone para aba "Buscar".
│   ├── icon-Shopping-bag.png  # Ícone para aba "Carrinho".
│   ├── icon.png               # Ícone principal do app.
│   ├── main_image.png         # Imagem principal na tela de boas-vindas.
│   ├── map-pin.png            # Ícone de localização.
│   ├── meats.png              # Ícone para categoria "Açougue".
│   ├── splash-icon.png        # Ícone de splash screen.
│   └── user-profile.png       # Ícone de perfil de usuário.
└── src/                       # Código fonte principal.
    ├── components/            # Componentes reutilizáveis e dados mockados.
    │   ├── BottomTabNavigation.js  # Navegador de abas inferior.
    │   ├── data/                  # Subpasta para dados adicionais.
    │   │   └── MockData.js        # Dados simulados (categorias, compras, carrinho).
    │   └── screens/               # Telas do app.
    │       ├── CartScreen.js      # Tela do carrinho.
    │       ├── HomeScreen.js      # Tela inicial.
    │       ├── ListScreen.js      # Tela de lista de compras.
    │       ├── SearchScreen.js    # Tela de busca.
    │       └── WelcomeScreen.js   # Tela de boas-vindas.
```

## Como Executar

1. **Instalar dependências**:

   ```bash
   npm install
   ```

2. **Executar o app**:
   - Para Android:
     ```bash
     npm run android
     ```
   - Para iOS:
     ```bash
     npm run ios
     ```
   - Para Web:
     ```bash
     npm run web
     ```
   - Ou usar o Expo CLI:
     ```bash
     npm start
     ```

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile.
- **Expo**: Plataforma para desenvolvimento e build de apps React Native.
- **React Navigation**: Biblioteca para navegação entre telas.
- **JavaScript**: Linguagem de programação principal.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Abra uma issue ou envie um pull request.

## Licença

Este projeto é licenciado sob a MIT License.
