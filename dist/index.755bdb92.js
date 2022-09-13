window.dom = {
    // 创建节点
    create (string) {
        const template = document.createElement("template");
        template.innerHTML = string.trim();
        return template.content.firstChild;
    },
    // 在指定节点之后插入节点
    after (node, newNode) {
        node.parentNode.insertBefore(newNode, node.nextSibling);
    },
    // 在指定节点之前插入节点
    before (node, newNode) {
        node.parentNode.insertBefore(newNode, node);
    },
    // 在指定节点里新增一个子节点
    append (parent, node) {
        parent.appendChild(node);
    },
    // 更换指定节点的父节点
    wrap (node, parent) {
        dom.before(node, parent);
        dom.append(parent, node);
    },
    // 删除指定节点
    remove (node) {
        node.parentNode.removeChild(node);
        return node;
    },
    // 清空指点节点的所有子节点
    empty (node) {
        const array = [];
        let x = node.firstChild;
        while(x){
            array.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        return array;
    },
    // 读写属性
    attr (node, name, value) {
        if (arguments.length === 3) node.setAttribute(name, value);
        else if (arguments.length === 2) return node.getAttribute(name);
    },
    // 读写文本属性
    text (node, string) {
        // 写操作：dom.text(div,'newTextContent')
        if (arguments.length === 2) {
            if ("innerText" in node) node.innerText = string // 兼容ie
            ;
            else node.textContent = string;
        } else if (arguments.length === 1) {
            if ("innerText" in node) return node.innerText;
            else return node.textContent;
        }
    },
    // 读写html内容
    html (node, string) {
        if (arguments.length === 2) node.innerHTML = string;
        else if (arguments.length === 1) return node.innerHTML;
    },
    // 修改style内容
    style (node, name, value) {
        if (arguments.length === 3) // dom.style(style, 'font-size', '24px');
        node.style[name] = value;
        else if (arguments.length === 2) {
            if (typeof name === "string") // dom.style(style, 'color')
            return node.style[name];
            else if (name instanceof Object) // dom.style(style, { color: 'red', border: '1px solid pink' })
            for(let key in name)node.style[key] = name[key];
        }
    },
    // 操作标签里的class属性
    class: {
        add (node, className) {
            node.classList.add(className);
        },
        remove (node, className) {
            node.classList.remove(className);
        },
        has (node, className) {
            return node.classList.contains(className);
        }
    },
    // 用于添加事件监听
    on (node, eventName, fn) {
        node.addEventListener(eventName, fn);
    },
    // 用于删除事件监听
    off (node, eventName, fn) {
        node.removeEventListener(eventName, fn);
    }
};

//# sourceMappingURL=index.755bdb92.js.map
