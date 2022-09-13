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