[Angle]: ../class/Angle
[Module]: ../class/Module
[Setting]: ../class/Setting

# Client (ClientProvider)

```ts
declare interface ClientProvider {
    getModules(): Module[]
    rotateTo(angle: Angle): void
    localRotation(): Angle
    rotation(): Angle
    settings(...settings: Setting): void
    traceEntity(vec: Angle, distance: number, entity: Entity, walls: boolean): boolean
}
```

## getModules(): [Module]\[\]
Возвращает все зарегистрированные на данный момент модули.

## rotateTo(angle: [Angle])
Поворачивает на один тик игрока на `angle`

## localRotation(): [Angle]
Возвращает ротацию игрока как `(mc.player.getYaw(), mc.player.getPitch())`

## rotation(): [Angle]
Возвращает текущую ротацию от RotationManager

## settings(...settings: [Setting])
Добавляет сеттинги в этот модуль

## traceEntity(vec: [Angle], distance: number, entity: Entity, walls: boolean): boolean
Делает рейтрейс от себя с ротацией `vec`, на макс. дистанцию `distance`, до бокса `entity`, игнорируя или включая `walls`