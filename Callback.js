Array.prototype.every2 = function(callback){
    for(var i in this){
        if(this.hasOwnProperty(i)){
            var result = callback(this[i], this[''])
        }
    }
}

var courses = [
    {nam = 'abc',
    coin = 680
    },
    {nam = '123',
    coin = 680
    }
]