document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll(".faq__board__row");

    rows.forEach(row => {
        row.addEventListener("click", function () {
            // 현재 클릭한 로우에 active 클래스 토글
            this.classList.toggle("active");

            // 다른 로우에서 active 클래스 제거
            rows.forEach(otherRow => {
                if (otherRow !== this) {
                    otherRow.classList.remove("active");
                }
            });
        });
    });
});