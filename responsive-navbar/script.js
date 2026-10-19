
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuIcon.setAttribute("aria-expanded", isOpen);
        menuIcon.setAttribute(
            "aria-label",
            isOpen ? "Đóng menu" : "Mở menu"
        );

        menuIcon.textContent = isOpen ? "✕" : "☰";
    });

    // Đóng menu sau khi chọn liên kết trên điện thoại
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuIcon.setAttribute("aria-expanded", "false");
            menuIcon.setAttribute("aria-label", "Mở menu");
            menuIcon.textContent = "☰";
        });
    });

    // Đảm bảo menu trở lại trạng thái phù hợp khi đổi kích thước
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            menuIcon.setAttribute("aria-expanded", "false");
            menuIcon.setAttribute("aria-label", "Mở menu");
            menuIcon.textContent = "☰";
        }
    });
});
