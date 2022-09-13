// 测试
const div = dom.create("<div><span>1<span></div>");
console.log(div);
dom.before(node, dom.create("<div>newNode-before</div>"));
dom.after(node, dom.create("<div>newNode-after</div>"));
dom.wrap(nodeparent, dom.create('<div id="new-parent"></div>'));
const empty = dom.empty(window.nodeempty);
console.log(empty);
const title = dom.attr(window.nodetitle, "title", "blanchecc");
console.log(`title:${dom.attr(window.nodetitle, "title")}`);
// text 测试
const readme = window.readme;
console.log(dom.text(readme));
dom.text(readme, "This is the new content");
console.log(dom.text(readme));
// html 测试
const readhtml = window.readhtml;
console.log(dom.text(readhtml));
dom.html(readhtml, "<span>This is the new HTML</span>");
console.log(dom.text(readhtml));
// style 测试
const style = window.teststyle;
dom.style(style, "font-size", "24px");
dom.style(style, {
    color: "red",
    border: "1px solid pink"
});
console.log(dom.style(style, "color"));
// class 测试
const testclass = window.testclass;
dom.class.add(testclass, "test");
dom.class.remove(testclass, "old-class");
console.log(dom.class.has(testclass, "old-class"));
// 事件监听 测试
const testListener = window.testListener;
fn = ()=>{
    console.log("事件被监听了");
};
dom.on(testListener, "click", fn);
dom.off(testListener, "click", fn);

//# sourceMappingURL=index.de158e3a.js.map
