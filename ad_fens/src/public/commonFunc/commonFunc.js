



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
        status : 0,
        data : [] ,
        msg 　: "" ,
    };
    if (data.data.data.code != 0 ){
        err_msg['status'] = data.data.data.code ;
        err_msg['msg'] = data.data.data.msg
        return err_msg ;
    }
    err_msg['data'] = data.data.data.info;
    return err_msg
}
export default {
    checkCode: checkCode ,
    loadLocal: loadLocal
}