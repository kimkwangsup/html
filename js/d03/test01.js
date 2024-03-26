document.getElementById('evt').onclick = function(){
    var id = prompt('아이디 입력');
    if(id === 'luffy'){
        // 아이디가 luffy 와 같을 경우
        var pw = prompt('비밀번호 입력');
        if(pw === '13131'){
            location.href = 'success.html';
        }else{
            location.href = 'error.html';
        }
    }else{
        location.href = 'error.html';
    }
};