---
title: register
---

# function register(params)

Регистрирует модуль

```ts
register({
    name: "Hello",
    authors: ["aloweeed"],
    category: Category.PLAYER,
    description: "say hello"
})
```

## interface Register
- `name: string` - название модуля в ClickGUI - `"Hello"`
- `description?: string` (необязательное поле) - описание скрипта - `"пишет привет в чат"`
- `authors: string[]` - авторы скрипта - `["aloweeed"]`
- `category: Category` - категория модуля - `Category.PLAYER`
- `tags?: number[]` (необязательное поле) - теги модуля - `[0]`

```ts
declare interface Register {
    name: string
    authors: string[]
    category: Category
    tags?: number[]
    description?: string
}

declare function register(params: Register): void
```