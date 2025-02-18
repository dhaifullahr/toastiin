# toastiin
Toastiin is a lightweight JavaScript library for displaying customizable toast notifications with smooth animations and different types

## Features

*   Toast types: `success`, `warning`, `error`, `info`
*   Customizable message and icons for each toast type
*   Position control: `top-left`, `top-right`, `bottom-left`, `bottom-right`
*   Animations: `to-left`, `to-right`, `to-top`, `to-bottom`
*   Auto-hide with configurable duration
*   Close button for manual dismissal
*   Lightweight and minimal dependencies

## Installation

### Method 1: Downloading the script

You can download the `toastiin.js` file and link it to your project:

```
<script src="path/to/toastiin.js"></script>
```

### Method 2: CDN

```
<script src="https://cdn.jsdelivr.net/gh/dhaifullahr/toastiin/toastiin.js"></script>
```

## Usage

### Example HTML

```
<button onclick="showToast({type: 'success', messageUser: 'Successfully saved!', position: 'top-right', transitionIn: 'to-left', duration: 3000})">Show Toast</button>
<div id="toastiin-container"></div>
```

### Example JavaScript

```
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

    setTimeout(() => toast.style.transform = 'translateY(0)', 100);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, duration);
};
```

## Options

| Option | Description | Default |
| --- | --- | --- |
| `type` | Type of the toast notification (`success`, `warning`, `error`, `info`) | `success` |
| `messageUser` | The message content displayed in the toast | `''` |
| `position` | Position of the toast on screen (`top-left`, `top-right`, `bottom-left`, `bottom-right`) | `top-right` |
| `transitionIn` | The animation for how the toast appears (`to-left`, `to-right`, `to-top`, `to-bottom`) | `to-left` |
| `duration` | The duration (in ms) before the toast auto-closes | `3000` |

## Customization

To customize the appearance and behavior of the toast notifications, you can modify the CSS styles in the `style` block of `toastiin.js`. You can change things like background colors, padding, fonts, animations, etc.

## Example Use Case

Here’s an example of how to display different types of notifications:

```
<button onclick="showToast({type: 'success', messageUser: 'Data saved!', position: 'top-right', transitionIn: 'to-top', duration: 3000})">Show Success Toast</button>

<button onclick="showToast({type: 'error', messageUser: 'Error occurred!', position: 'top-left', transitionIn: 'to-bottom', duration: 3000})">Show Error Toast</button>

<button onclick="showToast({type: 'info', messageUser: 'Information message!', position: 'bottom-right', transitionIn: 'to-left', duration: 3000})">Show Info Toast</button>
```

## License

Toastiin is licensed under the MIT License. See LICENSE for more information.
