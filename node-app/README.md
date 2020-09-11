# server

- 서버가 변경 될 때 항상 서버를 호출하기 어려우니 nodemon을 활용.

get방식
- req.query
http://localhost:8080/post?name=sin&age=27
- req.params
http://localhost:8080/post/:id
- req.body<br/>
key와 value로 raw데이터에 JSON 형태

`bodyparser를 만들어야되는데 express에 내장되어 있기 때문`
`미들웨어를 사용할 때 use(express.json()) bodyparser가 실행됨`

