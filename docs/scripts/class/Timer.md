# Timer

```ts
declare interface Timer{
reset(): void
getTime(): number
reached(time: number, reset: boolean): boolean
}
```

## reset()
Сбрасывает таймер до текущего времени
## getTime(): number
Возвращает сколько миллисекунд прошло между reset() и текущим моментом времени
## reached(time, reset): boolean
Проверяет, прошло ли с последнего вызова reset(), `time` миллисекунд.
Если параметр `reset = true`, то если прошло `time` мс или больше, вызывает reset()