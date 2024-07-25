/* script.js */
window.addEventListener("orientationchange", handleOrientationChange);

function handleOrientationChange() {
    const rotateMessage = document.getElementById('rotate-message');
    if (window.innerHeight > window.innerWidth) {
        // 세로 모드일 때 메시지 표시
        rotateMessage.classList.remove('hidden');
    } else {
        // 가로 모드일 때 메시지 숨기기
        rotateMessage.classList.add('hidden');
    }
}

// 페이지 로드 시 초기 방향 감지
document.addEventListener("DOMContentLoaded", function() {
    handleOrientationChange();
});
