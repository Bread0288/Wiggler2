/* [Imports] ======================================== */
// express: to help run node.js
const express = require('express');
// body-parser -> To parser form from User request
const bodyParser = require('body-parser');
// use Express services
const app = express();
app.set('port', process.env.PORT || 3000); // default 'port' as 3000, and if PORT = 123 is assigned, use it.
app.set('views', __dirname + '/views'); // view(views that this application will use, not 'view' folder); '__dirname': current directory name
app.set('view engine', 'ejs'); // 템플릿을 HTML 형식으로 변환시키는 모듈: HTML에서 <%%>를 사용하여 서버의 데이터를 사용하거나, 코드를 실행. <%--Javascript Code--%>
app.use(bodyParser.json({limit: '20mb'})); // http request body 가 json 일때도 지원, limit extension: to save images
app.use(bodyParser.urlencoded({limit: '20mb', extended: true}));
app.use(express.static(__dirname + '/')); // serving static files(?)
//==========================================================================


/* [Server]: client 의 request receiver(computer) ================== */
// run server at port 80: HTTP 통신
const server = app.listen(80, () => {
    console.log('Server is listening at port 80...');
});
// Socket: use for multiple users
const client = require('socket.io').listen(server).sockets;
//====================================================================


/* [Routing]: make response on request ======================= */
// '': show all contacts! 라는 요청 처리
app.post('/api/login', (req, res) => {
    console.log('loaded index.html');
    return res.render('index.html');
});


// 몽고 없이 그냥 json 형식의 파일을 작성하고 require('./models/movie')처럼 객체를 받아올 수도 있다