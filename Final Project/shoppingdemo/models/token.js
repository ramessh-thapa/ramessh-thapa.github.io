
class Token {

    constructor(token, expiresOn, userName, userId) {
       this.token = token;
       this.expiresOn = expiresOn;
       this.userName = userName;
       this.userId = userId;
    }
    
    static validateToken(token){
        const index = tokens.findIndex(prod => prod.token == token);
        console.log("index",index);
        if(index >-1){
            let validToken = tokens[index];
            let currentDateTime = new Date();
            console.log("valid tokens :", validToken);
            if(currentDateTime > validToken.expiresOn){
                tokens = tokens.filter(x=>x.token !== token);
                return false;
            } else{
                validToken.expiresOn = Date.now;
                tokens.splice(index, 1, validToken);
                return true;
            }
            
        }
        return false;
    }

    static generateToken(userDetails){
        const newExpireOn = new Date();
        const sessionTimeOutInMin = 10;

        newExpireOn.setMinutes(newExpireOn.getMinutes() + sessionTimeOutInMin);
        let newToken = new Token(userDetails.username+"-"+ (new Date()).toString(), newExpireOn, userDetails.username, userDetails.id);
        tokens.push(newToken);
        return newToken;
    }

    static getAllTokens(){
        return tokens;
    }
}

let tokens = [];
module.exports =  Token;