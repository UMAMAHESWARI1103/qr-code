const qr=require("qrcode");
let data=
{
    "Name":"Uma",
    "Email":"uma@gmail.com",
    "id":123
};
let stJson=JSON.stringify(data);
qr.toDataURL(stJson,function(err,code)
{
    if(err)return console.log("error");
    console.log(code);
});