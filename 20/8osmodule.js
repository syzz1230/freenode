const os = require(`os`);

const user = os.userInfo();
console.log(user)

const currentos={
    name: os.type(),
    release: os.release(),
    totalmem :os.totalmem(),
    freeme:os.freemem()
}