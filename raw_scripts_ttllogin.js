
// cxkey 申请 https://www.juhe.cn/docs/api/id/11

const $ = new Env('我你爹');
var request = require("request");
let status;
status = (status = ($.getval("taitailestatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
let taitailehdArr = [],taitailecount = '',taitailehdsArr = []
const notify = $.isNode() ? require('./sendNotify') : '';
let ttlusername= $.isNode() ? (process.env.ttlusername ? process.env.ttlusername : "") : ($.getdata('ttlusername') ? $.getdata('ttlusername') : "")
let ttlpassword= $.isNode() ? (process.env.ttlpassword ? process.env.ttlpassword : "") : ($.getdata('ttlpassword') ? $.getdata('ttlpassword') : "")
let cxkey= $.isNode() ? (process.env.cxkey ? process.env.cxkey : "") : ($.getdata('cxkey') ? $.getdata('cxkey') : "")
let allMessage = '';
let taitailehds = ""
let taitailehdss = ""
const logs =0;
const host='https://www.ttljf.com/ttl_chefHub/'
var hours = new Date().getHours();
var s = new Date().getMinutes();

var timestamp = Math.round(new Date().getTime()/1000).toString();
!(async () => {
  if (typeof $request !== "undefined") {
        await taitaileck()
  } else {
      if(!$.isNode()){
          taitailehdArr.push($.getdata('ttlusername'))
          let taitailecount = ($.getval('taitailecount') || '1');
          for (let i = 2; i <= taitailecount; i++) {
            taitailehdArr.push($.getdata(`ttlusername${i}`))
            }
    console.log(`------------- 共${taitailehdArr.length}个账号-------------\n`)
      for (let i = 0; i < taitailehdArr.length; i++) {
        if (taitailehdArr[i]) {
          taitailehd = taitailehdArr[i];
          $.index = i + 1;

  }
}
      }else  {
          if (process.env.ttlusername && process.env.ttlusername.indexOf('@') > -1) {
            taitailehdArr = process.env.ttlusername.split('@');
            taitailehdsArr = process.env.ttlpassword.split('@');
            console.log(`您选择的是用"@"隔开\n`)
        } else {
            taitailehds = [process.env.ttlusername]
            taitailehdss = [process.env.ttlpassword]
        };
         
        Object.keys(taitailehds).forEach((item) => {
        if (taitailehds[item]) {
            taitailehdArr.push(taitailehds[item])
        }})
        Object.keys(taitailehdss).forEach((item) => {
        if (taitailehdss[item]) {
            taitailehdsArr.push(taitailehdss[item])
        }
    })
          console.log(`共${taitailehdArr.length}个账号`)
	        for (let k = 0; k < taitailehdArr.length; k++) {
                $.message = ""
                ttlusername = taitailehdArr[k]
                ttlpassword = taitailehdsArr[k]
                $.index = k + 1;
 
          console.log(`\n开始【我你爹${$.index}】`)
          allMessage += `\n开始【我你爹${$.index}】`
await login()

}
await kcjk(633)
await kcjk(631)
await kcjk(62)
await kcjk(61)
if ($.isNode() && allMessage) {
      await notify.sendNotify(`我你爹`, `${allMessage}` )
    }



      }
  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())


function taitaileck() {
   if ($request.url.indexOf("user") > -1) {
  const taitailehd = $request.url

if(taitailehd)    $.setdata(taitailehd,`taitailehd${status}`)


$.log(taitailehd)
taitailehd = taitailehd.match(/loginToken=(.*?)&/)[1] 
$.log(taitailehd)
   $.msg($.name,"",'太太乐'+`${status}` +'数据获取成功！')
 
}
}

async function login(){
 return new Promise((resolve) => {
     
 let nm = {
   		url: `https://www.ttljf.com/ttl_site/user.do?mthd=login&platform=wx_gh&username=${ttlusername}&password=${ttlpassword}`,
   		headers:{
'Host': 'www.ttljf.com',
'Connection': 'keep-alive',
'Accept': 'application/json, text/plain, */*',
'Origin': 'https://weixin.ttljf.com',
'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6304051b)',
'Sec-Fetch-Site': 'same-site',
'Sec-Fetch-Mode': 'cors',
'Sec-Fetch-Dest': 'empty',
'Referer': 'https://weixin.ttljf.com/ttl_wx/',
'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
'Accept-Encoding': 'gzip, deflate'
   		    
   		}
}
   $.get(nm,async(error, response, data) =>{
 //$.log(data)
    try{
        const result = JSON.parse(data)
         
        
        if(result.code == 0000){
        token = result.user.loginToken
        $.log(token)
        await sign()
        await blog()
        await my() 
    }else if(result.code == 9001){
        $.log(result.message)
        allMessage += `\n${result.message}`
    }
}catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }



async function blog(){
 return new Promise((resolve) => {
     body = {"id":"A35D575F-C004-4717-AABC-ED9D1979C3FA","type":"blog"}
     request.put(ttl('Common/share/A35D575F-C004-4717-AABC-ED9D1979C3FA/blog',body), function(error, response, body) {
try {
        if (error) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } 
   
     data = JSON.parse(body);
             if(data.code==0){
              console.log('\n分享任务：'+data.message)  
allMessage +='\n分享任务：'+data.message+'\n'
             }else 
             if(data.code!=0){
             console.log('\n分享任务：'+data.message)
 allMessage +='\n分享任务：'+data.message+'\n'                
             }
}catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    });
    })
    }

async function sign(){
 return new Promise((resolve) => {
    request.put(ttl('user/api/sign/today',''), function(error, response, body) {
     try {
        if (error) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        }   
        
        
        
    data = JSON.parse(body);
             if(data.code==0){
              console.log('\n签到任务：'+data.message) 
              
allMessage +='\n签到任务：'+data.message+'\n'
             }else 
             if(data.code!=0){
             console.log('\n签到任务：'+data.message)
allMessage +='\n签到任务：'+data.message+'\n'
             }
     }catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    });
    })
    }
function my() {
 return new Promise((resolve) => {
  
$.get(ttlget('user/api/my'), async (err, resp, data) => {
   //console.log(data)     
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        }// else {
          if (safeGet(data)) {
            data = JSON.parse(data);
             if(data.code==0){
               console.log('\n积分：'+data.data.integral)  
               console.log('\nmobile：'+data.data.mobile)  
              
              allMessage +='\n积分：'+data.data.integral+'\n'
             }
             }else if(data.code!=0){
             console.log(data.message)
                 
             }
          //}
        
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}

async function kcjk(giftId){
 return new Promise((resolve) => {
     
 let nm = {
   		url: `https://www.ttljf.com/ttl_site/giftApi.do?giftId=${giftId}&mthd=giftDetail&sign=569aeaef6da7470ae38e4907aab980da&userId=`,
   		headers:{
   		    'User-Agent':' Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
   		    
   		}
}
   $.get(nm,async(error, response, data) =>{
 
    try{
   aa = data.match(/{"code":"0000","message":"成功","url":".*","gifts":{"brand":"","collectId":0,"description":"/)      
   bb= data.match(/","exchangeLimit":.+/)     
        cc=aa+bb

         
        const result = JSON.parse(cc)
        stockAmount = result.gifts.stockAmount
        if(stockAmount > 0 ){
         $.msg(`${result.gifts.giftName} 需要积分：${result.gifts.price} 库存：${result.gifts.stockAmount}`)
        $.message += `${result.gifts.giftName} 需要积分：${result.gifts.price} 库存：${result.gifts.stockAmount}\n`
}
}catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
  
  function ttl(a,body) {
  return {

    url: `${host}${a}`,
    body:`${body}`,
    headers: {
'Host': 'www.ttljf.com',
'Accept': 'application/json, text/plain, */*',
'content-type': 'application/json',
'token': token,
'X-Requested-With': 'XMLHttpRequest',
'Accept-Encoding': 'gzip,compress,br,deflate',
'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.14(0x18000e2f) NetType/4G Language/zh_CN',
'Referer': 'https://servicewechat.com/wxe9aa8f1c4a77ddf5/17/page-frame.html' ,      

    }
  }
}
function ttlget(a) {
  return {

    url: `${host}${a}`,
    headers: {
'Host': 'www.ttljf.com',
'Accept': 'application/json, text/plain, */*',
'content-type': 'application/json',
'token': token,
'X-Requested-With': 'XMLHttpRequest',
'Accept-Encoding': 'gzip,compress,br,deflate',
'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.14(0x18000e2f) NetType/4G Language/zh_CN',
'Referer': 'https://servicewechat.com/wxe9aa8f1c4a77ddf5/17/page-frame.html' ,      

    }
  }
}

function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}
function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
