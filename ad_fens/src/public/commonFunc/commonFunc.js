



function loadLocal(url,self){
         
            var data = {
                name: url,
                params: {

                }
            }
        self.$router.push(data)
        }

function checkCode(data){
    var err_msg = {
        status: data.data.data.code,
        data : [] ,
        msg 　: "" ,
    };
    if (data.data.data.code == 1002 ){
        err_msg['status'] = data.data.data.code ;
        err_msg['msg'] = data.data.data.msg;
        window.sessionStorage.setItem('userInfo','')
        this.$router.push('login')
        return err_msg ;
    }else{
    
    }
    err_msg['data'] = data.data.data.info;
    return err_msg
}

function UnixToDateTime(unixTime, isFull) {
  
    isFull = isFull || false;
    unixTime = parseInt(unixTime) + 8 * 60 * 60;

    var time = new Date(unixTime * 1000);
    var ymdhis = "";
    ymdhis += time.getUTCFullYear() + "-";
    ymdhis += ('0' + (time.getUTCMonth() + 1)).substr(-2) + "-";
    ymdhis += ('0' + time.getUTCDate()).substr(-2);
    if (isFull == true) {
        ymdhis += " " + ('0' + time.getUTCHours()).substr(-2) + ":";
        ymdhis += ('0' + time.getUTCMinutes()).substr(-2) + ":";
        ymdhis += ('0' + time.getUTCSeconds()).substr(-2);
    }
    return ymdhis;
}

function getLocalTime(t,flag) {
    var timestamp = parseInt(new Date().valueOf() / 1000);
    if ("number" == typeof (t)) {
        timestamp += t;
    }
    return UnixToDateTime(timestamp, flag);
}




export default {
    checkCode: checkCode ,
    loadLocal: loadLocal ,
    getLocalTime: getLocalTime,
    UnixToDateTime: UnixToDateTime,
   
}