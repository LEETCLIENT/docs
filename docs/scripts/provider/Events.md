# Events (EventProvider)

```ts
declare interface EventProvider {
    set(provider: (event: Event) => void): void
}
declare const Events: EventProvider;
```

## set(provider: (Event) => void)

Ставит event handler для скрипта.