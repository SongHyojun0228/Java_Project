document.addEventListener("DOMContentLoaded", () => {
    // 🌿 이메일 입력에서 이메일 형식 여부 검사
    const inputEmail = document.querySelector(".email_input");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailCaution = document.querySelector(".email_caution");
    let emailPass = false;

    inputEmail.addEventListener("input", () => {
        if (emailRegex.test(inputEmail.value)) {
            emailCaution.style.display = 'none';
            emailPass = true;
        } else {
            emailCaution.style.display = 'block';
            emailCaution.style.color = 'rgb(255, 53, 53)';
            emailPass = false;
        }
        checkFormValid();
    });

    // 🌿 해당 이메일 계정의 존재 여부

    // 🌿 비밀번호 재확인 일치 여부 
    const inputPassword = document.querySelector(".input_password");
    const inputCheckedPassword = document.querySelector(".input_checked_password");
    const passwordCaution = document.querySelector(".password_caution");
    let passwordPass = false;

    inputCheckedPassword.addEventListener("keyup", () => {
        if (inputPassword.value === inputCheckedPassword.value) {
            passwordCaution.style.display = 'none';
            passwordPass = true;
        } else {
            passwordCaution.style.display = 'block';
            passwordCaution.style.color = 'rgb(255, 53, 53)';
            passwordPass = false;
        }
        checkFormValid();
    });

    // 🌿 모든 양식이 채워져 있고, 모든 유효성 검사를 통과했을 경우 :
    // btnColor 변경
    const nextBtn = document.querySelector(".next_btn");
    const inputName = document.querySelector(".input_name");

    const checkFormValid = () => {
        if (emailPass && passwordPass && inputName.value.length > 0) {
            nextBtn.style.backgroundColor = "rgb(6, 195, 115)";
            nextBtn.style.fontWeight = "500";
        } else {
            nextBtn.style.backgroundColor = "rgb(151, 231, 198)";
        }
    };

    inputEmail.addEventListener("input", checkFormValid);   
    inputPassword.addEventListener("input", checkFormValid);
    inputCheckedPassword.addEventListener("input", checkFormValid);
    inputName.addEventListener("input", checkFormValid);
});