# Laravel + React + Vite + Tailwind CSS

## Installation

### Prerequisite

-   Node JS
-   Composer
-   PHP

---

### Steps

#### Long Method

1. First! A Laravel Project.
2. Run the following command:

```
npm install
```

```
npm install --save-dev @vitejs/plugin-react react react-router-dom react-dom
```

3. Copy the file or replace the code of **'vite.config.js'** in Laravel Project

```
// vite.config.js

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
});
```

4. Copy the file or replace the code of **'resources/views/welcome.blade.php'** in Laravel Project

```
<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel React CRUD Application</title>
        @viteReactRefresh
        @vite(['resources/js/app.jsx'])
    </head>
    <body>
        <div id="root"></div>
        <script>
           window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
            ]); ?>
        </script>
    </body>
</html>
```

5. Add Tailwind CSS in Laravel Project

-   ## Run the following command:
    ```
    npm install -D tailwindcss postcss autoprefixer
    ```
    ```
    npx tailwindcss init -p
    ```
-   Copy the file or replace the code of **'tailwind.config.js'** in Laravel Project

```
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

-   Add the Tailwind directives to **'resources/css/app.css'**

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. For fix of 'Unable to directly navigate in webpage using URL (404 Not Found)'

-   Copy the file or replace the code of **'routes/web.php'** in Laravel Project

```
Route::get('{reactRoutes}', function () {
    return view('welcome');
})->where('reactRoutes', '^((?!api).)*$'); // Don't show api query
```

7. Run the following command to view the changes

-   To run Laravel Project

```
php artisan serve
```

-   To run React JS

```
npm run dev
```

---

#### Short Method

1. First! A Laravel Project.
2. Run the following command:

-   For React JS and Tailwind CSS

```
npm install
npm install --save-dev @vitejs/plugin-react react react-router-dom react-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Copy the following folder or files to your project:

-   resources (folder)
-   routes (folder)
-   tailwind.config.js (file)
-   vite.config.js

4. Run the following command to view the changes

-   To run Laravel Project

```
php artisan serve
```

-   To run React JS

```
npm run dev
```
