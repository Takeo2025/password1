const pwcreate = document.querySelector('.create'); // ボタン
const pwresult = document.querySelector('.result'); // input
const pwcopy  = document.querySelector('.copy'); //コピー

// ボタンをクリックしたらパスワード生成
pwcreate.addEventListener('click', () => {
   
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const numbers = '1234567890';
    const symbols = '!@#$%&*-_+=';
    const allletters = letters + numbers + symbols;
    
    let password = '';

    //必ず特殊記号を入れる
    const symbolIndex = Math.floor(Math.random() * symbols.length);
    password += symbols[symbolIndex]

    //残りの数字をランダムで取得
    for (let i = 0; i < 7; i++) { // 7文字のパスワード
    const randomIndex = Math.floor(Math.random() * allletters.length);
    password += allletters[randomIndex]; 
}
    password = password.split('').sort(() => Math.random() - 0.5).join('')

    console.log(password); // 例: "A3B1C2"
    pwresult.value = password;
});


//コピーを押したときの動作
pwcopy.addEventListener('click', () => {
    const copyDo = pwresult.value;
    navigator.clipboard.writeText(copyDo);
    window.alert('コピーしました!');
});
