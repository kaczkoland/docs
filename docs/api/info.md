---
id: info
title: Start
sidebar_label: Start
---
:::info
Ta strona jest przeznaczona dla programistów, którzy chcą zintegrować swoją aplikację/stronę/bota discord itd. ze statystykami Kaczkolandu.
:::
## Gotowe biblioteki
NodeJS - [kaczkoland-wrapper](https://github.com/kaczkoland/kaczkoland-wrapper) (autor: [Aleks-1123](https://github.com/Aleks-1123))

Chcesz, abyśmy dodali Twoją bibliotekę tutaj? Otwórz [dyskusję](https://github.com/kaczkoland/api/discussions/categories/twoja-biblioteka-aplikacja-z-api) lub [skontaktuj się z nami na discordzie](https://discord.kaczkoland.pl).
## Aplikację/boty używające naszego API
[Krive Bot](https://krivebot.tk) - Bot Discord ([Dodaj](https://discord.com/oauth2/authorize?client_id=804694672806379521&scope=bot))

[Slacky](https://discord.com/oauth2/authorize?client_id=719830415615197204&scope=bot) - Bot Discord

Chcesz, abyśmy dodali Twojego bota/aplikację tutaj? Otwórz [dyskusję](https://github.com/kaczkoland/api/discussions/categories/twoja-biblioteka-aplikacja-z-api) lub [skontaktuj się z nami na discordzie](https://discord.kaczkoland.pl).

Boty Discord wymienione wyżej nie są zarządzane przez nas, nie odpowiadamy za ewentualne zniszczenia serwera. Najbezpieczniej jest nie dawać botowi uprawnień do wyrzucania, banowania, usuwania kanałów itd.
## Endpointy
Bazowy adres API to `https://api.kaczkoland.pl/`
### Statystyki
```http
GET /all
```
Zwraca wszystkich graczy i ich statystyki
#### Przykładowa odpowiedź
```javascript
[
  {
    "uuid":"01c92b95-dd5b-3136-b73d-ed19419f1eeb", 
    "time":"20210306T16:57:33.000Z",
    "username":"rkubapl",
    "player_kills":3,
    "deaths":10,
    "mob_kills":15,
    "mined_blocks":973,
    "mined_diamonds":6,
    "online_time":6156152,
    "placed_blocks":753,
    "crafted_items":0,
    "walked_cm":1783810,
    "money":73.89999999999999,
    "primary_rank":"wlasciciel",
    "sent_messages":451
   },
   {
    "uuid":"c4a97df1-de67-3660-8d5d-ef13bb311cc6",
    "time":"2021-03-06T17:44:56.000Z",
    "username":"Tomek130",
    "player_kills":0,
    "deaths":6,
    "mob_kills":224,
    "mined_blocks":6036,
    "mined_diamonds":2,
    "online_time":856685,
    "placed_blocks":3229,
    "crafted_items":7752,
    "walked_cm":1564207,
    "money":500,
    "primary_rank":"helper",
    "sent_messages":239
    }
]
```
### Lista zbanowanych graczy
```http
GET /bans
```
Zwraca wszystkich zbanowanych graczy
#### Przykładowa odpowiedź
```javascript
[
  {
    "expiration":1616008724374,
    "created_at":1615403924374,
    "reason":"wspolpraca z cheaterem",
    "target":"Steve",
    "source":"rkubapl"
  },
  {
    "expiration":-1,
    "created_at":1615404006620,
    "reason":"wspolpraca z cheaterem",
    "target":"Alex",
    "source":"rkubapl"
  }
]
```
Jeśli zawartośc atrybutu `expiration` jest -1, oznacza to pernamentną blokadę na konto.
### Lista graczy online
```http
GET /online
```
Zwraca wszystkich graczy online
#### Przykładowa odpowiedź
```javascript
["rkubapl", "MinecraftCiach"]
```
### Lista wyciszonych graczy
```http
GET /mutes
```
Zwraca wszystkich zbanowanych graczy
#### Przykładowa odpowiedź
```javascript
[
  {
    "expiration":1616008724374,
    "created_at":1615403924374,
    "reason":"wspolpraca z cheaterem",
    "target":"Alex",
    "source":"rkubapl",
    "type": "TEMP_MUTE"
  },
  {
    "expiration":-1,
    "created_at":1615404006620,
    "reason":"wspolpraca z cheaterem",
    "target":"Steve",
    "source":"rkubapl",
    "type": "MUTE"
   }
]
```
### Lista ostrzeżeń
```http
GET /warns
```
Zwraca wszystkie ostrzeżenia graczy
#### Przykładowa odpowiedź
```javascript
[
  {
    "expiration":-1,
    "created_at":1615899462093,
    "reason":"Brak",
    "target":"Steve",
    "source":"rkubapl",
    "type":"WARNING"
   },
   {
    "expiration":1615906664843000,
    "created_at":1615899464843,
    "reason":"Brak",
    "target":"Alex",
    "source":"rkubapl",
    "type":"TEMP_WARNING"
   }
]
```