# Module

```ts
declare interface Module {
    getName(): string
    isEnabled(): boolean
    getKey(): number
    getCategory(): Category
    getRawName(): string
}
```


## getName(): string
Возвращает локализованное (переведённое) имя модуля

## getRawName(): string
Возвращает сырое имя модуля, то которое было отправлено в [register](../function/register)

## getKey(): number
Возвращает код клавиши, на которую забинджен модуль, либо `-1` если бинда нет

## getCategory(): [Category](./Category)
Возвращает категорию модуля

## isEnabled(): boolean
Возвращает состояние модуля (включен / выключен)