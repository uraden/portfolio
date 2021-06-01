export const drawRect = (detections, ctx) =>{
    detections.forEach(predictions=>{
        const [x,y,width, height] = predictions['bbox'];
        const text = predictions['class']
       

        //styling
        const color = Math.floor(Math.random()*16777215).toString(16);
        ctx.strokeStyle = '#' + color
        ctx.font = '18px Arial';

       
        // draw rectangle and text
        ctx.beginPath();   
        ctx.fillStyle = '#' + color
        ctx.fillText(text, x, y);
        ctx.rect(x, y, width, height); 
        ctx.stroke();
    })
 }