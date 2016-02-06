var app = angular.module("mainModule",[]);

app.controller("SplashController",['$http','$log',function($http,$log){
    var top=this;
    this.baseURL=window.location.href;
    this.encodedURL=this.baseURL.split('https://fcc-api-projects-1-subnak.c9users.io/')[1];
    this.decodedURL=decodeURIComponent(this.encodedURL);
    this.natural=null;
    this.unix=null;
    this.validFormat=false;
    tryConvertingFromDate(this.decodedURL);
    tryConvertingFromUnix(this.decodedURL);
    this.returnObject={unix:this.unix,natural:this.natural};

    function tryConvertingFromDate(decodedURL){
        var date=new Date(decodedURL);
        if(date.toString()==="Invalid Date"){
            $log.log("not a natural date input");
            return;
        }
        top.unix=date.getTime()/1000;
            date=date.toDateString();
            date=date.split(" ");
            date.splice(0,1);
            date=date.join(" ");
        top.natural=date;

        return;
    }
    
    function tryConvertingFromUnix(decodedURL){
        var date = new Date(decodedURL*1000);
        if(date.toString()==="Invalid Date"){
            $log.log("not a unix date input");
            return;
        }
        top.unix=decodedURL;
            date=date.toDateString();
            date=date.split(" ");
            date.splice(0,1);
            date=date.join(" ");
        top.natural=date;

        return;
    }

}])