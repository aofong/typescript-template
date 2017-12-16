
/**
 * hello word 初始示例
 * 
 * @class hello
 */
class hello {
    private message: string
    constructor(message?: string) {
        message = message;
    }
    word(message?: string) {
        console.log(message || this.message);
    }
}

var Hello = new hello();
Hello.word('hello word!');