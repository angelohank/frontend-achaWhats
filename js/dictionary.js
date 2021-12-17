export function Dictionary() {
    this.datastore = [];

    this.add = function(key, value) {
        if (key && value) {
            this.datastore.push({
                key : key,
                value : value
            });
            return this.datastore;
        }
    };

    this.remoteAt = function(key) {
        for(var i = 0; i < this.datastore.length; i++){
            if(this.datastore[i].key === key){
                this.datastore.splice(this.datastore[i], 1);
            }
        }
        return this.datastore;
    }

    this.findAt = function(key) {
        for(var i = 0; i < this.datastore.length; i++){
            if(this.datastore[i].key === key){
                return this.datastore[i].value;
            }
        }
        return undefined;
    }

    this.size = function() {
        return this.datastore.length;
    }
}

console.log(dict.datastore);