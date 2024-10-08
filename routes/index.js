var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST webhooks */
router.post('/webhooks', function(req, res, next) {
  // 立即发送200 OK响应
  res.status(200).send('OK');

  // 异步处理webhook请求
  setImmediate(() => {
    console.log('收到 webhook 请求:', req.body);
    // 在这里添加其他处理逻辑
  });
});

module.exports = router;
