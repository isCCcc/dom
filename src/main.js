const div = dom.create('<div><span>1<span></div>')
console.log(div)

dom.after(node, dom.create('<div>newNode</div>'))