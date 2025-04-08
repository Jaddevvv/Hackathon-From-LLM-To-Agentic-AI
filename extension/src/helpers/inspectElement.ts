interface InspectorHighlight {
    element: HTMLElement | null;
    originalOutline: string;
  }
  

export const startElementInspector = (): void => {
    let highlight: InspectorHighlight = {
      element: null,
      originalOutline: ''
    };

    console.log("Hello from MAIN inspectElement.ts");
  
    const handleMouseOver = (e: MouseEvent) => {
      // Reset previous element
      if (highlight.element) {
        highlight.element.style.outline = highlight.originalOutline;
      }
      
      const target = e.target as HTMLElement;
      highlight.element = target;
      highlight.originalOutline = target.style.outline;
      
      // Highlight current element
      target.style.outline = '2px solid #f00';
      target.style.cursor = 'pointer';
    };
  
    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.target as HTMLElement;
      
      console.log("Hello from inspectElement.ts");
      console.log({
        element: target,
        tagName: target.tagName,
        classList: Array.from(target.classList),
        id: target.id,
        attributes: Array.from(target.attributes)
      });
      
      // Clean up
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('click', handleClick);
      target.style.outline = highlight.originalOutline;
    };
  
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('click', handleClick);
  };