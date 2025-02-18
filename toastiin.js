(function() {
    const style = document.createElement('style');
    style.textContent = `
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: Arial, sans-serif; }
        #toastiin-container { position: fixed; z-index: 1000; display: flex; flex-direction: column; gap: 10px; }
        .top-right { top: 20px; right: 20px; }
        .top-left { top: 20px; left: 20px; }
        .bottom-right { bottom: 20px; right: 20px; }
        .bottom-left { bottom: 20px; left: 20px; }
        .toast { display: flex; align-items: center; gap: 10px; min-width: 250px; max-width: 300px; padding: 12px 16px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); font-size: 14px; color: white; opacity: 0.9; transition: transform 0.3s, opacity 0.3s; transform: translateY(-100%); }
        .success { background: #2ecc71; }
        .warning { background: #f1c40f; }
        .error { background: #e74c3c; }
        .info { background: #3498db; }
        .icon { font-size: 18px; }
        .message { flex-grow: 1; }
        .close-btn { background: transparent; border: none; font-size: 18px; color: white; cursor: pointer; }
        .close-btn:hover { opacity: 0.7; }
        .toast.to-left { transform: translateX(100%); }
        .toast.to-right { transform: translateX(-100%); }
        .toast.to-top { transform: translateY(100%); }
        .toast.to-bottom { transform: translateY(-100); }
    `;
    document.head.appendChild(style);

    window.showToast = ({ type, messageUser, position, transitionIn, duration }) => {
        const toast = document.createElement('div');
        toast.classList.add('toast', type, transitionIn);
        toast.innerHTML = `
            <div class="icon">${type === 'success' ? '✔' : type === 'error' ? '✖' : type === 'info' ? 'ℹ' : '⚠'}</div>
            <div class="message">${messageUser}</div>
            <button class="close-btn">×</button>
        `;
        toast.querySelector('.close-btn').onclick = () => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); };
        
        const container = document.getElementById('toastiin-container');
        container.classList.add(position);
        container.appendChild(toast);

        setTimeout(() => toast.style.transform = 'translateY(0)', 10);
        setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, duration);
    };
})();
