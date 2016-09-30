walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bDevOPS\b/g, "Ball Fondlers");
	v = v.replace(/\bdevops\b/g, "ball fondlers");
	v = v.replace(/\bDevOps\b/g, "Ball Fondlers");
	v = v.replace(/\bDevops\b/g, "Ball fondlers");
  v = v.replace(/\bdevOps\b/g, "ball Fondlers");


	textNode.nodeValue = v;
}
