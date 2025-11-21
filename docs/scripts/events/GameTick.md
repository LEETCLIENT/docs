# GameTick

Вызывается раз в 50мс

```ts
if (event instanceof GameTick) {
    if (mc.player.age % 10 == 0) {
        Client.send("Hello!");
    }
}
```