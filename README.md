# Archivista Test

This is a  React.js + Next.js 14 app  with the design to render a records in list or cards and allow to check the details for each of them

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have Node.js (upper than v18) and npm installed on your machine.

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- npm: [https://www.npmjs.com/](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jorgeemherrera/archivista-test
   ```
2. Navigate to the project directory:

   ```bash
   cd archivista-test
   ```

3. Install dependencies:

   check the version of node with node -v or nvm list 

   ```bash
   nvm use 18 -> use minimum Node.js v18.x.x version
   ```

   Next install dependencies

   ```bash
   npm install
   ```
### Running the App

Run the app in development mode:

   ```bash
   npm run dev
   Open [localhost:3000](http://localhost:3000) on your browser to view the app.
   ```

### Running Unit Tests

Run the unit tests using:

   ```bash
   npm run test
   ``` 
### Usage

- You can search a record by title, status or date.
- You can click in the right icons to change the view from list to card view
- You can select one of them in the list/card view and go to detail page of each one
- In the navbar you can switch between **Light/Dark** theme

   Vercel App deploy
   Open [archivista-test.vercel.app](https://archivista-test.vercel.app/) on your browser to view the app on deploy.

### Project Structure

The project is structured as follows:

- **src/:** Contains the source code.
- **components/:** React components.
- **api/:** data.json local file mocking an API.
- **interfaces/:** Interfaces for props of the components.
- **Layout.tsx:** Main file where is the `<Navbar>` with the `{children}` prop to render `Page.tsx` .
- **Page.tsx:** File where is used the `<Searchbar>` and the records in **List** and **Card** view
- **[id]:** folder that have the **layout.tsx** and **lage.tsx** files to make work the App route from Next.js for each detail page record
### Customization

Feel free to customize the app to suit your needs. You can modify the available items, change, and styles based on your preferences.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

### License

This project is licensed under the MIT License.
