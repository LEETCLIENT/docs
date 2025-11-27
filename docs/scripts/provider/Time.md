# Time (TimeProvider)

```ts
declare interface TimeProvider{
create(): Timer
}
declare const Time: TimeProvider;
```

## create(): [Timer](/scripts/class/Timer)
Создаёт объект таймера.