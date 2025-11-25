# Script API

У Leet Client есть мощный API скриптов.

Он даёт возможность делать абсолютно всё что желает пользователь в рамках кода Minecraft, включая создание:
- своих обходов и модулей
- своих режимов ротации или резольверов
- дополнений к функционалу клиента

## Подготовка

Берём вот [отсюда](https://github.com/LEETCLIENT/scripts-template) файлы `leet.d.ts` и `jsconfig.json`, и копируем их в `C:\LEET\scripts`.

Запускаем [Visual Studio Code](https://code.visualstudio.com) или любой другой понравившийся редактор кода в папке со скриптами.

## Ваш первый скрипт

Создаём в папке скриптов файл, назовите как хотите, тут будем использовать `hello.js`.

Как первый скрипт создадим модуль, который каждую секунду будет писать `Hello, world!` каждую секунду в чат, как своеобразный Hello world мира скриптов.

```js
register({
  name: 'Hello',
  category: Category.PLAYER,
  description: 'Говорим привет',
  authors: ['ваш ник'],
})
```

Используем функцию [register()](/scripts/register) чтобы зарегистрировать скрипт как модуль, который назовём `Hello`.

Модуль появится в категории `Player`. Список доступных категорий можно найти здесь: [Category](/scripts/Category).

### Ивенты

Ивент система Leet Client работает так:
- Каждый ивент даётся каждому включенному модулю,
- И уже сами модули фильтруют нужный тип ивента

Например:
```js
event => {
  if (event instanceof GameTick) {
    // onTick handler
  } else if (event instanceof Render2D) {
    // render hud
  }
  // ...
}
```

Добавим event handler:
```js
Events.set(event => {
  if (event instanceof GameTick) {
    // Мы хотим чтобы сообщение писалось каждую секунду
    // Поскольку 1 секунда = 20 тиков (в идеальной обстановке)
    // Значит мы проверяем чтобы "возраст" (age, в тиках) игрока был кратен 20 тикам
    if (mc.player.age % 20 == 0) {
      Client.send('Hello, world!')
    }
  }
})
```

### Результат
```js
register({
  name: 'Hello',
  category: Category.PLAYER,
  description: 'Говорим привет',
  authors: ['ваш ник'],
})

Events.set(event => {
  if (event instanceof GameTick) {
    if (mc.player.age % 20 == 0) {
      Client.send('Hello, world!')
    }
  }
})
```