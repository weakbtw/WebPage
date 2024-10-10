function processNode(node) {
    if (node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            let message = node.nodeName;
            let proceed = confirm(`Вузол: ${message}. Продовжити далі?`);

            if (proceed) {
                if (node.firstChild) {
                    processNode(node.firstChild);
                } else {
                    while (node) {
                        if (node.nextSibling) {
                            processNode(node.nextSibling);
                            return;
                        }
                        node = node.parentNode;
                    }
                    alert('Це був останній елемент. Робота завершена.');
                }
            } else {
                if (node.parentNode) {
                    let returnToParent = confirm("Повернутися до батьківського елемента?");
                    if (returnToParent) {
                        processNode(node.parentNode);
                    } else {
                        alert('Робота завершена.');
                    }
                } else {
                    alert('Це кореневий елемент. Немає батьківського елемента.');
                }
            }
        }

        if (node.nextSibling) {
            processNode(node.nextSibling);
        }
    } else {
        alert('Кінець роботи скрипта');
    }
}

processNode(document.documentElement);
