window.dom = {};
// 创建节点
dom.create = function(string) {
    const template = document.createElement("template");
    template.innerHTML = string.trim();
    return template.content.firstChild;
};
// 在指定节点之后插入节点
dom.after = function(node, newNode) {
    node.parentNode.insertBefore(newNode, node.nextSibling);
};
// 在指定节点之前插入节点
dom.before = function(node, newNode) {
    node.parentNode.insertBefore(newNode, node);
};
// 在指定节点里新增一个子节点
dom.append = function(parent, node) {
    parent.appendChild(node);
};
// 更换指定节点的父节点
dom.wrap = function(node, parent) {
    dom.before(node, parent);
    dom.append(parent, node);
};

//# sourceMappingURL=index.755bdb92.js.map
