# Angle

```ts
declare class Angle {
    constructor(yaw: number, pitch: number)
    yaw(yaw: number): void
    yaw(): number
    pitch(pitch: number): void
    pitch(): number
    toVector(): Vec3
}
```

## constructor(yaw: number, pitch: number)
Создаёт объект Angle с указанными yaw и pitch в градусах
## yaw(): number
Возвращает значение yaw
## pitch(): number
Возвращает значение pitch
## yaw(yaw: number)
Ставит значение yaw на указанное
## pitch(pitch: number)
Ставит значение pitch на указанное
## toVector(): [Vec3](./Vec3)
Создаёт вектор перемещения из объекта Angle
