document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const subTabButtons = document.querySelectorAll('.sub-tab-button');
    const subTabContents = document.querySelectorAll('.sub-tab-content');

    // Tab switching logic
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(button.dataset.tab).classList.add('active');
        });
    });

    // Sub-tab switching logic
    subTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentTab = button.closest('.tab-content');
            const subTabGroup = parentTab.querySelectorAll('.sub-tab-button');
            const subTabContentGroup = parentTab.querySelectorAll('.sub-tab-content');

            subTabGroup.forEach(btn => btn.classList.remove('active'));
            subTabContentGroup.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            parentTab.querySelector(`#${button.dataset.subTab}`).classList.add('active');
        });
    });
});
