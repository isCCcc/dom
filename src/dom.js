window.dom = {};

// 创建节点
dom.create = function (string) {
    const template = document.createElement('template');
    template.innerHTML = string.trim();
    return template.content.firstChild;
}
// 在指定节点之后插入节点
dom.after = function (node, newNode) {
    node.parentNode.insertBefore(newNode, node.nextSibling);
}
// 在指定节点之前插入节点
dom.before = function (node, newNode) {
    node.parentNode.insertBefore(newNode, node);
}
// 在指定节点里新增一个子节点
dom.append = function (parent, node) {
    parent.appendChild(node)
}
// 更换指定节点的父节点
dom.wrap = function (node, parent) {
    dom.before(node, parent);
    dom.append(parent, node);
}


// 删除指定节点
dom.remove = function (node) {
    node.parentNode.removeChild(node)
    return node
}
// 清空指点节点的所有子节点
dom.empty = function (node) {
    const array = [];
    let x = node.firstChild
    while (x) {
        array.push(dom.remove(node.firstChild))
        x = node.firstChild
    }
    return array
}