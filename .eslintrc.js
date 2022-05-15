module.exports = {
    root: true,
    env: {
        node: true
    },
    // Подключаем рекомендованные правила
    "extends": [
        "plugin:vue/recommended",
        'eslint:recommended',
        "@vue/typescript/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        project: ["./tsconfig.json"],
    },
    // Дополняем рекомендованные правила своими
    rules: {
        // Отключаем вывод в консоль для прода
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        // Отключаем дебаг для прода
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        // Отключаем for in для массивов
        "@typescript-eslint/no-for-in-array": "warn",
        // Не ставим await в return
        "no-return-await": "warn",
        // Никаких any
        "@typescript-eslint/no-explicit-any": "warn",
        // Настраиваем отступы
        "indent": ["warn", 4],
        // Нет лишним пробелам
        "no-multi-spaces": "warn",
        // Пробелы перед/после ключевых слов
        "keyword-spacing": [2, {"before": true, "after": true}],
        // Проверка типов при сложении
        "@typescript-eslint/restrict-plus-operands": "warn",
        // Сравнение через тройное равно
        "eqeqeq": "warn",
        // Длинна строки кода
        "max-len": ["warn", { "code": 160 }],
        // Предупреждаем о забытых await
        "require-await": "warn",
        // Предупреждаем о забытых фигурных скобках
        "curly": "warn",
        // Максимальное количество классов в файле
        "max-classes-per-file": ["warn", 2],
        // Двойные кавычки
        "quotes": ["warn", "double"],
        // Проверка точек с запятой
        "semi": ["warn", "always"]
    }
}
