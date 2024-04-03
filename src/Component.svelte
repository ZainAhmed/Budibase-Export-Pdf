<script>
  import { getContext } from "svelte"
  import pdfPlugin from './pdfPlugin.js';
  export let text
  // export let content = '';
  const { styleable } = getContext("sdk")

  const component = getContext("component")

  const generatePDF = async () => {
        try {
            const pdfBytes = await pdfPlugin.createPDF('test');
            
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
  <!-- <textarea bind:value={content}></textarea> -->
  <button on:click={generatePDF}>Generate PDF</button>
</div>
