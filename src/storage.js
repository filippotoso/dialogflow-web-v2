export default class CustomStorage {

    getItem(key) {
        return customStorage.getItem(getKey(key));
    }
    
    setItem(key, value) {
        return customStorage.setItem(getKey(key), value);
    }

    getKey(key) {
        var url = window.location.pathname;
        var filename = url.substring(url.lastIndexOf('/') + 1);
        return filename + '_' + key;
    }

}
