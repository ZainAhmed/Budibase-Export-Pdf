<script>
  import { getContext } from "svelte"
  import  createPDF  from './pdfPlugin.js';

  export let text;
  const { styleable } = getContext("sdk")

  const component = getContext("component")

  const generatePDF = async () => {
        try {
            const pdfBytes = await createPDF(text);
            
            // Convert bytes to blob
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);

            // Open the PDF in a new tab
            window.open(url);
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };
</script>

<div use:styleable={$component.styles}>
  <div>Following text will be generated as PDf{text}</div>
  <button on:click={generatePDF}>Generate PDF</button>
</div>
