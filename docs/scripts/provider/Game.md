# Game (GameProvider)

```ts
declare interface GameProvider {
    getLocal(): Entity
    getTarget(): Entity
    getLastTarget(): Entity
    send(msg: string): void
    getServerPos(e: Entity): Vec3
    getServerRot(e: Entity): Vec2
    getPos(e: Entity): Vec3
}
declare const Game: GameProvider;
```

## getLocal(): Entity
Получает объект игрока (`mc.player`).
## getTarget(): Entity
Получает текущий таргет.
## getLastTarget(): Entity
Получает предыдущий таргет.
## send(msg: string)
Отправляет сообщение в чат.
## getServerPos(e: Entity): Vec3
Получает серверную (полностью без интерполяции) позицию данной сущности.
## getServerRot(e: Entity): Vec2
Получает серверную (полностью без интерполяции) ротацию (yaw, pitch) данной сущности.
## getPos(e: Entity): Vec3
Получает позицию данной сущности.