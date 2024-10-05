// 页面加载完成后执行的函数
window.onload = function() {
    // 获取当前页面的URL
    var currentUrl = window.location.href;
    // 获取"?"后面的部分，即查询字符串
    var queryString = currentUrl.includes('?') ? currentUrl.split('?')[1] : '';
    // 如果存在查询字符串，则解析它
    if (queryString) {
        // 将查询字符串转换为对象
        var queryParams = {};
        // 使用decodeURIComponent来处理URL编码的参数值
        var pairs = queryString.split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            // 对参数名和参数值进行解码
            var key = decodeURIComponent(pair[0]);
            var value = decodeURIComponent(pair[1] || '');
            queryParams[key] = value;
        }
        // 根据查询参数显示不同的文字
        var paragraphText = "加载失败";
        if (queryParams['essay']=== '0') {
            paragraphText = "该网页因传播色情内容禁止查看";
proover = "网页违规"
protitle = "网页违规";
        } else if (queryParams['essay'] === '1') {
            protitle = "网页违规"
            paragraphText = "该网页因涉嫌敲诈勒索被禁止查看"
proover = "网页违规";
         }else if (queryParams['essay'] === '2') {
            protitle = "网页违规"
            paragraphText = "该网页因涉嫌非法交易被判定违规";
proover = "网页违规";}
else if (queryParams['essay'] === '3') {
            protitle = "网页违规"
            paragraphText = "该网页因涉嫌传播垃圾信息被判定违规"
proover = "网页违规";}
else if (queryParams['essay'] === '4') {
            protitle = "提示"
            paragraphText = "无权访问该网页"
proover = "提示";}
 else {
        // 如果没有查询参数，显示默认文字
        document.getElementById('page-title').innerText = "网页违规";
        document.getElementById('page-content').innerText = "网页因违规原因禁止查看";
        document.getElementById('pro-over').innerText = "网页违规";
   }
 
        // 更新页面内容
        document.getElementById('page-title').innerText = protitle;
        document.getElementById('page-content').innerText = paragraphText;
document.getElementById('pro-over').innerText = proover;
    } else {
        // 如果没有查询参数，显示默认文字
        document.getElementById('page-title').innerText = "网页违规";
        document.getElementById('page-content').innerText = "网页因违规原因禁止查看";
        document.getElementById('pro-over').innerText = "网页违规";
   }
};