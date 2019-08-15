### lua-request

The project is based on [luasocket](https://github.com/diegonehab/luasocket).

#### Why lua-request

Provide a more friendly interface to lua http.

#### Usage

By running Luarocks you will actually get a `/usr/local/share/lua/5.3/luarequest.lua`.

```sh
luarocks install luasocket
luarocks install luarequest
```

#### test & example

- server: `/test/server`

it's a [koa](https://koajs.com/) server

```sh
yarn install
yarn start
```

- client `/test/client`

```sh
lua main.lua
```
